module.exports.home = function(req, res) {
    return res.render('index');
}

module.exports.logout = function(req, res) {
    req.logout(function(err) {
        if(err) {
            return next(err);
        }

        req.flash('success', 'You have logged out!');
        return res.redirect('/');
    });
}