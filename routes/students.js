const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.get('/', studentsController.findResult);
router.get('/studentResult', studentsController.studentResult);

module.exports = router;