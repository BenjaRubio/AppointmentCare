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
import { sendLogin } from '../../services/authentication.service';
import { saveUser } from '../../services/user.service';

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = async(event) => {
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

    try {
      const response = await sendLogin({
        email,
        password,
        role
      });
      console.log('response:', response);
      setUser(response.user);
      saveUser(response.user);
      navigate('/');
      alert('Sesión iniciada correctamente');
    } catch (err) {
      console.log('error:', err);
      setError('Error al iniciar sesión');
    }
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
            type="password"
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


};

export default LoginForm;
