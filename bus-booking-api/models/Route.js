const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  duration: String,
  stops: [String],
  price: Number,
});

module.exports = mongoose.model('Route', routeSchema);
