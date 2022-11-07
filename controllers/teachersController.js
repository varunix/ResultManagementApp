const Result = require('../models/result');
const Auth = require('../models/teacher');
const loginMailer = require('../mailers/login_mailer');

module.exports.home = (req, res) => {
    Result.find({}, (err, result) => {
        if(err) {
            console.log('Error in getting all results', err); return;
        }
        
        return res.render('teacherResult', {
            result: result,
        });
    });
}

module.exports.newResult = (req, res) => {
    res.render('newResult');
}

module.exports.createForm = (req, res) => {
    Result.findOne({ roll: req.body.roll }, function(err, result) {
        if(err) {
            console.log('Error in finding result');
        }

        if(!result) {
            Result.create(req.body, function(err, result) {
                if(err) {
                    console.log('Error in creating result');
                }

                return res.redirect('/teachers');
            });
        } else {
            return res.redirect('back');
        }
    });
}

module.exports.delete = (req, res) => {
    Result.findOneAndDelete({ _id: req.params.id }, function(err, result) {
        if(!err && result) {
            console.log(result);
            console.log("Result successfully deleted");
        }
        else {
            console.log("error");
        }
        res.redirect("back");
    });
}

module.exports.editForm = (req, res) => {
    Result.findById(req.params.id, (err, result) => {
        if(err) {
            console.log("Unable to find result for edit form", err);
            return;
        }

        return res.render('editResult', {
            result: result
        });
    });
}

module.exports.editResult = (req, res) => {
    Result.findOneAndUpdate({ roll: req.body.roll }, req.body, {new: true}, (err, result) => {
        if(err) {
            console.log("Error in updating the result", err);
            return;
        }

        return res.redirect('/teachers');
    });
}

module.exports.signIn = (req, res) => {
    if(req.isAuthenticated()) {
        return res.redirect('/teachers');
    }
    
    return res.render('sign_in');
}

module.exports.signUp = (req, res) => {
    if(req.isAuthenticated()) {
       return res.redirect('/teachers');
    }

    return res.render('sign_up');
}

module.exports.createSession = (req, res) => {
    req.flash('success', 'Logged in successfully');
    return res.redirect('/teachers');
}

module.exports.create = (req, res) => {

    if(req.body.password != req.body.confirm_password) {
        req.flash('error', 'Password does not match with confirm password');
        return res.redirect('back');
    }

    Auth.findOne({email: req.body.email}, (err, user) => {
        if(err) {
            console.log('Error in create user');
            return;
        }

        if(!user) {
            Auth.create(req.body, (err, user) => {
                if(err) {
                    console.log('Error in creating user while signing up', err);
                    return;
                }

                loginMailer.mailOptions(user.email);
                return res.redirect('/teachers/authPage');
            });
        } else {
            req.flash('error', 'User already exist');
            return res.redirect('back');
        }
    });
}