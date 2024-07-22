const Sequelize = require('sequelize');
const database = require('../data_base/db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    }
    }, {
    timestamps: false
})

module.exports = Usuario
