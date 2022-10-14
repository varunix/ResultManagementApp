const Result = require('../models/result');

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
    arr = [];
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
    return res.render('sign_in');
}

module.exports.signUp = (req, res) => {
    return res.render('sign_up');
}

module.exports.createSession = (req, res) => {
    //todo
}

module.exports.create = (req, res) => {
    //todo
}