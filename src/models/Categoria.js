const { DataTypes } = require('sequelize');

// Exportamos una función que recibe 'sequelize' como argumento
module.exports = (sequelize) => {
    const Categoria = sequelize.define('categoria', {
        nombre: { type: DataTypes.STRING, allowNull: false }
    }, { tableName: 'categorias' });

    return Categoria;
};