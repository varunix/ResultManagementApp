const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');

router.get('/', teachersController.home);
router.get('/newResult', teachersController.newResult);
router.post('/newResult', teachersController.createForm);

module.exports = router;