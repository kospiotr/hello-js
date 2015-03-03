var express = require('express');
var calculator = require('./calculator');
var app = express();

app.get('/test', function (req, res) {
    console.log('hitting test');
    res.json({status: 'ok'});
});

app.get('/calculator/add', function (req, res) {
    
    var param1Int = parseInt(req.query.arg1);
    var param2Int = parseInt(req.query.arg2);
    
    var addResult = calculator.add(param1Int, param2Int);
    
    res.json({result: addResult});
});
console.log('App is configured');
module.exports = app;