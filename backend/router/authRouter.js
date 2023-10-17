const express = require('express');
const router = express.Router();
const authController=require('../controller/authController')
//rest api

router.post('/adminlogin',authController.adminlogin);

module.exports = router;