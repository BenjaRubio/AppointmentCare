import React, { useState, useEffect } from 'react';
import ProfessionalCard from '../../cards/ProfessionalCard';
import ProfessionalAvailableCalendar from '../../cards/ProfessionalAvailableCalendar';
import { getAllAvailableDates } from '../../../services/available.service';

const ProfessionalDatesList = () => {
    const [user, setUser] = useState(null);
    const [availableDates, setAvailableDates] = useState([]);
    const [professionalIds, setProfessionalIds] = useState([]);

    const checkUserLogged = () => {
        const userJSON = window.localStorage.getItem("appointmentCareUserData");
        if (userJSON) {
          setUser(JSON.parse(userJSON));
          return true;
        } else {
          setUser(null);
          return false;
        }
    }

    useEffect(() => {
        checkUserLogged();
    }, []);

    useEffect(() => {
        const getAllAvailable = async() => {
            try {
                const response = await getAllAvailableDates();
                setAvailableDates(response.availableDates);
                setProfessionalIds(Object.keys(response.availableDates))
                console.log(response.availableDates);
            } catch (err) {
                console.log(err);
            }
        }
        if (user) {
            getAllAvailable();
        }
    }, [user]);

    return (
        <div className="professional-dates-display">
            {professionalIds.length > 0 && 
            professionalIds.map((professionalId) => {
                return (
                    <div className="professional-date">
                        <div className='professional-card'>
                            <ProfessionalCard key={professionalId} professionalId={professionalId} />
                        </div>
                        <div className="professional-available-calendar">
                            <ProfessionalAvailableCalendar key={professionalId} availableDates={availableDates[professionalId]}/>
                        </div>
                    </div>
                )
            })}
            
            <br />
        </div>
    )
}

export default ProfessionalDatesList
