const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  date: String,
  status: { type: String, enum: ['active', 'cancelled'], default: 'active' },
});

module.exports = mongoose.model('Booking', bookingSchema);
