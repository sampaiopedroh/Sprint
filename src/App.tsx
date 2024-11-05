import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { KeepUp, KeepUpContent  } from './pages/KeepUp';
import Chat from './components/Chat';
import { Squad } from './components/Squad';
import { Pilot } from './components/Pilot';

function App() {
    return (
	<div className='h-screen flex flex-col'>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/keepup" element={<KeepUp />}>
                    <Route index element={<KeepUpContent />} />
                    <Route path="chat" element={<Chat />} /> 
                    <Route path="squad" element={<Squad />} />
		            <Route path="pilot-1" element={<Pilot />} />
		            <Route path="pilot-2" element={<Pilot />} /> 
                </Route>
            </Routes>
            <Footer />
        </Router>
	</div>
    );
}

export default App;
