import React, { useState, useEffect } from 'react';
import DatePickerForm from './DatePickerForm';
import AvailableDateList from './AvailableDateList';


const ProfessionalCalendar = () => {

    return (
        <div>
            <h1>Este es el calendario de profesional</h1>
            <h2>Aquí puedes agregar tus horas disponibles</h2>
            <div className="professional-calendar-container">
                <div className="date-picker-container">
                    <DatePickerForm />
                </div>
                <div className="available-list-container">
                    <AvailableDateList  />
                </div>
            </div>
        </div>
    )
}

export default ProfessionalCalendar
