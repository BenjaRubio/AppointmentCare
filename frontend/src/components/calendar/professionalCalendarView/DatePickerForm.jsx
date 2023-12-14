import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';

const DatePickerForm = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [initialTime, setInitialTime] = useState('');
    const [finalTime, setFinalTime] = useState('');
    
    const handleSubmit = () => {
        console.log('selectedDate:', selectedDate);
        console.log('initialTime:', initialTime);
        console.log('finalTime:', finalTime);
    };

    return (    
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker' ,'TimePicker', 'TimePicker']}>
                    <DatePicker
                        label="Selecciona una fecha"
                        value={dayjs(selectedDate)}
                        onChange={(date) => setSelectedDate(date)}
                    />
                    <TimePicker
                        label="Desde"
                        value={initialTime}
                        onChange={(time) => setInitialTime(time)}
                        views={['hours', 'minutes']}
                    />
                    <TimePicker
                        label="Desde"
                        value={finalTime}
                        onChange={(time) => setFinalTime(time)}
                        views={['hours', 'minutes']}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <br />
            <Button variant="contained" onClick={handleSubmit}>Agregar disponibilidad</Button>
        </div>
    )
}

export default DatePickerForm
