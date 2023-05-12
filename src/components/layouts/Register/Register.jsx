import React, { useState } from 'react';
import './Register.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/register', { name, email, password, confirmPassword });
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Por favor, complete todos los campos.');
    } else if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
    } else {
      handleRegister();
    }
  };

  return (
    <>
      {/* Header sin barra */}
      <div className="RegisterHeader">
        <img className="iconoRegistro" src="https://res.cloudinary.com/dfvxujvf8/image/upload/v1683825528/Fresh_Smile_Cmills/agregar-usuario_bzrjrd.png" alt="imagen de persona" />
      </div>
      <div className="Register">
        <section className="RegisterForm">
          <input
            className="RegisterInput"
            type="text"
            placeholder="Ingrese su nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="RegisterInput"
            type="text"
            placeholder="Ingrese su correo"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="RegisterInput"
            type="password"
            placeholder="Ingrese su contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="RegisterInput"
            type="password"
            placeholder="Confirme su contraseña"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="RegisterButton" onClick={handleSubmit}>
            Registrarse
          </button>
        </section>
        <p className="RegisterP">
          ¿Ya eres miembro?{' '}
          <a href="../Login" className="RegisterA">
            Inicia Sesión
          </a>
        </p>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
