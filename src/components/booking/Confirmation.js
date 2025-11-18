import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Calendar from "react-calendar";
import Select from "react-select";
import { getTimeZones } from '@vvo/tzdb';
import 'react-calendar/dist/Calendar.css';
import "./Confirmation.css";
import emailjs from 'emailjs-com';
import logo from '../../assets/images/logo.png';
import ComplimentaryGuide from './ComplimentaryGuide';

// Import gapi-script - it's in package.json, but we'll handle errors gracefully
import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

const EMAIL_SERVICE_ID = "service_j7alg5m";
const EMAIL_TEMPLATE_ID = "template_7auz72q";
const EMAIL_PUBLIC_KEY = "1t_B_IOuSwzsxNCNk";

const timeSlots = [
  "8:00 AM - 8:30 AM",
  "8:30 AM - 9:00 AM",
  "9:00 AM - 9:30 AM",
  "9:30 AM - 10:00 AM",
  "1:00 PM - 1:30 PM",
  "1:30 PM - 2:00 PM",
  "2:00 PM - 2:30 PM",
  "2:30 PM - 3:00 PM"
];

function formatOffset(minutes) {
  const sign = minutes >= 0 ? '+' : '-';
  const abs = Math.abs(minutes);
  const hours = String(Math.floor(abs / 60)).padStart(2, '0');
  const mins = String(abs % 60).padStart(2, '0');
  return `${sign}${hours}:${mins}`;
}

const timeZoneOptions = getTimeZones().map(tz => ({
  value: tz.name,
  label: `(${tz.abbreviation} ${formatOffset(tz.rawOffsetInMinutes)}) ${tz.mainCities[0] || tz.name.split('/').pop()}`
}));

