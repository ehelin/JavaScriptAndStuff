var express = require('express');
var app = module.exports = express();

app.get('/javascript/patterns/command', function(req, res){
    var cmd = require('./command/command');
    cmd.demoCommandPattern();

    res.send('/javascript/patterns/command - complete!');
});

app.get('/javascript/patterns/visitor', function(req, res){
    var cmd = require('./visitor/visitor');
    cmd.demoVisitorPattern();

    res.send('/javascript/patterns/visitor - complete!');
});