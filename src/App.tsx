import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BookingPage from './components/BookingPage';
import MembershipPage from './components/membership/MembershipPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/services" element={<div style={{color: 'white', padding: '100px 20px', textAlign: 'center'}}>Services Page - Coming Soon!</div>} />
          <Route path="/policies" element={<div style={{color: 'white', padding: '100px 20px', textAlign: 'center'}}>Policies & Info Page - Coming Soon!</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
