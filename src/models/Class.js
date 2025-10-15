const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Class = sequelize.define('Class', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  descripcion: { 
    type: DataTypes.TEXT 
  },
  precio: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  }
}, {
  tableName: 'classes',
  timestamps: true,
});

module.exports = Class;
