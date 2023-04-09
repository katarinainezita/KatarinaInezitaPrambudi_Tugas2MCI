const router = require('express').Router();
const pembayaranController = require('../controllers/pembayaranController');

router.get('/', pembayaranController.getAllPayment);
router.get('/:id_booking', pembayaranController.getPaymentByIdBooking);
router.get('/:id_user', pembayaranController.getPaymentByIdUser);
router.post('/', pembayaranController.createPayment);
router.put('/:id_user', pembayaranController.updatePayment);
router.delete('/:id_user', pembayaranController.deletePayment);

module.exports = router