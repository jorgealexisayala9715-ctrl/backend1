const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Producto = sequelize.define('producto', {
        nombre: { type: DataTypes.STRING, allowNull: false },
        precio: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0.00 }
    }, { tableName: 'productos' });

    return Producto;
};