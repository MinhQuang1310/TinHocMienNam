// routes/helloRoutes.js
const express = require('express');
const router = express.Router();
const test = require('../controllers/test');

router.get('/test', test.getHello)

// Xuất router để sử dụng ở nơi khác
module.exports = router;
