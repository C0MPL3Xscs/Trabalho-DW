import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import MainPage from './Components/InitialPage'
import SupportPage from './Components/SupportPage'
import PublicEvents from './Components/PublicEventsPage'
import SignUp from './Components/Signup'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/LogIn';
import Profile from './Components/ProfilePage'
import EventPage from './Components/EventPage'
import ForgotPassword from './Components/ForgotPassword'
import Configurations from './Components/Configurations'
import CreateEvent from './Components/CreateEvent'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/Events" element={<PublicEvents />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Configurations" element={<Configurations />} />
          <Route path="/ProfilePage" element={<Profile />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
