var db = require("../models");

var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.recent = function(req, res) {
 	db.Article.findAll().then(function(data){
 		res.render('recent', {articles: data});
 	}).catch(function(error){
 		console.log(error);
 	});
    // console.log(data);
    // console.log("hitting page route===================");
   
    
 
}

exports.popular = function(req, res) {

	res.render('popular');
}

exports.author = function(req, res) {
 
    res.render('author-manager');
 
}
exports.newpost = function(req, res) {
 
    res.render('new-post');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/signin');
 
    });
 
}