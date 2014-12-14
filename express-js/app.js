// BASE SETUP
// ==============================================

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.use("/", express.static(__dirname + '/public'));
app.get('/sample', function (req, res) {
  res.send('this is a sample!');
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('App started on port ' + port);