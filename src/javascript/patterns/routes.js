var express = require('express');
var app = module.exports = express();

app.get('/javascript/patterns/command', function(req, res){
    var cmd = require('./command/commandDriver');
    cmd.demoCommandPattern();

    res.send('/javascript/patterns/command - complete!');
});

app.get('/javascript/patterns/visitor', function(req, res){
    var cmd = require('./visitor/visitorDriver');
    cmd.demoVisitorPattern();

    res.send('/javascript/patterns/visitor - complete!');
});

app.get('/javascript/patterns/observer', function(req, res){
    var cmd = require('./observer/observerDriver');
    cmd.demoObserverPattern();

    res.send('/javascript/patterns/observer - complete!');
});