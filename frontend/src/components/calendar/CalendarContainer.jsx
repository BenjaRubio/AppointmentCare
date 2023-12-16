import React, { useState, useEffect } from 'react';
import PatientCalendar from './patientCalendarView/PatientCalendar';
import ProfessionalCalendar from './professionalCalendarView/ProfessionalCalendar';

const CalendarContainer = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userJSON = window.localStorage.getItem("appointmentCareUserData");
        if (userJSON) {
          setUser(JSON.parse(userJSON));
        } else {
          setUser(null);
        }
    }, []);

    return (
        <div>
            {user 
            ? (
                user.role === 'patient' 
                ? <PatientCalendar /> 
                : <ProfessionalCalendar />
            )
            :
            <h1>Debes iniciar sesión para ver tu calendario</h1>}
            
        </div>
    )
}

export default CalendarContainer
