var express = require('express');
var app = module.exports = express();

app.get('/javascript/machineLearning/kMeans', function(req, res) {
    var ref = require('./kMeans/kMeansDriver');

    ref.demoKMeans();

    res.send('/javascript/machineLearning/kMeans is complete!')
});