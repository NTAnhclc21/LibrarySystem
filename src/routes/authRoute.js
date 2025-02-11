const express = require('express');
const router = express.Router();

const authController=require('../controllers/authController');

router.post('/login',authController.login);
router.post('/signUp',authController.signUp);
router.get('/logout',authController.logout);

module.exports = router;