import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { KeepUp } from './pages/KeepUp';
// import { Calendar } from './components/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/keepup" element={<KeepUp />} />
      </Routes>
    </Router>
  );
}

export default App;