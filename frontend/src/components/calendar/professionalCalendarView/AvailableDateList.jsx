import React, { useState } from 'react';
import AvailableDate from './AvailableDate';

const AvailableDateList = () => {

    const [availableDates, setAvailableDates] = useState([]);

    return (
        <div>
            {/* {availableDates.length === 0 ? <h3>No hay horas disponibles</h3>
            : availableDates.map((availableDate) => <AvailableDate key={availableDate.id} availableDate={availableDate} />)} */}
            <div>
                <AvailableDate />
            </div>
            <br />
            <div>
                <AvailableDate />
            </div>
            <br />
            <div>
                <AvailableDate />
            </div>
        </div>
    )
}

export default AvailableDateList
