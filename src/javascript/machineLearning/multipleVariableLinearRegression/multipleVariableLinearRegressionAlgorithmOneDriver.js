const dataSetSource = require('./data');
const ins = require('util');

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    if (dataSetNumber === 1) {
        singleParameter(dataSetSource.getGradientDescentDataSetOne());
    } else if (dataSetNumber === 2) {
        singleParameter(dataSetSource.getGradientDescentDataSetTwo());
    } else if (dataSetNumber === 3) {
        multiParameter( dataSetSource.getGradientDescentDataSetThree());
    } else if (dataSetNumber === 4) {
        multiParameter( dataSetSource.getGradientDescentDataSetFour());
    }

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}

function singleParameter(dataSet) {
    const sumX1y = calculateSumXY(dataSet[0], true);  //modify to handle one parameter
    const sumX2Squared = calculateSumOfSquares(dataSet[0], true, false);  //uss
    const b1 = sumX1y/sumX2Squared;
    const yMean = calculateMean(dataSet[0], false, true);
    const x1Mean = calculateMean(dataSet[0], true, false);
    const a = yMean - b1 * x1Mean;

    const dataSetForPredictions = dataSet[1];
    for(let i=0; i<dataSetForPredictions.length; i++) {
        const curDataSet = dataSetForPredictions[i];

        if (i>0) {
            const predictedYValue = a + b1 * curDataSet.x1;
            console.log('currentDataSet: ', curDataSet);
            console.log('predictedYValue: ', predictedYValue);
        }
    }
}
function multiParameter(dataSet) {
    const sumX2Squared = calculateSumOfSquares(dataSet[0], false, false);  //uss
    const sumX1y = calculateSumXY(dataSet[0], true);
    const sumX1X2 = calculateSumX1X2(dataSet[0]);
    const sumX2Y = calculateSumX2Y(dataSet[0]);
    const sumX1Squared = calculateSumOfSquares(dataSet[0], true, false); //uss
    const yMean = calculateMean(dataSet[0], false, true);
    const x1Mean = calculateMean(dataSet[0], true, false);
    const x2Mean = calculateMean(dataSet[0], false, false);

    const b1 = ((sumX2Squared*sumX1y) - (sumX1X2*sumX2Y))/((sumX1Squared*sumX2Squared)-Math.pow(sumX1X2, 2));
    const b2 = ((sumX1Squared*sumX2Y)-(sumX1X2*sumX1y))/((sumX1Squared*sumX2Squared)-Math.pow(sumX1X2, 2));
    const a = yMean - b1 * x1Mean - b2 * x2Mean;

    console.log('b1: ', b1);
    console.log('b2: ', b2);

    const dataSetForPredictions = dataSet[1];
    for(let i=0; i<dataSetForPredictions.length; i++) {
        const curDataSet = dataSetForPredictions[i];

        if (i>0 && curDataSet.xCount === -1) {
            const predictedYValue = a + b1 * curDataSet.x1 + b2 * curDataSet.x2;

            console.log('currentDataSet: ', curDataSet);
            console.log('predictedYValue: ', predictedYValue);
        }
    }
}

// used in both single and two parameter linear regression
function calculateSumXY(dataSet, isX1) {
    let total = 0;
    let sumX = 0;
    let sumY = 0;
    const recordCount = getRecordCount(dataSet);

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let xValue = 0;

            if (isX1) {
                xValue = curDataSetItem.x1;
            } else {
                xValue = curDataSetItem.x2;
            }

            sumX += xValue;
            sumY += curDataSetItem.y;

            xValue = xValue * curDataSetItem.y;

            total += xValue;
        }
    }

    const finalTotal = total - ((sumX * sumY)/recordCount);

    return finalTotal;
}
function calculateSumOfSquares(dataSet, isX1, isY) {
    let total = 0;
    const xValuesSquared = [];

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value;

            if (isX1) {
                value = curDataSetItem.x1;
            } else if (isY) {
                value = curDataSetItem.y;
            } else {
                value = curDataSetItem.x2
            }

            total += value;
        }
    }

    const n = dataSet.length-1;
    const mean = total/n;

    let squaredTotal = 0;
    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value = 0;

            if (isX1) {
                value = curDataSetItem.x1;
            } else if (isY) {
                value = curDataSetItem.y;
            } else {
                value = curDataSetItem.x2
            }

            value = value - mean;
            value = Math.pow(value, 2);
            squaredTotal += value;
        }
    }

    return squaredTotal;
}
function calculateMean(dataSet, isX1, isY) {
    const total = calculateTotal(dataSet, isX1, isY, 0, false);
    const recordCount = getRecordCount(dataSet);
    const mean = total/recordCount;

    return mean;
}

// used in two parameter linear regression
function calculateSumX1X2(dataSet) {
    let total = 0;
    let sumX1 = 0;
    let sumX2 = 0;
    const recordCount = getRecordCount(dataSet);

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            sumX1 += curDataSetItem.x1;
            sumX2 += curDataSetItem.x2;

            let value = curDataSetItem.x1 * curDataSetItem.x2;

            total += value;
        }
    }

    const finalTotal = total - ((sumX1 * sumX2)/recordCount);

    return finalTotal;
}
function calculateSumX2Y(dataSet) {
    let total = 0;
    let sumY = 0;
    let sumX2 = 0;
    const recordCount = getRecordCount(dataSet);

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            sumY += curDataSetItem.y;
            sumX2 += curDataSetItem.x2;

            let value = curDataSetItem.y * curDataSetItem.x2;

            total += value;
        }
    }

    const finalTotal = total - ((sumY * sumX2)/recordCount);

    return finalTotal;
}
function getRecordCount(dataSet) {
    const recordCount = dataSet.length-1;  // -1 for labels

    return recordCount;
}
function calculateTotal(dataSet, isX1, isY, mean, useMean) {
    let total = 0;

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value = 0;

            if (isX1) {
                value = prepareNumbers(curDataSetItem.x1, useMean, mean);
                value = prepareNumbers(curDataSetItem.x1, useMean, mean);
            } else if (isY) {
                value = prepareNumbers(curDataSetItem.y, useMean, mean);
                value = curDataSetItem.y;
            } else {
                value = prepareNumbers(curDataSetItem.x2, useMean, mean);
            }

            total += value;
        }
    }

    return total;
}
function prepareNumbers(value, useMean, mean) {
    let preparedNumber = 0;

    if (useMean) {
        preparedNumber = Math.abs(value-mean);
    } else {
        preparedNumber = value;
    }

    return preparedNumber;
}

module.exports.demoMultipleVariableLinearRegression = demoMultipleVariableLinearRegression;