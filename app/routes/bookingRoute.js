const router = require('express').Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.get('/:id_user', bookingController.getBookingByIdUser);
router.post('/', bookingController.createBooking);
router.put('/:id_user', bookingController.updateBooking);
router.delete('/:id_user', bookingController.deleteBooking);

module.exports = router