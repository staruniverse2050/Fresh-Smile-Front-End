const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { createMemoryRouter } = require('react-router-dom');

const app = express();
const PORT = 3000;

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'freshsmilecmills@gmail.com',
    pass: 'Odontologia',
  },
});

// Utiliza el middleware bodyParser para analizar los datos enviados en el cuerpo de la solicitud POST
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para enviar el correo electrónico
app.post('/enviar-correo', (req, res) => {
  const { nombre, telefono, correo, motivo } = req.body;

  const mailOptions = {
    from: correo,
    to: 'freshsmilecmills@gmail.com', // Cambia esto por tu dirección de correo electrónico
    subject: 'Me gustaría comunicarme con ustedes Fresh Smile Cmills',
    text: `
    Mi nombre es : ${nombre}
    Mi número de contacto: Teléfono: ${telefono}
    El motivo de mi mensaje es : ${motivo}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.send('Correo electrónico enviado exitosamente');
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
