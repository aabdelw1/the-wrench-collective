import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/shared/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import BookingPage from './pages/BookingPage/BookingPage';
import MembershipPage from './pages/MembershipPage/MembershipPage';
import './styles/App.css';

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
