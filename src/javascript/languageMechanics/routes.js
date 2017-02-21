var express = require('express');
var app = module.exports = express();

app.get('/javascript/languagemechanics/destructuring', function (req, res)
{
    var module = require('./destructuring/Destructuring');
    var destructuring = new module.Destructuring();

    destructuring.simpleDestructuring();
    destructuring.nestedDestructuring();

    res.send('/javascript/languagemechanics/destructuring - complete!');
});

app.get('/javascript/languagemechanics/objectfunctions', function (req, res)
{
    var module = require('./objectFunctions/objectFunctions');
    var objectFunctions = new module.objectFunctions();

    //objectFunctions.getPrototypeOf();
    //objectFunctions.getOwnPropertyNames();
    objectFunctions.assign();
    // objectFunctions.every();
    // objectFunctions.dotDotDotOperator();
    // objectFunctions.displayWithALambda();
    // objectFunctions.keysDemo();

    res.send('/javascript/languagemechanics/objectfunctions - complete!');
});