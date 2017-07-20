var express = require('express');
var app = module.exports = express();

app.get('/javascript/machineLearning/kMeans', function(req, res) {
    var ref = require('./kMeans/kMeansDriver');

    ref.demoKMeans();

    res.send('/javascript/machineLearning/kMeans is complete!')
});

app.get('/javascript/machineLearning/kMeansLargerDataSets', function(req, res) {
    var ref = require('./kMeans/kMeansDriver');

    ref.demoKMeansLargerDataSet();

    res.send('/javascript/machineLearning/kMeansLargerDataSets is complete!')
});