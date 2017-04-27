var express = require('express');
var app = module.exports = express();

app.get('/javascript/patterns/command', function(req, res){
    var ref = require('./command/commandDriver');
    ref.demoCommandPattern();

    res.send('/javascript/patterns/command - complete!');
});
app.get('/javascript/patterns/visitor', function(req, res){
    var ref = require('./visitor/visitorDriver');
    ref.demoVisitorPattern();

    res.send('/javascript/patterns/visitor - complete!');
});
app.get('/javascript/patterns/observer', function(req, res){
    var ref = require('./observer/observerDriver');
    ref.demoObserverPattern();

    res.send('/javascript/patterns/observer - complete!');
});
app.get('/javascript/patterns/serviceLocator', function(req, res){
    var ref = require('./dependancyLocator/dependancyLocatorDriver');
    ref.demoServiceLocatorPattern();

    res.send('/javascript/patterns/serviceLocator - complete!');
});
app.get('/javascript/patterns/singleton', function(req, res){
    var ref = require('./singleton/singletonDriver');
    ref.demoSingletonPattern();

    res.send('/javascript/patterns/singleton - complete!');
});
app.get('/javascript/patterns/chainOfResponsibility', function(req, res){
    var ref = require('./chainOfResponsibility/chainOfResponsibilityDriver');
    ref.demoChainOfResponsibility();

    res.send('/javascript/patterns/chainOfResponsibility - complete!');
});
app.get('/javascript/patterns/bridge', function(req, res){
    var ref = require('./bridge/bridgeDriver');
    ref.demoBridgePattern();

    res.send('/javascript/patterns/bridge - complete!');
});

app.get('/javascript/patterns/factory', function(req, res) {
    var ref = require('./factory/factoryDriver');
    ref.demoFactoryPattern();

    res.send('/javascript/patterns/factory - complete!');
});

// TODO - complete
app.get('/javascript/patterns/binarySearchTree', function(req, res){
    var cmd = require('./binarySearchTree/binarySearchTreeDriver');
    cmd.demoBinarySearchTree();

    res.send('/javascript/patterns/binarySearchTree - complete!');
});