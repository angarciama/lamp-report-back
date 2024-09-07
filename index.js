const express = require('express');
require('dotenv').config(); // Cargar las variables de entorno
const app = express();

// Middleware para parsear el body de las solicitudes POST
app.use(express.json());

// Importar y usar las rutas
const emailRoutes = require('./routes/email');
app.use('/api', emailRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});