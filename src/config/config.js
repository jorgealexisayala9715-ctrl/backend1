// Carga las variables del archivo .env en process.env
require('dotenv').config();

// Exporta un objeto de configuración para usar en el proyecto
module.exports = {
  // Puerto de la aplicación, por defecto 3000 si no está en .env
  PORT: process.env.PORT || 3000,
  
  db: {
    // Host de la base de datos (ej: localhost)
    host: process.env.DB_HOST,
    // Usuario de la base de datos (ej: root)
    user: process.env.DB_USER,
    // Contraseña de la DB
    pass: process.env.DB_PASSWORD,
    // Nombre de la DB
    name: process.env.DB_NAME,
    // Puerto de la DB (ej: 3306 para MySQL)
    port: process.env.DB_PORT
  }
};
