import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!email || !password || !role) {
      setError('Debes rellenar todos los campos');
      return;
    }
    // hacer login en el backend
    console.log('email:', email);
    console.log('password:', password);
    console.log('role:', role);

    setError('');
  };

  return (
    <div className="column-form-modal">
      <Box
        component="form"
        noValidate
        autoComplete="off">
        <div>
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            required
            id="password"
            label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <FormControl>
            <FormLabel>Soy un:</FormLabel>
            <RadioGroup
              aria-label="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <FormControlLabel value="patient" control={<Radio />} label="Paciente" />
              <FormControlLabel value="professional" control={<Radio />} label="Profesional de la salud" />
            </RadioGroup>
          </FormControl>
        </div>
      </Box>
      <Button variant="contained" onClick={handleSubmit}>Iniciar Sesión</Button>
      <br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <p>
          ¿No tienes cuenta? 
          <Link to="/register"> Regístrate</Link>
        </p>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Email:<br />
  //         <input
  //           type="text"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Contraseña:<br />
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Soy un:<br />
  //         <label>
  //           <input
  //             type="radio"
  //             value="patient"
  //             checked={role === 'patient'}
  //             onChange={() => setRole('patient')}
  //           />
  //           Paciente
  //         </label>
  //         <br />
  //         <label>
  //           <input
  //             type="radio"
  //             value="professional"
  //             checked={role === 'professional'}
  //             onChange={() => setRole('professional')}
  //           />
  //           Profesional de la salud
  //         </label>
  //       </label>
  //       <br />
  //       <button type="submit">Iniciar sesión</button>
  //     </form>
  
  //     {error && <p style={{ color: 'red' }}>{error}</p>}

  //     <div>
  //       <p>
  //         ¿No tienes cuenta? 
  //         <Link to="/register"> Regístrate</Link>
  //       </p>
  //     </div>
  //   </div>
  // );
};

export default LoginForm;
