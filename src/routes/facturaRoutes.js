const express = require('express');
const router = express.Router();
const Factura = require('../models/Factura');
const User = require('../models/User');
const Product = require('../models/Product');

// Obtener todas las facturas con datos de usuario y producto
router.get('/', async (req, res) => {
  try {
    const facturas = await Factura.findAll({
      include: [User, Product]
    });
    res.json(facturas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear factura
router.post('/', async (req, res) => {
  try {
    const nuevaFactura = await Factura.create(req.body);
    res.status(201).json(nuevaFactura);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar factura
router.put('/:id', async (req, res) => {
  try {
    const factura = await Factura.findByPk(req.params.id);
    if (!factura) return res.status(404).json({ error: 'Factura no encontrada' });

    await factura.update(req.body);
    res.json(factura);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar factura
router.delete('/:id', async (req, res) => {
  try {
    const factura = await Factura.findByPk(req.params.id);
    if (!factura) return res.status(404).json({ error: 'Factura no encontrada' });

    await factura.destroy();
    res.json({ message: 'Factura eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
