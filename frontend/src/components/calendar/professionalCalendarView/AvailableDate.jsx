import React, { useState, useEffect } from 'react';
import { blocks } from '../../../utils/blocks';

const AvailableDate = ({ day, block, available }) => {

    const [dayDate, setDayDate] = useState("");
    const [isAvailable, setIsAvailable] = useState("");

    const style = {
        "Disponible": {
            color: 'green'
        },
        "No disponible": {
            color: 'red'
        }
    }

    useEffect(() => {
        
        const [y, m, d] = day.split("T")[0].split("-");
        setDayDate(`${d}/${m}/${y}`);
        if (available) {
            setIsAvailable("Disponible");
        } else {
            setIsAvailable("No disponible");
        }
    }, []);

    return (
        <div>
            <h3>{dayDate}</h3>
            <h4>{block}</h4>
            <h4 style={style[isAvailable]}>{isAvailable}</h4>
        </div>
    )
}

export default AvailableDate
