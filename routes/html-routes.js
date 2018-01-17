// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/create-user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create-user.html"));
  });  

  // cms route loads cms.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  app.get("/fake", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/fake.html"));
  });
  app.get("/popular", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/popular.html"));
  });
  app.get("/witness", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/witness.html"));
  });


};
