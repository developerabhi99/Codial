const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.add);






module.exports = router ;