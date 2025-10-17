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

// Actualizar clase
router.put('/:id', async (req, res) => {
  try {
    const clase = await Class.findByPk(req.params.id);
    if (!clase) return res.status(404).json({ error: 'Clase no encontrada' });

    await clase.update(req.body);
    res.json(clase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar clase
router.delete('/:id', async (req, res) => {
  try {
    const clase = await Class.findByPk(req.params.id);
    if (!clase) return res.status(404).json({ error: 'Clase no encontrada' });

    await clase.destroy();
    res.json({ message: 'Clase eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
