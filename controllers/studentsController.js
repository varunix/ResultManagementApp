const Result = require('../models/result');

module.exports.findResult = (req, res) => {
    res.render('findResult');
}

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
            return res.render('studentResult', {
                result: result
            });
        }
        else {
            console.log("Result not found!"); return;
        }
    });
}