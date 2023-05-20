const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.add);
router.use('/user',require('./users'));
router.use('/post',require('./post'));







module.exports = router ;