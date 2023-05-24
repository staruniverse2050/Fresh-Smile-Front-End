import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };

    fetch('your-api-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          // Autenticación exitosa
          setUserRole('admin');
        } else {
          // Error de autenticación
          setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
        }
      })
      .catch((error) => {
        setError('Error de autenticación');
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      setError('Por favor, complete todos los campos.');
    } else {
      handleLogin();
    }
  };

  // Determinar la ruta de redirección según el rol del usuario
  let redirectPath = '/';
  if (userRole === 'admin') {
    redirectPath = '/otra-parte'; // Cambia '/otra-parte' a la ruta que deseas redirigir para el usuario administrador
  }

  // Redirigir a la ruta correspondiente
  useEffect(() => {
    if (userRole === 'admin') {
      const redirectPath = '/otra-parte'; // Cambia '/otra-parte' a la ruta que deseas redirigir para el usuario administrador
      navigate(redirectPath);
    } else {
      setShowForm(true); // Mostrar el formulario si el inicio de sesión no fue exitoso
    }
  }, [userRole, navigate]);

  return (
    <>
      {/* Header sin barra */}
      <div className="LoginHeader">
        {/* <img className="iconoInicio" src="./public/agregar-usuario.png" alt="imagen de persona" /> */}
      </div>
      <div className="Login">
        <section className="LoginForm">
          <input
            className="LoginInput"
            type="text"
            placeholder="Ingrese su correo"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="LoginInput"
            type="password"
            placeholder="Ingrese su contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="LoginButton" onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </section>
        <p className="LoginP">
          ¿Aún no eres miembro?{' '}
          <Link to="/Register" className="LoginA">
            Regístrate
          </Link>
        </p>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
