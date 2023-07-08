const express = require('express');

const router = express.Router();
const userController = require('../controller/user_controller');

router.get('/profile',userController.profile);
router.get('/signUp',userController.signUpPage);
router.get('/signIn',userController.signInPage);

router.post('/create-user',userController.create);
router.post('/create-session',userController.signIn);
router.get('/signout',userController.signout);










module.exports = router ;