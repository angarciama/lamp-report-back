const transporter = require('../config/nodemailer');

exports.sendEmail = (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).send({ error: 'Faltan datos del correo' });
    }

    const mail = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };

    transporter.sendMail(mail, (err, info) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: 'Error al enviar el correo' });
        }
        console.log('Email enviado: ' + info.response);
        res.status(200).send({ message: 'Correo enviado con éxito' });
    });
};