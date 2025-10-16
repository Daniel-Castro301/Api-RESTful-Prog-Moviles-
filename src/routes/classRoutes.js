const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Obtener todas las clases
router.get('/', async (req, res) => {
  try {
    const clases = await Class.findAll();
    res.json(clases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear nueva clase
router.post('/', async (req, res) => {
  try {
    const nuevaClase = await Class.create(req.body);
    res.status(201).json(nuevaClase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
