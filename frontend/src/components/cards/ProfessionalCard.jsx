import React, { useEffect, useState } from 'react';


const ProfessionalCard = (props) => {

    const [fullName, setFullName] = useState('');
    const [specialty, setSpecialty] = useState('');

    useEffect(() => {
        setFullName(props.name + ' ' + props.lastName);
        setSpecialty(props.specialty);
    }, [])
    
    return (
        <div>
            {/* <h3>{fullName}</h3>
            <h4>{specialty}</h4> */}
            <h3>Benjamin Rubio</h3>
            <h4>Medico General</h4>
        </div>
    )
}

export default ProfessionalCard
