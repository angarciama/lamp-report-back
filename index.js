const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

let mail = {
    from: process.env.EMAIL_USER,
    to: 'ropibeb488@daypey.com',
    subject: 'Prueba nodemailer',
    text: 'Prueba email'
}

transporter.sendMail(mail, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log('email enviado')
    }
})