const express = require('express');
const path = require('path');
const app = express();

// Middleware para leer datos en formato JSON
app.use(express.json());

// Servir automáticamente todos los archivos estáticos de la raíz (index.html, estilos, etc.)
app.use(express.static(path.join(__dirname)));

// Conectar las rutas de la API de tickets
const rutasTickets = require('./src/routes/tickets');
app.use('/tickets', rutasTickets);

// Ruta principal explícita para cargar el index.html de forma segura
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) {
            res.status(404).send('No se encontró el archivo index.html en la raíz.');
        }
    });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});
