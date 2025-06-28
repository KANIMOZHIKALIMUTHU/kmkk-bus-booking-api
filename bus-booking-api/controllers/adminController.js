const Bus = require('../models/Bus');
const Route = require('../models/Route');

exports.addBus = async (req, res) => {
  const bus = new Bus(req.body);
  await bus.save();
  res.json(bus);
};

exports.updateBus = async (req, res) => {
  const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bus);
};

exports.deleteBus = async (req, res) => {
  await Bus.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bus deleted' });
};

exports.addRoute = async (req, res) => {
  const route = new Route(req.body);
  await route.save();
  res.json(route);
};

exports.updateRoute = async (req, res) => {
  const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(route);
};

exports.deleteRoute = async (req, res) => {
  await Route.findByIdAndDelete(req.params.id);
  res.json({ message: 'Route deleted' });
};
