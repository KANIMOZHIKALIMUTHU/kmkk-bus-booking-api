const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  number: String,
  capacity: Number,
  type: String,
  amenities: [String],
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  availableSeats: Number,
});

module.exports = mongoose.model('Bus', busSchema);
