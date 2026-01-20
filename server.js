// Carga las variables de entorno del .env al iniciar la aplicación
require('dotenv').config();

// Importa el framework Express para manejar el servidor y rutas
const express = require('express');

// IMPORTANTE: Ahora db.js exporta un objeto { sequelize, Categoria, Producto }
// Usamos { sequelize } para extraer solo la conexión
const { sequelize } = require('./src/database/db');

// Importa la configuración general (incluido el PORT)
const config = require('./src/config/config');

// Crea una instancia de la aplicación Express
const app = express();

// Middleware para parsear cuerpos de peticiones JSON
app.use(express.json());























// Define tus rutas antes de arrancar el servidor
app.get('/', (req, res) => {
    res.send(`✅ API funcionando correctamente`);
});

// Función ÚNICA para arrancar todo
const startServer = async () => {
    try {
        // 1. Sincroniza la base de datos una sola vez
        await sequelize.sync({ force: false });
        console.log('✅ Conexión exitosa y tablas sincronizadas.');

        // 2. Inicia el servidor Express una sola vez
        // Asegúrate de si es config.port o config.PORT (según tu config.js)
        const PORT = config.port || config.PORT || 3000; 
        
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        // Maneja errores de conexión
        console.error('❌ Error fatal de conexión:', error.message);
    }
};

// Ejecuta la función
startServer();

//lo quer tenemos ahora esssss  o lo que aremos sera hacer un git add .git 