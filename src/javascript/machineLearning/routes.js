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

// ID3 ------------------------------------
app.get('/javascript/machineLearning/iD3Algorithm', function(req, res) {
    var ref = require('./iD3Algorithm/iD3AlgorithmDriver');

    ref.demoiD3Algorithm();

    res.send('/javascript/machineLearning/iD3Algorithm is complete!');
});

// Exercises ------------------------------------
app.get('/javascript/machineLearning/exercise0001', function(req, res) {
    var ref = require('./exercise0001/exercise0001Driver');

    ref.demoExercise0001();

    res.send('/javascript/machineLearning/exercise0001 is complete!');
});

// Linear Regression -----------------------------
app.get('/javascript/machineLearning/singleVariableLinearRegression/dataSetOne', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionDriver');

    var result = ref.demoSingleVariableLinearRegression(1);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegression/dataSetTwo', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionDriver');

    var result = ref.demoSingleVariableLinearRegression(2);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegression/dataSetThree', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionDriver');

    var result = ref.demoSingleVariableLinearRegression(3);

    res.send(result);
});