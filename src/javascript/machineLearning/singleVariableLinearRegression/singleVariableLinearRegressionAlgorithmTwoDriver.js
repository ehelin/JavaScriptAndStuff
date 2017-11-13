var data = require('./data');
var chart = require('./javascriptChart');
var utils = require('./utils');

const NOT_SET_YET = 999;

// Algorithm
// y = B0 + B1 * x
// B0 = 1/2 m sum((xi-yi)^2)

function demoSingleVariableLinearRegression(dataSetNumber, showCostFunction) {
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
    dataSet[3].forEach((dataSet) => {
       console.log('contents: ', dataSet);
    });

    if (showCostFunction) {
        return chart.getChart(
            dataSet[3],
            dataSet[2][0].minX,
            dataSet[2][0].maxX,
            dataSet[2][0].minY,
            dataSet[2][0].maxY,
            'Cost Function'
        );
    } else {
        return chart.getChart(
            dataSet[0],
            dataSet[2][0].minX,
            dataSet[2][0].maxX,
            dataSet[2][0].minY,
            dataSet[2][0].maxY,
            'Data with Prediction Line'
        );
    }
}

function runSingleVariable(dataSets) {
    const lowestB0B1 = calculateLowestB0B1(dataSets);

    dataSets[0].forEach((dataSet) => {
        dataSet.line = utils.makePrediction(dataSet.x, lowestB0B1.lowestB0, lowestB0B1.lowestB1, false);
    });

    dataSets[1].forEach((dataSet) => {
        utils.makePrediction(dataSet.x, lowestB0B1.lowestB0, lowestB0B1.lowestB1, true);
    });

    var ctr = 0;
    dataSets[3].forEach((dataSet) => {
        if (ctr > 0) {//skip title
            dataSet.x = lowestB0B1.b0b1[ctr].b1;
            dataSet.y = lowestB0B1.b0b1[ctr].b0;
        }

        ctr++
    });

    return dataSets;
}

function calculateLowestB0B1(dataSets) {
    const b0B1Values = [];

    const largestX = dataSets[0].length;
    console.log('largestX: ', largestX);

    const B1Values = getB1Values(largestX);

    var lowestB0 = NOT_SET_YET;
    var lowestB1 = NOT_SET_YET;

    B1Values.forEach((B1Value) => {
        var B0 = calculateB0(dataSets, B1Value);

        if (lowestB0 === NOT_SET_YET || (B0 < lowestB0)) {
            lowestB0 = B0;
            lowestB1 = B1Value;
        }

        b0B1Values.push({b0: B0, b1: B1Value});
    });

    const lowestB0B1 = {
        lowestB0,
        lowestB1,
        b0b1: b0B1Values,
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
        ctr += 1;//.25;
    }

    return B1Values;
}

module.exports.demoSingleVariableLinearRegression = demoSingleVariableLinearRegression;