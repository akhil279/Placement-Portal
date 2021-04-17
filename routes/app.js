const express = require('express');
const router = express.Router();
// const homepageController = require('../controllers/homepage_controller')

// router.get('/',homepageController.homePage);
router.use('/login', require('./login'));
router.use('/signin', require('./signin'));
// router.use('/about', require('./about'));
// router.use('/admin', require('./admin'));
// router.use('/contact',require('./contact'));
module.exports = router;