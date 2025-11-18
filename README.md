# Wheelhouse Construction - Discovery Booking Website

A modern, responsive React web application for Wheelhouse Construction, featuring a comprehensive booking system, project showcases, and company information.

## 🏗️ Project Overview

This is a full-stack React application designed for Wheelhouse Construction to showcase their custom homes, renovations, and multi-family projects. The site includes an interactive booking system that allows clients to schedule exploration meetings with the team.

## ✨ Features

### Core Features
- **Responsive Design**: Fully mobile-responsive across all pages
- **Project Showcases**: 
  - Custom Homes (6 case studies)
  - Renovations (3 case studies)
  - Multi-Family projects
- **Interactive Booking System**:
  - Multi-step questionnaire to understand client needs
  - Calendar integration for date/time selection
  - Timezone support
  - Email confirmation via EmailJS
- **Company Information**:
  - About page with team information
  - Our Process page
  - References and certifications
- **User Authentication**: Sign In/Sign Up pages (currently hidden in header)

### Technical Features
- **Error Handling**: React Error Boundary for graceful error handling
- **Google Calendar API**: Integration for checking busy slots (optional)
- **Email Integration**: EmailJS for sending booking confirmations
- **Material-UI**: Modern UI components and responsive design
- **React Router**: Client-side routing for seamless navigation

## 🛠️ Tech Stack

- **React** 19.1.0
- **React Router DOM** 7.6.1
- **Material-UI (MUI)** 7.1.0
- **EmailJS** 3.2.0
- **React Calendar** 6.0.0
- **React Select** 5.10.2
- **gapi-script** 1.2.0 (Google Calendar API)
- **@vvo/tzdb** 6.178.0 (Timezone database)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WheelHouse-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and minified for best performance.

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App to expose all configuration files.

## 🔧 Configuration

### EmailJS Configuration
The booking system uses EmailJS to send confirmation emails. Configure in `src/components/booking/Confirmation.js`:
- `EMAIL_SERVICE_ID`: Your EmailJS service ID
- `EMAIL_TEMPLATE_ID`: Your EmailJS template ID
- `EMAIL_PUBLIC_KEY`: Your EmailJS public key
- Email recipient: `info@wheelhousesc.com`

### Google Calendar API (Optional)
To enable calendar integration for checking busy slots, configure in `src/components/booking/Confirmation.js`:
- `CLIENT_ID`: Your Google OAuth Client ID
- `API_KEY`: Your Google API Key

**Note**: The application works without Google Calendar API - it will gracefully skip calendar integration if not configured.

## 📱 Pages & Routes

### Public Pages
- `/` - Homepage
- `/about` - About page
- `/custom-homes` - Custom homes overview
- `/custom-homes/ch-case-study-1` through `/ch-case-study-6` - Individual case studies
- `/renovations` - Renovations overview
- `/renovations/rv-case-study-1` through `/rv-case-study-3` - Individual case studies
- `/multi-family` - Multi-family projects
- `/our-process` - Company process information
- `/references` - References and certifications

### Booking Flow
- `/booking` - Multi-step questionnaire
- `/confirmation` - Calendar and time slot selection (automatically navigated after questionnaire)
- Contact information modal - Appears when confirming booking

### Authentication (Currently Hidden)
- `/signin` - Sign in page
- `/signup` - Sign up page

## 🎨 Features in Detail

### Booking System
1. **Questionnaire**: Multi-step form asking about:
   - Project type (Custom Homes or Renovation)
   - Project stage/goal
   - Timeline
   - Budget
2. **Calendar Selection**: 
   - Interactive calendar with date selection
   - Timezone selector
   - Available time slots
3. **Confirmation**:
   - Review booking summary
   - Enter contact information
   - Send confirmation email

### Responsive Design
- Mobile-first approach
- Breakpoints: 600px, 960px, 1200px
- Hamburger menu on mobile
- Optimized layouts for all screen sizes

### Error Handling
- React Error Boundary catches and displays errors gracefully
- Graceful degradation if external APIs fail
- User-friendly error messages

## 🔒 Security Notes

- API keys should be moved to environment variables in production
- Google Calendar API credentials should be secured
- EmailJS keys should be kept private

## 📧 Contact

For booking inquiries, emails are sent to: **info@wheelhousesc.com**

## 🐛 Known Issues

- Google Calendar API requires proper OAuth configuration
- "Invalid grant" errors may occur if OAuth tokens expire (handled gracefully)

## 📄 License

This project is private and proprietary.

## 👥 Development

Built with React and Material-UI for Wheelhouse Construction.

---

**Note**: This project uses Create React App. For more information about available scripts and features, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
