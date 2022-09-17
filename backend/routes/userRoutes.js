const  { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

const validationMiddleware = require('../middlewares/validationMiddleware');

const userSchema = require('../validationSchema/userSchema');

router.route('/')
    .get(userController.getUsers)
    .post(validationMiddleware.validate(userSchema), userController.createUser);

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;