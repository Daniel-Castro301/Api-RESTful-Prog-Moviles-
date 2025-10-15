const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Product = sequelize.define('Product', {
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
  },
  stock: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
}, {
  tableName: 'products',
  timestamps: true,
});

module.exports = Product;