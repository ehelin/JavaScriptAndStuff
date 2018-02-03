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
app.get('/javascript/languagemechanics/objectcreation', function(req, res)
{
    var reference = require('./objectCreation/objectCreationDriver');

    reference.demoObjectCreation();

    res.send('/javascript/languagemechanics/objectcreation - complete!');
});
app.get('/javascript/languagemechanics/objectfunctions', function (req, res)
{
    var module = require('./objectFunctions/objectFunctions');
    var objectFunctions = new module.objectFunctions();

    // objectFunctions.getPrototypeOf();
    // objectFunctions.getOwnPropertyNames();
    // objectFunctions.assign();
    // objectFunctions.dotDotDotOperator();
    // objectFunctions.displayWithALambda();
    // objectFunctions.keysDemo();
    //objectFunctions.objectAsArrayFacade();

    //array ==============
    //objectFunctions.every();
    objectFunctions.concat();
    objectFunctions.copyWithin();

    res.send('/javascript/languagemechanics/objectfunctions - complete!');
});

app.get('/javascript/generateRandomNumber', function (req, res)
{
    console.log('inside route');

    var guidSource = require('./GuidToNumber/guidToNumber');

    console.log('guidSource: ', guidSource);

    guidSource.generateRandomNumber();

    res.send('/javascript/generateRandomNumber - complete!');
});