const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.use('/students', require('./students'));
router.use('/teachers', require('./teachers'));

module.exports = router;