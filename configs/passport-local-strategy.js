const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TeacherAuth = require('../models/teacher');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
    }, function(req, email, password, done) {
        TeacherAuth.findOne({email: email}, function(err, user) {
            if(err) {
                req.flash('error', err);
                return done(err);
            }

            if(!user || user.password != password) {
                req.flash('error', 'Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
}));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser((id, done) => {
    TeacherAuth.findById(id, function(err, user) {
        if(err) {
            console.log('Error in finding user --> Passport');
            return;
        }

        return done(null, user);
    });
});

//check if user is authenticated
passport.checkAuthentication = (req, res, next) => {
    //if the user is signed in, then pass on the request to the next function (controller's action)
    if(req.isAuthenticated()) {
        return next();
    }

    //if the user is not found
    return res.redirect('/teachers/authPage');
}

passport.setAuthenticatedUser = (req, res, next) => {
    if(req.isAuthenticated()) {
        //req.user contains the current signed in user from the session cookie and we are just sending this to locals for the views
        res.locals.user = req.user;
    }

    next();
}


module.exports = passport;