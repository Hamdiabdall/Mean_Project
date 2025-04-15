const mongoose = require('mongoose');

const smartphoneSchema = new mongoose.Schema({
  nomTel: {
    type: String,
    required: true
  },
  marque: {
    type: String,
    required: true
  },
  caracteristique: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    default: 'https://via.placeholder.com/150?text=No+Image'
  }
}, { timestamps: true });

module.exports = mongoose.model('Smartphone', smartphoneSchema);
