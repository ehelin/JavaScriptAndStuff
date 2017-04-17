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
app.get('/javascript/patterns/serviceLocator', function(req, res){
    var cmd = require('./dependancyLocator/dependancyLocatorDriver');
    cmd.demoServiceLocatorPattern();

    res.send('/javascript/patterns/serviceLocator - complete!');
});
app.get('/javascript/patterns/singleton', function(req, res){
    var cmd = require('./singleton/singletonDriver');
    cmd.demoSingletonPattern();

    res.send('/javascript/patterns/singleton - complete!');
});
app.get('/javascript/patterns/chainOfResponsibility', function(req, res){
    var cmd = require('./chainOfResponsibility/chainOfResponsibilityDriver');
    cmd.demoChainOfResponsibility();

    res.send('/javascript/patterns/chainOfResponsibility - complete!');
});

// TODO - complete
app.get('/javascript/patterns/binarySearchTree', function(req, res){
    var cmd = require('./binarySearchTree/binarySearchTreeDriver');
    cmd.demoBinarySearchTree();

    res.send('/javascript/patterns/binarySearchTree - complete!');
});