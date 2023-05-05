import React, { useState } from 'react';
import './Register.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        identificationNumber: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', formData);
            console.log(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="RegisterHeader ">
            <img className="iconoInicio" src="./public/agregar-usuario.png" alt="imagen de persona" />
            <div className="Register">
                <section className="RegisterForm">
                    <input
                        className="RegisterInput"
                        type="text"
                        name="identificationNumber"
                        placeholder="Ingrese su numero de identificación"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="RegisterInput"
                        type="text"
                        name="firstName"
                        placeholder="Ingrese su nombre"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="RegisterInput"
                        type="text"
                        name="lastName"
                        placeholder="Ingrese su apellido"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="RegisterInput"
                        type="text"
                        name="address"
                        placeholder="Ingrese su dirección"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="RegisterInput"
                        type="text"
                        name="phone"
                        placeholder="Ingrese su teléfono"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="RegisterInput"
                        type="text"
                        name="email"
                        placeholder="Ingrese su correo electrónico"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="RegisterInput"
                        type="password"
                        name="password"
                        placeholder="Cree una contraseña"
                        onChange={handleChange}
                        required
                    />
                    <button className="RegisterButton" onClick={handleSubmit}>
                        Registrate
                    </button>
                </section>
                <p className="RegisterP">
                    ¿Ya eres miembro?{' '}
                    <a href="/login" className="RegisterA">
                        Inicia tu sesión
                    </a>
                </p>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};