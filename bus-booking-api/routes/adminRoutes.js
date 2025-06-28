const express = require('express');
const {
  addBus, updateBus, deleteBus,
  addRoute, updateRoute, deleteRoute
} = require('../controllers/adminController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/buses', auth('admin'), addBus);
router.put('/buses/:id', auth('admin'), updateBus);
router.delete('/buses/:id', auth('admin'), deleteBus);

router.post('/routes', auth('admin'), addRoute);
router.put('/routes/:id', auth('admin'), updateRoute);
router.delete('/routes/:id', auth('admin'), deleteRoute);

module.exports = router;
