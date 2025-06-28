const Bus = require('../models/Bus');
const Booking = require('../models/Booking');

exports.searchBuses = async (req, res) => {
  const { origin, destination } = req.query;
  const buses = await Bus.find().populate('routeId');
  const result = buses.filter(
    (bus) => bus.routeId.origin === origin && bus.routeId.destination === destination
  );
  res.json(result);
};

exports.bookBus = async (req, res) => {
  const { busId, routeId, date } = req.body;
  const bus = await Bus.findById(busId);
  if (bus.availableSeats <= 0) return res.status(400).json({ message: 'No seats left' });

  bus.availableSeats--;
  await bus.save();

  const booking = new Booking({
    userId: req.user.id,
    busId,
    routeId,
    date,
  });
  await booking.save();

  res.json(booking);
};

exports.cancelBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = 'cancelled';
  await booking.save();

  const bus = await Bus.findById(booking.busId);
  bus.availableSeats++;
  await bus.save();

  res.json({ message: 'Booking cancelled' });
};
