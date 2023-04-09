const router = require('express').Router();
const seminarController = require('../controllers/seminarController');

router.get('/', seminarController.getAllSeminars);
router.get('/:judul_seminar', seminarController.getSeminarByTitle);
router.post('/', seminarController.createSeminar);
router.put('/:judul_seminar', seminarController.updateSeminar);
router.delete('/:judul_seminar', seminarController.deleteSeminar);

module.exports = router