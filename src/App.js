import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Booking from './components/booking/Booking';
import PaymentSetup from './components/booking/PaymentSetup';
import Payment from './components/booking/Payment';
import Confirmation from './components/booking/Confirmation';
import Home from './components/home/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './components/about/About';
import CustomHomes from './components/custom-homes/CustomHomes';
import Renovations from './components/renovations/Renovations';
import MultiFamily from './components/multi-family/MultiFamily';
import OurProcess from './components/our-process/OurProcess';
import References from './components/references/References';
import CHCaseStudy1 from './components/custom-homes/case-study1/CHCaseStudy1';
import CHCaseStudy2 from './components/custom-homes/case-study2/CHCaseStudy2';
import CHCaseStudy3 from './components/custom-homes/case-study3/CHCaseStudy3';
import CHCaseStudy4 from './components/custom-homes/case-study4/CHCaseStudy4';
import CHCaseStudy5 from './components/custom-homes/case-study5/CHCaseStudy5';
import CHCaseStudy6 from './components/custom-homes/case-study6/CHCaseStudy6';
import RVCaseStudy1 from './components/renovations/case-renovation1/RVCaseStudy1';
import RVCaseStudy2 from './components/renovations/case-renovation2/RVCaseStudy2';
import RVCaseStudy3 from './components/renovations/case-renovation3/RVCaseStudy3';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={
          <>
          <Header />
          <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            
            <Route path="/booking" element={<Booking />} />
            <Route path="/setup-payment" element={<PaymentSetup />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />

            <Route path="/about" element={<About />} />
            <Route path="/custom-homes" element={<CustomHomes />} />
            <Route path="/custom-homes/ch-case-study-1" element={<CHCaseStudy1 />} />
            <Route path="/custom-homes/ch-case-study-2" element={<CHCaseStudy2 />} />
            <Route path="/custom-homes/ch-case-study-3" element={<CHCaseStudy3 />} />
            <Route path="/custom-homes/ch-case-study-4" element={<CHCaseStudy4 />} />
            <Route path="/custom-homes/ch-case-study-5" element={<CHCaseStudy5 />} />
            <Route path="/custom-homes/ch-case-study-6" element={<CHCaseStudy6 />} />
            <Route path="/renovations" element={<Renovations />} />
            <Route path="/renovations/rv-case-study-1" element={<RVCaseStudy1 />} />
            <Route path="/renovations/rv-case-study-2" element={<RVCaseStudy2 />} />
            <Route path="/renovations/rv-case-study-3" element={<RVCaseStudy3 />} />
            <Route path="/multi-family" element={<MultiFamily />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/references" element={<References />} />
          </Routes>
          </div>
          <Footer />
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;