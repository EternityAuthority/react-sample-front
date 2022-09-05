import React from 'react';
import './App.css';
import Landing from './component/LandingPage';
import Navbar from './component/Navbar/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Header from './component/LandingPage/Header';
import FirstLand from './pages/landing';
import Dashboard1 from './Dashboard';
// import Events from './pages/events';
import Setting from './pages/setting';
import Signup from './pages/signup';
import Loginpage from './pages/login';

function MainLayoutRoutes() {
    return (
        <><React.Fragment /><nav>
            <Navbar />
        </nav>
            <Routes>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Profile/:username" element={<Profile />} />
        <Route path="/*" element={<ErrorPage />} />
    </Routes><footer>
            <Footer />
        </footer><React.Fragment /></>
    )
}
