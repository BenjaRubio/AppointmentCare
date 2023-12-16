import React, { useEffect, useState } from 'react';
import AvailableDate from './AvailableDate';
import { getAvailableDatesByProfessional } from '../../../services/available.service';

const AvailableDateList = () => {
    const [user, setUser] = useState(null);
    const [availableDates, setAvailableDates] = useState([]);

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

    useEffect(() => {
        const getAvailableDates = async (user) => {
            try {
                const response = await getAvailableDatesByProfessional(user.id);
                console.log("SDA",response);
                setAvailableDates(response.availableDates);
            } catch (err) {
                console.log(err);
            }
        };
        if (user) {
            getAvailableDates(user);
        }
    }, [user]);

    return (
        <div>
            {availableDates.length === 0 && <h3>No hay horas disponibles</h3>}
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

export default AvailableDateList
