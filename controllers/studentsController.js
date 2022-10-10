const Result = require('../models/result');
const dayjs = require('dayjs');

module.exports.findResult = (req, res) => {
    return res.render('findResult');
}

module.exports.studentResult = (req, res) => {
    Result.findOne({roll: req.query.roll}, function(err, result) {
        if(err) {
            console.log('Error in finding the result', err);
            return;
        }

        else if(!result) {
            req.flash('error', 'Result Not Found');
            return res.redirect('back');
        }

        else if(req.query.name === result.name){
            let date = dayjs(result.dob).format("DD-MM-YYYY");
            return res.render('studentResult', {
                result: result,
                dob: date
            });
        }

        else {
            req.flash('error', 'Result Not Found');
            return res.redirect('back');
        }
    });
}