// index.js
const sequelize = require('./src/models/database');
const User = require('./src/models/User');
const Class = require('./src/models/Class');
const Product = require('./src/models/Product');
const Factura = require('./src/models/Factura');

// Sincronizar modelos
sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ Base de datos y tablas creadas correctamente.');
  })
  .catch(err => {
    console.error('❌ Error al sincronizar la base de datos:', err);
  });
