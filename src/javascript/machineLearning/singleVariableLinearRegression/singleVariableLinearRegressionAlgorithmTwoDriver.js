var data = require('./data');
var chart = require('./javascriptChart');
var utils = require('./utils');

const NOT_SET_YET = 999;

// Algorithm
// y = B0 + B1 * x
// B1 = 1/2 m sum((xi-yi)^2)

function demoSingleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoSingleVariableLinearRegression - Algorithm 2');

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

    return 'TODO - implement second algorithm';
}

function runSingleVariable(dataSets) {
    const lowestB0B1 = calculateLowestB0B1(dataSets);

    console.log('lowestB0B1: ', lowestB0B1);
    console.log('');  //formatting

    dataSets[0].forEach((dataSet) => {
        dataSet.line = utils.makePrediction(dataSet.x, lowestB0B1.lowestB0, lowestB0B1.lowestB1, false);
    });
    console.log('');  //formatting

    dataSets[1].forEach((dataSet) => {
        utils.makePrediction(dataSet.x, lowestB0B1.lowestB0, lowestB0B1.lowestB1, true);
    });

    return dataSets;
}

function calculateLowestB0B1(dataSets) {
    const largestX = utils.getLargestXValue(dataSets);
    const B1Values = getB1Values(largestX);
    var lowestB0 = NOT_SET_YET;
    var lowestB1 = NOT_SET_YET;

    B1Values.forEach((B1Value) => {
        console.log('current B1 Value: ', B1Value);

        var B0 = calculateB0(dataSets, B1Value);

        if (lowestB0 === NOT_SET_YET || (B0 < lowestB0)) {
            lowestB0 = B0;
            lowestB1 = B1Value;
        }

        console.log('B0: ', B0);
    });

    const lowestB0B1 = {
        lowestB0,
        lowestB1
    };

    return lowestB0B1;
}

function calculateB0(dataSets, B1) {
    var result = 0;
    var b1Interval = B1;

    dataSets[0].forEach((dataSet) => {
        if (!isNaN(parseInt(dataSet.y))) {
            var subValue = B1 - dataSet.y;
            subValue = Math.pow(subValue, 2);
            result = result + subValue;

            B1 += b1Interval;
        }
    });

    var divisor = 2*(dataSets[0].length-1);  //minus 1 to account for title values in array
    result = result/divisor;

    return result;
}

function getB1Values(largestX) {
    const B1Values = [];
    var ctr = 0;

    while(ctr <= largestX) {
        B1Values.push(ctr);
        ctr += .25;
    }

    return B1Values;
}

module.exports.demoSingleVariableLinearRegression = demoSingleVariableLinearRegression;