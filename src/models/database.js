// models/database.js
const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.sqlite',
  logging: false, // evita mostrar las consultas SQL en consola
});

// Verificar conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión establecida correctamente con SQLite.'))
  .catch(err => console.error('❌ Error al conectar con la base de datos:', err));

module.exports = sequelize;
