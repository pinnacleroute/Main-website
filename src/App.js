import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Terms from './pages/Terms'
import Services from './pages/Services';
import Policy from './pages/Policy'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
         <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
