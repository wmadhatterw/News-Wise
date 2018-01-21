var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/NYT', isLoggedIn, authController.NYT);


    app.get('/author', isLoggedIn, authController.author);
    app.get('/new-post', isLoggedIn, authController.newpost);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/NYT',
 
        failureRedirect: '/signup'
    }
 
	));

	app.get('/logout',authController.logout);

	app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/NYT',
 
        failureRedirect: '/signin'
    }
 
	));

	function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
	}
 
}