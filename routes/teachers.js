const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');
const passport = require('../configs/passport-local-strategy');

router.get('/', passport.checkAuthentication, teachersController.home);
router.get('/newResult', teachersController.newResult);
router.post('/newResult', passport.checkAuthentication,teachersController.createForm);
router.get('/delete/:id', passport.checkAuthentication, teachersController.delete);
router.get('/edit/:id',  passport.checkAuthentication, teachersController.editForm);
router.post('/editResult',  passport.checkAuthentication, teachersController.editResult);
router.get('/authPage', teachersController.signIn);
router.get('/signUp', teachersController.signUp);
router.post('/create-session', passport.authenticate('local', {
    failureRedirect: '/teachers/authPage'
}), teachersController.createSession);
router.post('/create', teachersController.create);

module.exports = router;