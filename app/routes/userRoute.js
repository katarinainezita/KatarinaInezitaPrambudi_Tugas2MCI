const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:nama_user', userController.getUserByName);
router.post('/', userController.createUser);
router.put('/:nama_user', userController.updateUser);
router.delete('/:nama_user', userController.deleteUser);

module.exports = router