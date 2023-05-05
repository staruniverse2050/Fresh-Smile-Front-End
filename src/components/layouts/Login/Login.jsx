import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/login', { email, password });
            console.log(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            setError('Por favor, complete todos los campos.');
        } else {
            handleLogin();
        }
    };

    return (
        <div className="LoginHeader">
            <img className="iconoInicio" src="./public/agregar-usuario.png" alt="imagen de persona" />
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
                        Iniciar Sesion
                    </button>
                </section>
                <p className="LoginP">
                    ¿Aun no eres miembro?{' '}
                    <a href="../Register/Register" className="LoginA">
                        Registrate
                    </a>
                </p>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};
