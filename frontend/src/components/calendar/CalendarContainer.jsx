import React from 'react';
import PatientCalendar from './patientCalendarView/PatientCalendar';
import ProfessionalCalendar from './professionalCalendarView/ProfessionalCalendar';

const CalendarContainer = () => {

    const userRole = 'professional';

    return (
        <div>
            {userRole === 'patient' ? <PatientCalendar /> : <ProfessionalCalendar />}
        </div>
    )
}

export default CalendarContainer
