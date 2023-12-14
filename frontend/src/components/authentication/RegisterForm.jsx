import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const {speciality, setSpeciality} = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password || !role || !lastname || !name || (role === 'professional' && !speciality)) {
        setError('Debes rellenar todos los campos');
        return;
    }
    // generar el registro en el backend
    console.log('email:', email);
    console.log('password:', password);
    console.log('role:', role);
    console.log('name:', name);
    console.log('lastname:', lastname);
    setError('');
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
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
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