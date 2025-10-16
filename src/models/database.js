// src/models/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/models/database.sqlite'
});

sequelize.authenticate()
  .then(() => console.log('✅ Conexión a SQLite establecida correctamente.'))
  .catch(err => console.error('❌ Error al conectar con la base de datos:', err));

module.exports = sequelize;
