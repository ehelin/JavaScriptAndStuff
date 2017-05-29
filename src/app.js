var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Welcome to Javascript Patterns and Stuff :)');
});

//register routess
var javascriptLanguageMechanicRoutes = require('./javascript/languageMechanics/routes');
var javascriptPatternRoutes = require('./javascript/patterns/routes');
var javascriptMachineLearningRoutes = require('./javascript/machineLearning/routes');
var javascriptSortingRoutes = require('./javascript/sorting/routes');

app.use(javascriptLanguageMechanicRoutes);
app.use(javascriptPatternRoutes);
app.use(javascriptMachineLearningRoutes);
app.use(javascriptSortingRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});