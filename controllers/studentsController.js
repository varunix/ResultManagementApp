const Result = require('../models/result');

module.exports.findResult = (req, res) => {
    res.render('findResult');
}
const dayjs = require('dayjs');

module.exports.studentResult = (req, res) => {
    Result.findOne({roll: req.query.roll}, function(err, result) {
        if(err) {
            console.log('Error in finding the result', err);
            return;
        }

        if(!result) {
            console.log("Result not found!"); return;
        }
        
        if(req.query.name === result.name){
            let date = dayjs(result.dob).format("DD-MM-YYYY");
            return res.render('studentResult', {
                result: result,
                dob: date
            });
        }
        else {
            console.log("Result not found!"); return;
        }
    });
}