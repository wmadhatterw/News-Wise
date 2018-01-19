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
    res.sendFile(path.join(__dirname, "../public/sign-in.html"));
  });

  //recent route
  app.get("/recent", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recent.html"));
  });

  //popular route
  app.get("/popular", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/popular.html"));
  });

  //witness route
  app.get("/witness", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/witness.html"));
  });

  //fake route
  app.get("/fake", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/fake.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  //create post route
  app.get("/new-post", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/new-post.html"));
  });

  // sign-up route loads cms.html
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });
};
