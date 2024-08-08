import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home.jsx';
import FreeAdvice from './FreeAdvice.jsx';
import PremiumAdvice from './PremiumAdvice.jsx';
import Register from './Register';
import '../App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/free-advice" element={<FreeAdvice />} />
                    <Route path="/premium-advice" element={<PremiumAdvice />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
