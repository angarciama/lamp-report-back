const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Cargar las variables de entorno

const app = express();

// Habilitar CORS
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

// Middleware para parsear el body de las solicitudes POST
app.use(express.json());

// Importar y usar las rutas
const emailRoutes = require('./routes/email');
app.use('/api', emailRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});