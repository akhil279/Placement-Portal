const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login_controller');

router.get('/',loginController.home);



module.exports = router;