var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
    app.get('/', isLoggedIn, authController.recent);
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    
    app.get('/recent', isLoggedIn, authController.recent);
    app.get('/popular', isLoggedIn, authController.popular);

    app.get('/author', isLoggedIn, authController.author);
    app.get('/blog', isLoggedIn, authController.blog);
    app.get('/cms', isLoggedIn, authController.cms);
    app.get('/new-post', isLoggedIn, authController.newpost);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/recent',
 
        failureRedirect: '/signup'
    }
 
	));

	app.get('/logout',authController.logout);

	app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/recent',
 
        failureRedirect: '/signin'
    }
 
	));

	function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
	}
 
}