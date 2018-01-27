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
 
}

exports.popular = function(req, res) {
db.Article.findAll().then(function(data){
 		res.render('popular', {articles: data});
 	}).catch(function(error){
 		console.log(error);
 	});
}

exports.author = function(req, res) {
 
    res.render('author-manager');
 
}

exports.blog = function(reg, res) {

    res.render('blog');

}

exports.cms = function(reg, res) {

    res.render('cms');

}

exports.newpost = function(req, res) {
 
    res.render('new-post');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/signin');
 
    });
 
}
