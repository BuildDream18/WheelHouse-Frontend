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

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

const MASTER_TIME_SLOTS = [
  { start: "08:00", end: "08:30" },
  { start: "08:30", end: "09:00" },
  { start: "09:00", end: "09:30" },
  { start: "09:30", end: "10:00" },
  { start: "13:00", end: "13:30" },
  { start: "13:30", end: "14:00" },
  { start: "14:00", end: "14:30" },
  { start: "14:30", end: "15:00" }
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
  const [busyTimes, setBusyTimes] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  function fetchBusySlots(selectedDate) {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: SCOPES,
      }).then(() => {
        return gapi.auth2.getAuthInstance().signIn();
      }).then(() => {
        // Set the time range for the selected day
        const startOfDay = new Date(selectedDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(selectedDate);
        endOfDay.setHours(23, 59, 59, 999);
  
        return gapi.client.calendar.freebusy.query({
          timeMin: startOfDay.toISOString(),
          timeMax: endOfDay.toISOString(),
          items: [{ id: 'victorcastro9218@gmail.com' }]
        });
      }).then(response => {
        const busy = response.result.calendars['victorcastro9218@gmail.com'].busy;
        setBusyTimes(busy);
  
        // Compute available slots
        const slots = MASTER_TIME_SLOTS.filter(slot => {
          // Build slot start/end as Date objects for the selected day
          const [slotStartHour, slotStartMin] = slot.start.split(':').map(Number);
          const [slotEndHour, slotEndMin] = slot.end.split(':').map(Number);
  
          const slotStart = new Date(selectedDate);
          slotStart.setHours(slotStartHour, slotStartMin, 0, 0);
          const slotEnd = new Date(selectedDate);
          slotEnd.setHours(slotEndHour, slotEndMin, 0, 0);
  
          // Check if this slot overlaps with any busy time
          return !busy.some(busyTime => {
            const busyStart = new Date(busyTime.start);
            const busyEnd = new Date(busyTime.end);
            return slotStart < busyEnd && slotEnd > busyStart;
          });
        });
  
        setAvailableSlots(slots);
      });
    });
  }

  useEffect(() => {
    fetchBusySlots(selectedDate);
  }, [selectedDate]);

  const handleBook = () => {
    const message = `Booking confirmed for ${selectedTime} on ${selectedDate.toDateString()} (${timezone})`;

    const templateParams = {
      to_name: "Victor",
      message,
      to_email: "victorcastro9218@gmail.com"
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then((res) => alert("Booking sent successfully!"))
      .catch((err) => alert("Error sending email."));
  };

  return (
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
                timeSlots={availableSlots.map(slot => `${slot.start} AM - ${slot.end} AM`)} // or format as needed
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
  );
}

export default Confirmation;
