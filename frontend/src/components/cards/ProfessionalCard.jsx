import React, { useEffect, useState } from 'react';
import { getProfessionalById} from '../../services/professional.service';

const ProfessionalCard = (props) => {

    const professionalId = props.professionalId;
    const [professional, setProfessional] = useState(null);

    useEffect(() => {
        const getProfessional = async () => {
            try {
                const response = await getProfessionalById(professionalId);
                console.log("professional", response.professional)
                setProfessional(response.professional);
            } catch (err) {
                console.log(err);
            }
        }
        console.log("props", props);
        getProfessional();
    }, [])
    
    return (
        <div>
            <h2>{professional?.name} {professional?.lastname}</h2>
            <h4>{professional?.specialty}</h4>
        </div>
    )
}

export default ProfessionalCard
