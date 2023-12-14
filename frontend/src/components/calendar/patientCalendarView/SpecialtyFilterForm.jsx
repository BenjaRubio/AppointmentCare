import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SpecialtyFilterForm = () => {

    const [specialty, setSpecialty] = useState('');

    const applyFilter = () => {
        console.log('specialty:', specialty);
    };

    return (
        <div className="row-form-modal">
            <Box
                component="form"
                noValidate
                autoComplete="off">
                <div>
                    <TextField
                        required
                        id="speciality"
                        label="Especialidad"
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                    />
                    <br />
                    <br />
                    
                </div>
            </Box>
            <Button variant="contained" onClick={applyFilter}>Filtrar</Button>
        </div>
    )
}

export default SpecialtyFilterForm