function formatDateHeader(date) {
  if (!date) return "";
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  // Get ordinal suffix
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${dayName} ${day}${getOrdinal(day)} ${month}`;
}

const Sidebar = () => (
  <div className="confirmation-sidebar">
    <img src={logo} alt="Wheelhouse Construction" className="logo" />
    <h2>Exploration Event</h2>
    <p>👤 Matthew Bunn</p>
    <p>⏱️ 30 minutes</p>
    <p>📍 Online Meeting</p>
  </div>
);

const TimeSlotList = ({ timeSlots, selectedTime, setSelectedTime, selectedDate }) => (
  <div className="confirmation-time-slots">
    <h3>{formatDateHeader(selectedDate)}</h3>
    <div className="confirmation-slot-list">
      {timeSlots.map((slot) => (
        <button
          key={slot}
          className={`confirmation-slot${selectedTime === slot ? " selected" : ""}`}
          onClick={() => setSelectedTime(slot)}
          type="button"
        >
          {slot} (CDT)
        </button>
      ))}
    </div>
  </div>
);

const TimeZoneSelect = ({ timezone, setTimezone }) => {
  return (
    <Box display="flex" alignItems="center" gap={2} className="confirmation-time-zone-row">
      <span style={{ fontWeight: 'bold' }}>Time Zone:</span>
      <Box className="confirmation-time-zone-input">
        <Select
          value={timeZoneOptions.find(opt => opt.value === timezone)}
          onChange={opt => setTimezone(opt.value)}
          options={timeZoneOptions}
          isSearchable
        />
      </Box>
      <span style={{ fontWeight: 'bold', marginLeft: 16 }}>Duration:</span>
      <span>30 Mins.</span>
    </Box>
  );
};
  

// Step definitions to match Booking component
const customHomesSteps = [
  {
    title: 'What stage are you in?',
    name: 'stage',
  },
  {
    title: 'What is your ideal timeline for moving in?',
    name: 'timeline',
  },
  {
    title: 'What is your estimated budget for the project?',
    name: 'budget',
  },
];

const renovationSteps = [
  {
    title: 'What is your primary goal for this renovation?',
    name: 'goal',
  },
  {
    title: 'What is your estimated budget for this renovation?',
    name: 'budget',
  },
  {
    title: 'What is your ideal timeline for completion?',
    name: 'timeline',
  },
];

const firstStep = {
  title: 'What do you need help with?',
  name: 'help',
};

function Confirmation({ bookingAnswers = {} }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("Chicago");
  const [showGuide, setShowGuide] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' // 'success' or 'error'
  });

  // Get the steps based on selected help type
  const getBookingSteps = () => {
    if (!bookingAnswers.help) return [];
    
    let steps = [firstStep];
    if (bookingAnswers.help === 'Custom Homes') {
      steps = [...steps, ...customHomesSteps];
    } else if (bookingAnswers.help === 'Renovation') {
      steps = [...steps, ...renovationSteps];
    }
    return steps;
  };

  const bookingSteps = getBookingSteps();

  function fetchBusySlots() {
    // Check if API keys are configured (not placeholders)
    if (!API_KEY || API_KEY === 'YOUR_GOOGLE_API_KEY' || 
        !CLIENT_ID || CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
      console.log('Google Calendar API not configured. Skipping busy slot check.');
      return;
    }

    // Check if gapi is available
    const gapiInstance = gapi || (typeof window !== 'undefined' ? window.gapi : null);
    if (!gapiInstance || typeof gapiInstance.load !== 'function') {
      console.log('Google API not loaded. Skipping busy slot check.');
      return;
    }

    try {
      gapiInstance.load('client:auth2', () => {
        gapiInstance.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: SCOPES,
        }).then(() => {
          const authInstance = gapiInstance.auth2.getAuthInstance();
          
          // Check if user is already signed in
          if (authInstance.isSignedIn.get()) {
            // User is already signed in, use existing session
            return Promise.resolve(authInstance.currentUser.get());
          } else {
            // User needs to sign in
            return authInstance.signIn({
              prompt: 'consent' // Force consent screen to get refresh token
            });
          }
        }).then(() => {
          const now = new Date();
          const end = new Date();
          end.setDate(now.getDate() + 7); // Next 7 days
    
          return gapiInstance.client.calendar.freebusy.query({
            timeMin: now.toISOString(),
            timeMax: end.toISOString(),
            items: [{ id: 'victorcastro9218@gmail.com' }]
          });
        }).then(response => {
          const busyTimes = response.result.calendars['victorcastro9218@gmail.com'].busy;
          console.log('Busy slots:', busyTimes);
          // Now you can compute available slots based on your timeSlots array
        }).catch((error) => {
          console.error('Error fetching busy slots from Google Calendar:', error);
          
          // Handle specific error cases
          if (error.error === 'invalid_grant' || error.message?.includes('Invalid grant')) {
            console.warn('OAuth token expired or invalid. User needs to re-authenticate.');
            // Try to sign out and clear the session
            try {
              const authInstance = gapiInstance.auth2?.getAuthInstance();
              if (authInstance) {
                authInstance.signOut().then(() => {
                  console.log('Signed out. User will need to sign in again on next attempt.');
                });
              }
            } catch (signOutError) {
              console.error('Error signing out:', signOutError);
            }
          }
          
          // Continue without blocking the UI - the booking system will work without calendar integration
        });
      });
    } catch (error) {
      console.error('Error initializing Google Calendar API:', error);
      // Continue without blocking the UI
    }
  }

  useEffect(() => {
    fetchBusySlots();
  }, []);

  const handleConfirm = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      description: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSend = () => {
    // Validate form
    if (!formData.name || !formData.phone || !formData.email) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields (Name, Phone, Email)',
        severity: 'error'
      });
      return;
    }

    // Show progress modal
    setShowProgress(true);
    setOpenModal(false);

    // Prepare booking summary from questionnaire
    const bookingSummary = bookingSteps.map((step) => {
      const answer = bookingAnswers[step.name];
      if (!answer) return null;
      return `- ${step.title}: ${answer}`;
    }).filter(Boolean).join('\n');

    // Prepare email message
    const bookingDetails = `
Booking Questionnaire Answers:
${bookingSummary}

Meeting Details:
- Date: ${formatDateHeader(selectedDate)}
- Time: ${selectedTime}
- Timezone: ${timeZoneOptions.find(opt => opt.value === timezone)?.label || timezone}

Contact Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Description: ${formData.description || 'N/A'}
    `;

    const templateParams = {
      to_name: "Wheelhouse Construction",
      message: bookingDetails,
      to_email: "info@wheelhousesc.com",
      to_title: "Booking Confirmation",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone
    };

    // Send email
    emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY)
      .then((res) => {
        setShowProgress(false);
        setSnackbar({
          open: true,
          message: 'Booking confirmation sent successfully!',
          severity: 'success'
        });
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          description: ''
        });
        // Optionally show guide after success
        setTimeout(() => {
          setShowGuide(true);
        }, 2000);
      })
      .catch((err) => {
        setShowProgress(false);
        setSnackbar({
          open: true,
          message: 'Error sending email. Please try again.',
          severity: 'error'
        });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      {showGuide ? (
        <ComplimentaryGuide />
      ) : (
        <div className="confirmation-app-container">
          <h1 className="confirmation-header">Exploration Meeting With Us</h1>
          <div className="confirmation-booking-box">
            <Sidebar />
            <div className="confirmation-main-content">
              <TimeZoneSelect timezone={timezone} setTimezone={setTimezone} />
              <Box display="flex" gap={4} className="confirmation-calendar-wrapper">
                <Box className="confirmation-calendar-box" flex={1}>
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={new Date()} // Prevent selecting past dates
                    tileDisabled={({ date, view }) => view === 'month' && (date.getDay() === 0 || date.getDay() === 6)}
                    tileClassName={({ date, view }) => {
                      if (
                        selectedDate &&
                        date.getDate() === selectedDate.getDate() &&
                        date.getMonth() === selectedDate.getMonth() &&
                        date.getFullYear() === selectedDate.getFullYear()
                      ) {
                        return 'custom-selected-date';
                      }
                      // Add custom class for today
                      if (
                        date.getDate() === new Date().getDate() &&
                        date.getMonth() === new Date().getMonth() &&
                        date.getFullYear() === new Date().getFullYear()
                      ) {
                        return 'custom-today-date';
                      }
                      return null;
                    }}
                    prevLabel={<span className="calendar-nav-arrow">{'<'}</span>}
                    nextLabel={<span className="calendar-nav-arrow">{'>'}</span>}
                    formatShortWeekday={(locale, date) =>
                      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
                    }
                  />
                </Box>
                <Box className="confirmation-timeslotlist-box" flex={1}>
                  <TimeSlotList
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                    timeSlots={timeSlots}
                    selectedDate={selectedDate}
                  />
                </Box>
              </Box>
              {selectedTime && (
                <div className="confirmation">
                  <p>Booking: {selectedTime} on {selectedDate.toDateString()}</p>
                  <button onClick={handleConfirm}>Confirm</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Information Modal */}
      <Dialog 
        open={openModal} 
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            padding: 1
          }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>Contact Information</DialogTitle>
        <DialogContent>
          {/* Booking Summary Section */}
          <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Box sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem', color: '#570f17' }}>
              Booking Summary
            </Box>
            
            {/* Show selected answers from booking steps */}
            {bookingSteps.map((step, index) => {
              const answer = bookingAnswers[step.name];
              if (!answer) return null;
              return (
                <Box key={index} sx={{ mb: 1.5 }}>
                  <Box sx={{ fontSize: '0.85rem', color: '#666', mb: 0.5 }}>
                    {step.title}
                  </Box>
                  <Box sx={{ fontSize: '0.95rem', fontWeight: 500, color: '#222' }}>
                    {answer}
                  </Box>
                </Box>
              );
            })}
            
            {/* Timezone */}
            <Box sx={{ mb: 1.5, mt: 2, pt: 2, borderTop: '1px solid #ddd' }}>
              <Box sx={{ fontSize: '0.85rem', color: '#666', mb: 0.5 }}>
                Timezone
              </Box>
              <Box sx={{ fontSize: '0.95rem', fontWeight: 500, color: '#222' }}>
                {timeZoneOptions.find(opt => opt.value === timezone)?.label || timezone}
              </Box>
            </Box>
            
            {/* Selected Date */}
            <Box sx={{ mb: 1.5 }}>
              <Box sx={{ fontSize: '0.85rem', color: '#666', mb: 0.5 }}>
                Date
              </Box>
              <Box sx={{ fontSize: '0.95rem', fontWeight: 500, color: '#222' }}>
                {formatDateHeader(selectedDate)}
              </Box>
            </Box>
            
            {/* Selected Time Slot */}
            {selectedTime && (
              <Box sx={{ mb: 1.5 }}>
                <Box sx={{ fontSize: '0.85rem', color: '#666', mb: 0.5 }}>
                  Time Slot
                </Box>
                <Box sx={{ fontSize: '0.95rem', fontWeight: 500, color: '#222' }}>
                  {selectedTime}
                </Box>
              </Box>
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Phone *"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              type="tel"
            />
            <TextField
              label="Email *"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              type="email"
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Tell us about your project or any additional information..."
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCloseModal} color="inherit">
            Cancel
          </Button>
          <Button 
            onClick={handleSend} 
            variant="contained"
            sx={{ bgcolor: '#570f17', '&:hover': { bgcolor: '#911515' } }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>

      {/* Progress Modal */}
      <Dialog 
        open={showProgress}
        PaperProps={{
          sx: {
            borderRadius: 2,
            padding: 3,
            minWidth: 250
          }
        }}
      >
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress size={50} />
            <Box sx={{ textAlign: 'center', fontWeight: 500 }}>
              Sending booking confirmation...
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Confirmation;
