const express = require('express');
const { searchBuses, bookBus, cancelBooking } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/buses/search', auth('user'), searchBuses);
router.post('/bookings', auth('user'), bookBus);
router.delete('/bookings/:id', auth('user'), cancelBooking);

module.exports = router;
