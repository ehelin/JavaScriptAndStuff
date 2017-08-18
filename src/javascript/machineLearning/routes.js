var express = require('express');
var app = module.exports = express();

// Kmeans ---------------------------------------
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

// Exercises ------------------------------------
app.get('/javascript/machineLearning/exercise0001', function(req, res) {
    var ref = require('./exercise0001/exercise0001Driver');

    ref.demoExercise0001();

    res.send('/javascript/machineLearning/exercise0001 is complete!');
});
