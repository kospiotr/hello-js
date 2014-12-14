var express = require('express');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var port = process.env.PORT || 8080;
var app = express();

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'kospiotr'})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//passport configuration
passport.serializeUser(function (user, done) {
    console.log('serializing: ' + user);
    done(null, user);
});
passport.deserializeUser(function (id, done) {
    console.log('deserializing: ' + id);
    done(null, id);
});
passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
},
function (req, email, password, done) {
    console.log('authorizating %j, %j', email, password);
    var properUser = 'admin@admin.com';
    if (email == properUser) {
        done(null, email);
    } else {
        done('Can not find user: ' + email + ', the proper one is: ' + properUser);
    }
}));

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/secured', // redirect to the secure profile section
    failureRedirect: '/login' // redirect back to the signup page if there is an error
}));
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
app.get('/login', sendFile(__dirname + '/public/login.html'));
app.get('/public', sendFile(__dirname + '/public/public.html'));
app.get('/secured', isLoggedIn, sendFile(__dirname + '/public/secured.html'));
app.use("/", express.static(__dirname + '/public'));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}
;

function sendFile(path) {
    return function (req, res) {
        res.sendfile(path);
    };
}
;

app.listen(port);
console.log('App started on port ' + port);