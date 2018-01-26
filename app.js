

    
    var express    = require('express')
    var exphbs     = require('express-handlebars')
    var app        = express()
    var passport   = require('passport')
    var session    = require('express-session')
    var bodyParser = require('body-parser')
    var env        = require('dotenv').load()
    var PORT = process.env.PORT || 3000;

    app.use(express.static('./public'));
    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


     // For Passport
    app.use(session({ secret: 'secretsecretigotasecret',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions


     //For Handlebars
    app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'layout'}));

    app.set('views', './views')
    app.set('view engine', 'hbs');
    


  //Models
    var models = require("./models");
    // var blogdb = require("./models/blog");


    //Routes
    var authRoute = require('./routes/auth.js')(app,passport);

    // blogdb.sequelize.sync({ force: true }).then(function() {
    //   app.listen(PORT, function() {
    //     console.log("App listening on PORT " + PORT)
    //   });


    //load passport strategies
    require('./config/passport/passport.js')(passport,models.user);
    require('./routes/api-routes.js')(app);


    //Sync Database

    models.sequelize.sync().then(function(){
    console.log('Nice! Database Connected')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });



  app.listen(PORT, function(err){
    if(!err)
    console.log("Running!! Check port: " + PORT); else console.log(err)

  });
