var express = require('express');
var app = module.exports = express();

app.get('/javascript/sorting/bubble', function(req, res) {
    var ref = require('./bubble/bubbleDriver');

    ref.demoBubbleSort();

    res.send('/javascript/sorting/bubble is complete!');
});