import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sendRegistration } from '../../services/authentication.service';

const RegisterForm = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [specialty, setSpecialty] = useState('');

  const [error, setError] = useState('');


  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!email || !password || !role || !lastname || !name || (role === 'professional' && !specialty)) {
        setError('Debes rellenar todos los campos');
        return;
    }
    setError('');

    try {
      const response = await sendRegistration({name, lastname, email, password, role, specialty});
      console.log('response:', response);
      navigate('/login');
    } catch (error) {
      console.log('error:', error);
      setError('Error al registrarse');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:<br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Apellido:<br />
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:<br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:<br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Soy un:<br />
          <label>
            <input
              type="radio"
              value="patient"
              checked={role === 'patient'}
              onChange={() => setRole('patient')}
            />
            Paciente
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="professional"
              checked={role === 'professional'}
              onChange={() => setRole('professional')}
            />
            Profesional de la salud
          </label>
          <br />
        </label>
        <br />
        {role === 'professional' &&
          <label>
            Especialidad:<br />
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </label>}
        <button type="submit">Registrarse</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <p>
          ¿Ya tienes cuenta?  
          <Link to="/login"> Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;