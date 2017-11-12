var data = require('./data');
var chart = require('./javascriptChart');
var utils = require('./utils');

// Algorithm
// y = B0 + B1 * x
// B1 = sum((xi-mean(x)) * (yi-mean(y))) / sum((xi – mean(x))^2)
// B0 = mean(y) – B1 * mean(x)

function demoSingleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoSingleVariableLinearRegression - Algorithm 1');

    var dataSet = null;

    if (dataSetNumber === 1) {
        dataSet = data.getDataSetOne();
    } else if (dataSetNumber === 2) {
        dataSet = data.getDataSetTwo();
    } else if (dataSetNumber === 3) {
        dataSet = data.getDataSetThree();
    }

    dataSet = runSingleVariable(dataSet);

    return chart.getChart(
        dataSet[0],
        dataSet[2][0].minX,
        dataSet[2][0].maxX,
        dataSet[2][0].minY,
        dataSet[2][0].maxY,
    );
}

function runSingleVariable(dataSets) {
    const meanX = getMean(dataSets[0], true);
    const meanY = getMean(dataSets[0], false);

    const numerator = calculateNumerator(dataSets[0], meanX, meanY);
    const denominator = calculateDenominator(dataSets[0], meanX);

    const B1 = numerator/denominator;
    const B0 = meanY - B1 * meanX;

    console.log('B0: ', B0);
    console.log('B1: ', B1);

    dataSets[0].forEach((dataSet) => {
        dataSet.line = utils.makePrediction(dataSet.x, B0, B1, false);
    });

    dataSets[1].forEach((dataSet) => {
        utils.makePrediction(dataSet.x, B0, B1, true);
    });

    return dataSets;
}

function calculateDenominator(dataSets, meanX) {
    var sum = 0;
    const denominatorX = calculateNumeratorPartOne(dataSets, true, meanX, true);

    denominatorX.forEach((xy) => {
        if (!isNaN(parseInt(xy))) {
            sum = sum + xy;
        }
    });

    return sum;
}

function calculateNumerator(dataSets, meanX, meanY) {
    let numerator = 0;

    const numeratorX = calculateNumeratorPartOne(dataSets, true, meanX, false);
    const numeratorY = calculateNumeratorPartOne(dataSets, false, meanY);

    numerator = calculateNumeratorPartTwo(numeratorX, numeratorY);

    return numerator;
}

function calculateNumeratorPartOne(dataSets, isX, mean, takeSquare) {
    var xyMinusMean = [];

    dataSets.forEach((dataSet) => {
        if (isX) {
            var value = 0;

            if (takeSquare) {
                value = Math.pow(dataSet.x - mean, 2);
            } else {
                value = dataSet.x - mean;
            }
            xyMinusMean.push(value);
        } else {
            var value = dataSet.y - mean;
            xyMinusMean.push(value);
        }
    });

    return xyMinusMean;
}
function calculateNumeratorPartTwo(numeratorX, numeratorY) {
    var sum = 0;

    for(var i=0; i<numeratorX.length; i++) {
        var xNan = isNaN(parseInt(numeratorX[i]));
        var yNan = isNaN(parseInt(numeratorY[i]));

        if (!xNan && !yNan) {
            sum = sum + (numeratorX[i] * numeratorY[i]);
        }
    }

    return sum;
}
function getMean(dataSets, isX) {
    var mean = 0;

    dataSets.forEach((dataSet) => {
        if (isX) {
            console.log('dataset x: ' + dataSet.x);

            if (!isNaN(parseInt(dataSet.x))) {
                mean = mean + dataSet.x;
            }
        } else {
            console.log('dataset y: ' + dataSet.y);

            if (!isNaN(parseInt(dataSet.y))) {
                mean = mean + dataSet.y;
            }
        }
    });

    mean = mean/dataSets.length;
    if (isX) {
        console.log('meanX: ', mean);
    } else {
        console.log('meanY: ', mean);
    }

    return mean;
}

module.exports.demoSingleVariableLinearRegression = demoSingleVariableLinearRegression;