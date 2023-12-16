import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { availableHours } from '../../../utils/blocks';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { sendAvailableDate } from '../../../services/professional.service';

const isTimeRangeValid = (initialTime, finalTime) => {
    const [initialTimeHour, initialTimeMinutes] = initialTime.split(":");
    const [finalTimeHour, finalTimeMinutes] = finalTime.split(":");
    if (initialTimeHour < finalTimeHour) {
        return true;
    } else if (initialTimeHour === finalTimeHour) {
        return initialTimeMinutes < finalTimeMinutes;
    } else {
        return false;
    }
}

const DatePickerForm = () => {
    const [user, setUser] = useState(null);

    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
    const [initialTime, setInitialTime] = useState("");
    const [finalTime, setFinalTime] = useState("");

    const [error, setError] = useState("");

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
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log('selectedDate:', JSON.stringify(selectedDate));
        console.log('initialTime:', initialTime);
        console.log('finalTime:', finalTime);

        if (!selectedDate || !initialTime || !finalTime) {
            setError("Debes seleccionar todos los datos");
            return;
        }
        if (!isTimeRangeValid(initialTime, finalTime)) {
            setError("Debes seleccionar un rango horario válido");
            return;
        }
        if (!checkUserLogged()) {
            alert("Debes iniciar sesión para agregar disponibilidad");
            return;
        }

        console.log("User:", user)

        const day = JSON.stringify(selectedDate).split("T")[0].split('"')[1]
        const timeRange = `${initialTime} - ${finalTime}`;
        setError("");
        try {
            const response = await sendAvailableDate({
                professionalId: user.id,
                day: day,
                timeRange: timeRange
            });
            console.log('response:', response);
            setError(""); 
            alert("Disponibilidad guardada correctamente")
          } catch (error) {
            console.log('error:', error);
            setError("Error enviando disponibilidad");
          }
    };

    return (    
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Selecciona una fecha"
                        value={dayjs(selectedDate)}
                        onChange={(date) => setSelectedDate(date)}
                    />
                </DemoContainer>
            </LocalizationProvider>

            <div className="buttons-in-column">
                <div>
                    <h3>Desde</h3>
                    <DropdownButton id="dropdown-button" drop="down" title={initialTime || "hh:mm"}>
                        {availableHours.slice(0, -1).map((hour) => {
                            return <Dropdown.Item id="dropdown-item" onClick={() => setInitialTime(hour)}>{hour}</Dropdown.Item>
                        })}
                    </DropdownButton>
                </div>
                <div>
                    <h3>Hasta</h3>
                    <DropdownButton id="dropdown-button" drop="down" title={finalTime || "hh:mm"}>
                        {availableHours.slice(1).map((hour) => {
                            return <Dropdown.Item id="dropdown-item" onClick={() => setFinalTime(hour)}>{hour}</Dropdown.Item>
                        })}
                    </DropdownButton>
                </div>
            </div>
            
            <br />
            <Button variant="contained" onClick={handleSubmit}>Agregar disponibilidad</Button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default DatePickerForm
