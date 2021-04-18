const express = require('express');
const router = express.Router();

const mainpageController = require('../controllers/mainpage_controller');

router.get('/',mainpageController.home);



module.exports = router;