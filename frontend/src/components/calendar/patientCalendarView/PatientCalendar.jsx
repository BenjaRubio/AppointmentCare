import React from 'react';
import SpecialtyFilterForm from './SpecialtyFilterForm';
import ProfessionalDatesList from './ProfessionalDatesDisplay';

const PatientCalendar = () => {
    return (
        <div>
            <h1>Este es el calendario de paciente</h1>
            <h2>Aqui puedes ver las horas de los distintos profesionales disponibles</h2>
            <div>
                <SpecialtyFilterForm />
            </div>
            <div className="patient-calendar-container">
                <ProfessionalDatesList />
            </div>
        </div>
    )
}

export default PatientCalendar
