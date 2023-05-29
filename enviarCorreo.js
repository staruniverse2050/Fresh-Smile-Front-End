import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Usa SSL
  auth: {
    user: 'freshsmilecmills@gmail.com',
    pass: 'Odontologia',
  },
});

// Middleware para analizar los datos del cuerpo de la solicitud
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Ruta para enviar el correo electrónico
router.post('/', (req, res) => {
  const { nombre, telefono, correo, motivo } = req.body;

  const mailOptions = {
    from: correo,
    to: 'freshsmilecmills@gmail.com',
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

export default router;
