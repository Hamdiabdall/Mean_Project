const express = require('express');
const router = express.Router();
const Smartphone = require('../models/Smartphone');

// Get all smartphones
router.get('/', async (req, res) => {
  try {
    const smartphones = await Smartphone.find();
    res.json(smartphones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single smartphone
router.get('/:id', async (req, res) => {
  try {
    const smartphone = await Smartphone.findById(req.params.id);
    if (!smartphone) {
      return res.status(404).json({ message: 'Smartphone not found' });
    }
    res.json(smartphone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create smartphone
router.post('/', async (req, res) => {
  const smartphone = new Smartphone({
    nomTel: req.body.nomTel,
    marque: req.body.marque,
    caracteristique: req.body.caracteristique,
    photoUrl: req.body.photoUrl
  });

  try {
    const newSmartphone = await smartphone.save();
    res.status(201).json(newSmartphone);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update smartphone
router.put('/:id', async (req, res) => {
  try {
    const smartphone = await Smartphone.findById(req.params.id);
    if (!smartphone) {
      return res.status(404).json({ message: 'Smartphone not found' });
    }
    
    smartphone.nomTel = req.body.nomTel || smartphone.nomTel;
    smartphone.marque = req.body.marque || smartphone.marque;
    smartphone.caracteristique = req.body.caracteristique || smartphone.caracteristique;
    smartphone.photoUrl = req.body.photoUrl || smartphone.photoUrl;
    
    const updatedSmartphone = await smartphone.save();
    res.json(updatedSmartphone);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete smartphone
router.delete('/:id', async (req, res) => {
  try {
    const smartphone = await Smartphone.findById(req.params.id);
    if (!smartphone) {
      return res.status(404).json({ message: 'Smartphone not found' });
    }
    
    await Smartphone.findByIdAndDelete(req.params.id);
    res.json({ message: 'Smartphone deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
