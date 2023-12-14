import React, { useState, useEffect } from 'react';
import { blocks } from '../../../utils/blocks';

const AvailableDate = (props) => {

    const [fullName, setFullName] = useState('');
    const { professionalId, date, block, available } = props;

    useEffect(() => {
        // fetch del profesional segun su id
    }, []);

    return (
        <div>
            {/* <h3>{fullName}</h3>
            <h3>{date}</h3>
            <h3>{blocks[block]}</h3>
            <h3>{available}</h3> */}
            <h3>Benjamin</h3>
            <h3>2023-12-29</h3>
            <h3>9:00 - 9:30</h3>
            <h3>Disponible</h3>
        </div>
    )
}

export default AvailableDate
