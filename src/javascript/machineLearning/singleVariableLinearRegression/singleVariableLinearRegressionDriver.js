var data = require('./data');
var chart = require('./javascriptChart');

function demoSingleVariableLinearRegression() {
    console.log('inside var demoSingleVariableLinearRegression');

    //runSingleVariable(data.getDataSetOne());
    //runSingleVariable(data.getDataSetTwo());
    //runSingleVariable(data.getDataSetThree());

    //var dataSet = data.getDataSetOne();
    //var dataSet = data.getDataSetTwo();
    var dataSet = data.getDataSetThree();

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

    dataSets[1].forEach((dataSet) => {
        makePrediction(dataSet.x, B0, B1);
    });
}

function makePrediction(x, B0, B1) {
    console.log('Prediction for x: ', x);

    const y = B0 + B1 * x;

    console.log('Predicted y value: ', y);
}

function calculateDenominator(dataSets, meanX) {
    var sum = 0;
    const denominatorX = calculateNumeratorPartOne(dataSets, true, meanX, true);

    denominatorX.forEach((xy) => {
        sum = sum + xy;
    });

    console.log('denominator->sum: ', sum);

    return sum;
}

function calculateNumerator(dataSets, meanX, meanY) {
    let numerator = 0;

    const numeratorX = calculateNumeratorPartOne(dataSets, true, meanX, false);
    const numeratorY = calculateNumeratorPartOne(dataSets, false, meanY);

    numerator = calculateNumeratorPartTwo(numeratorX, numeratorY);

    console.log('numerator: ', numerator);

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

    xyMinusMean.forEach((xyMinusMeanValue) => {
        console.log(xyMinusMeanValue);
    });

    return xyMinusMean;
}
function calculateNumeratorPartTwo(numeratorX, numeratorY) {
    var sum = 0;

    for(var i=0; i<numeratorX.length; i++) {
        sum = sum + (numeratorX[i] * numeratorY[i]);
    }

    return sum;
}
function getMean(dataSets, isX) {
    var mean = 0;

    dataSets.forEach((dataSet) => {
        if (isX) {
            mean = mean + dataSet.x;
        } else {
            mean = mean + dataSet.y;
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