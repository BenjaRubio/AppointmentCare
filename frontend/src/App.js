import './main.css';
import React from "react";
import LoginForm from './components/authentication/LoginForm';
import RegisterForm from './components/authentication/RegisterForm';
import NavBar from './components/NavBar';
import CalendarContainer from './components/calendar/CalendarContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CalendarContainer />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>          
      </BrowserRouter>
    </div>
  );
}

export default App;
