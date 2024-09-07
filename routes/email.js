const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Ruta para enviar correos
router.post('/send-lamp-report', emailController.sendEmail);

module.exports = router;