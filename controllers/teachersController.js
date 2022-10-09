const Result = require('../models/result');

module.exports.home = (req, res) => {
    Result.find({}, (err, result) => {
        if(err) {
            console.log('Error in getting all results', err); return;
        }

        return res.render('teacherResult', {
            result: result
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