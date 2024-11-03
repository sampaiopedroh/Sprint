import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { KeepUp, KeepUpContent  } from './pages/KeepUp';
import Chat from './components/Chat';
// import Equipe from './components/Equipe';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/keepup" element={<KeepUp />}>
                    <Route index element={<KeepUpContent />} />
                    <Route path="chat" element={<Chat />} /> 
                    {/* <Route path="equipe" element={<Equipe />} />  Rota para /keepup/equipe */}
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;