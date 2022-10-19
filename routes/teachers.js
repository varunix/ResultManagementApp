const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');
const passport = require('../configs/passport-local-strategy');

router.get('/', passport.checkAuthentication, teachersController.home);
router.get('/newResult', teachersController.newResult);
router.post('/newResult', passport.checkAuthentication,teachersController.createForm);
router.get('/delete/:id', teachersController.delete);
router.get('/edit/:id', teachersController.editForm);
router.post('/editResult', teachersController.editResult);
router.get('/authPage', teachersController.signIn);
router.get('/signUp', teachersController.signUp);
router.post('/create-session', passport.authenticate('local', {
    failureRedirect: '/teachers/authPage'
}), teachersController.createSession);
router.post('/create', teachersController.create);

module.exports = router;