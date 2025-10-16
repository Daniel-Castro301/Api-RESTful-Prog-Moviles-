const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  correo: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  contraseña: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  rol: { 
    type: DataTypes.ENUM('admin', 'cliente'), 
    defaultValue: 'cliente' 
  },
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
