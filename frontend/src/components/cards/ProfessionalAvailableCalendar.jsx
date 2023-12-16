import React, { useState, useEffect } from 'react';
import AvailableDate from '../calendar/professionalCalendarView/AvailableDate';


const ProfessionalAvailableCalendar = (props) => {

    const [user, setUser] = useState(null);
    const availableDates = props.availableDates;

    const checkUserLogged = () => {
        const userJSON = window.localStorage.getItem("appointmentCareUserData");
        if (userJSON) {
            setUser(JSON.parse(userJSON));
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        checkUserLogged();
    }, []);
    

    return (
        <div>
            {availableDates.length === 0 && <h3>No hay horas disponibles Para este profesional</h3>}
            {availableDates.length > 0 &&
            availableDates.map((availableDate) => {
                return (
                    <div>
                        <AvailableDate key={availableDate.id} {...availableDate} />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default ProfessionalAvailableCalendar
