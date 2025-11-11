import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Calendar from "react-calendar";
import Select from "react-select";
import { getTimeZones } from '@vvo/tzdb';
import { gapi } from 'gapi-script';
import 'react-calendar/dist/Calendar.css';
import "./Confirmation.css";
import emailjs from 'emailjs-com';
import logo from '../../assets/images/logo.png';
import ComplimentaryGuide from './ComplimentaryGuide';

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
  

function Confirmation() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("Chicago");
  const [showGuide, setShowGuide] = useState(false);

  function fetchBusySlots() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: SCOPES,
      }).then(() => {
        return gapi.auth2.getAuthInstance().signIn();
      }).then(() => {
        const now = new Date();
        const end = new Date();
        end.setDate(now.getDate() + 7); // Next 7 days
  
        return gapi.client.calendar.freebusy.query({
          timeMin: now.toISOString(),
          timeMax: end.toISOString(),
          items: [{ id: 'victorcastro9218@gmail.com' }]
        });
      }).then(response => {
        const busyTimes = response.result.calendars['victorcastro9218@gmail.com'].busy;
        console.log('Busy slots:', busyTimes);
        // Now you can compute available slots based on your timeSlots array
      });
    });
  }

  useEffect(() => {
    fetchBusySlots();
  }, []);

  const handleBook = () => {
    const message = `Booking confirmed for ${selectedTime} on ${selectedDate.toDateString()} (${timezone})`;

    const templateParams = {
      to_name: "Gastro",
      message,
      to_email: "victorgastro18@gmail.com",
      to_title: "Confirmation"
    };

    emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY)
      .then((res) => {
        setShowGuide(true);
      })
      .catch((err) => alert("Error sending email."));
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
              <Box display="flex" gap={4}>
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
                  <button onClick={handleBook}>Confirm & Send to Gmail</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Confirmation;
