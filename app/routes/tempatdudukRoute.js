const router = require('express').Router();
const tempatdudukController = require('../controllers/tempatdudukController');

router.get('/', tempatdudukController.getAllSeats);
router.get('/:id_seminar', tempatdudukController.getSeatByIdSeminar);
router.post('/', tempatdudukController.createSeat);
router.put('/:id_seminar', tempatdudukController.updateSeat);
router.delete('/:id_seminar', tempatdudukController.deleteSeat);

module.exports = router