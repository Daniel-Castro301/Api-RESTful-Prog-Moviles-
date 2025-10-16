// src/server.js
const express = require('express');
const cors = require('cors');

// Importar modelos para asegurarnos de que Sequelize los registre
const sequelize = require('./models/database');
require('./models/User');
require('./models/Class');
require('./models/Product');
require('./models/Factura');

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const productRoutes = require('./routes/productRoutes');
const facturaRoutes = require('./routes/facturaRoutes');

// Usar rutas
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/products', productRoutes);
app.use('/api/facturas', facturaRoutes);

// Sincronizar base de datos y levantar servidor
sequelize.sync({ force: false }).then(() => {
  console.log('✅ Conexión establecida y tablas sincronizadas.');
  app.listen(3000, () => {
    console.log('🚀 Servidor corriendo en http://localhost:3000');
  });
}).catch(err => console.error('❌ Error al iniciar el servidor:', err));


console.log('userRoutes:', userRoutes);
console.log('classRoutes:', classRoutes);
console.log('productRoutes:', productRoutes);
console.log('facturaRoutes:', facturaRoutes);
