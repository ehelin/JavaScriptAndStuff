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

// Single Variable Linear Regression -----------------------------
// Algorithm 1
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmOne/dataSetOne', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmOneDriver');

    var result = ref.demoSingleVariableLinearRegression(1);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmOne/dataSetTwo', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmOneDriver');

    var result = ref.demoSingleVariableLinearRegression(2);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmOne/dataSetThree', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmOneDriver');

    var result = ref.demoSingleVariableLinearRegression(3);

    res.send(result);
});

//Algorithm 2
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmTwo/dataSetOne', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmTwoDriver');

    var result = ref.demoSingleVariableLinearRegression(1);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmTwo/dataSetTwo', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmTwoDriver');

    var result = ref.demoSingleVariableLinearRegression(2);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmTwo/dataSetThree', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmTwoDriver');

    var result = ref.demoSingleVariableLinearRegression(3);

    res.send(result);
});

//Algorithm 2 Cost function graph
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmTwoCostFunction/dataSetOne', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmTwoDriver');

    var result = ref.demoSingleVariableLinearRegression(1, true);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmTwoCostFunction/dataSetTwo', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmTwoDriver');

    var result = ref.demoSingleVariableLinearRegression(2, true);

    res.send(result);
});
app.get('/javascript/machineLearning/singleVariableLinearRegressionAlgorithmTwoCostFunction/dataSetThree', function(req, res) {
    var ref = require('./singleVariableLinearRegression/singleVariableLinearRegressionAlgorithmTwoDriver');

    var result = ref.demoSingleVariableLinearRegression(3, true);

    res.send(result);
});

// Multiple Variable Linear Regression -----------------------------
// Algorithm 1
app.get('/javascript/machineLearning/multipleVariableLinearRegressionAlgorithmOne/dataSetOne', function(req, res) {
    var ref = require('./multipleVariableLinearRegression/multipleVariableLinearRegressionAlgorithmOneDriver');

    var result = ref.demoMultipleVariableLinearRegression(1);

    res.send(result);
});
app.get('/javascript/machineLearning/multipleVariableLinearRegressionAlgorithmOne/dataSetTwo', function(req, res) {
    var ref = require('./multipleVariableLinearRegression/multipleVariableLinearRegressionAlgorithmOneDriver');

    var result = ref.demoMultipleVariableLinearRegression(2);

    res.send(result);
});
app.get('/javascript/machineLearning/multipleVariableLinearRegressionAlgorithmOne/dataSetThree', function(req, res) {
    var ref = require('./multipleVariableLinearRegression/multipleVariableLinearRegressionAlgorithmOneDriver');

    var result = ref.demoMultipleVariableLinearRegression(3);

    res.send(result);
});
