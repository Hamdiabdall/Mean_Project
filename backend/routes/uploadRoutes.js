const express = require('express');
const router = express.Router();
const { upload, uploadImage, deleteImage } = require('../controllers/uploadController');

// Upload a single image
router.post('/', upload.single('image'), uploadImage);

// Delete an uploaded image
router.delete('/:filename', deleteImage);

module.exports = router; 