

    
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


    //Routes
    var authRoute = require('./routes/auth.js')(app,passport);


    //load passport strategies
    require('./config/passport/passport.js')(passport,models.user);


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




    




// ==============================below is original=================//

// var express = require('express');
// var passport = require('passport');
// var session = require('express-session');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var env = require('dotenv').load();
// var index = require('./routes/index');
// var users = require('./routes/users');
// var exphbs = require('express-handlebars');

// var app = express();

// //Models
// var models = require("./models");
 
// //Sync Database
// models.sequelize.sync().then(function() {
 
//     console.log('Nice! Database is connected')
 
// }).catch(function(err) {
 
//     console.log(err, "Something went wrong with the Database Update!")
 
// });

// //For Passport

// app.use(session({
//    secret: 'secretsecretigotasecret',
//    resave: true,
//    saveUninitialized:true
// })); // session secret
 
// app.use(passport.initialize());
 
// app.use(passport.session()); // persistent login sessions

// // view engine setup
// app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'layout'}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');// possibly .hbs not sure

// //Routes
// var authRoute = require('./routes/auth.js')(app,passport);

// //load passport strategies
// require('./config/passport/passport.js')(passport, models.user);

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);



// // // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   var err = new Error('Not Found');
// //   err.status = 404;
// //   next(err);
// // });

// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

// module.exports = app;
