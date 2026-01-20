// Importa la clase principal de Sequelize
const { Sequelize, DataTypes } = require('sequelize');
// Importa el objeto 'db' que creamos en '../config/config.js'
const { db } = require('../config/config');

// Crea una nueva instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize(db.name, db.user, db.pass, {
    // Especifica el host (ej: localhost)
    host: db.host,
    // Define el dialecto de la base de datos que se va a usar (MySQL en este caso)
    dialect: 'mysql',
    // Especifica el puerto (ej: 3306)
    port: db.port,
    // Desactiva los mensajes automáticos de Sequelize en la consola
    logging: false 
});



// --- AQUÍ REGISTRAMOS LOS MODELOS ---
// Importamos las funciones de los modelos y las ejecutamos pasándoles 'sequelize'
const Categoria = require('../models/Categoria')(sequelize);
const Producto = require('../models/Producto')(sequelize);

// --- AQUÍ DEFINIMOS LAS RELACIONES ---
// Una categoría tiene muchos productos
Categoria.hasMany(Producto, { foreignKey: 'categoriaId', as: 'productos' });
// Un producto pertenece a una categoría
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

// Exportamos la conexión y los modelos para usarlos en Controllers y server.js
module.exports = {
    sequelize,
    Categoria,
    Producto
};