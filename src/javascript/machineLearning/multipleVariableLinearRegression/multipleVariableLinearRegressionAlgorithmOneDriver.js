const dataSetSource = require('./data');
const ins = require('util');

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    if (dataSetNumber === 1) {
        singleParameter(dataSetSource.getGradientDescentDataSetOne()[0]);
    } else if (dataSetNumber === 2) {
        singleParameter(dataSetSource.getGradientDescentDataSetTwo()[0]);
    } else if (dataSetNumber === 3) {
        multiParameter( dataSetSource.getGradientDescentDataSetThree()[0]);
    }

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}

function singleParameter(dataSet) {
    console.log('inside singleParameter()');

    const sumX1y = calculateSumXY(dataSet, true);  //modify to handle one parameter
    const sumX2Squared = calculateSumOfSquares(dataSet, true, false);  //uss
    const b1 = sumX1y/sumX2Squared;
    const yMean = calculateMean(dataSet, false, true);
    const x1Mean = calculateMean(dataSet, true, false);
    const a = yMean - b1 * x1Mean;

    for(let i=0; i<dataSet.length; i++) {
        const curDataSet = dataSet[i];

        if (i>0) {
            const predictedYValue = a + b1 * curDataSet.x1;
            console.log('currentDataSet: ', curDataSet);
            console.log('predictedYValue: ', predictedYValue);
        }
    }
}
function multiParameter(dataSet) {
    console.log('inside multiParameter()');

    const sumX2Squared = calculateSumOfSquares(dataSet, false, false);  //uss
    const sumX1y = calculateSumXY(dataSet, true);
    const sumX1X2 = calculateSumX1X2(dataSet);
    const sumX2Y = calculateSumX2Y(dataSet);
    const sumX1Squared = calculateSumOfSquares(dataSet, true, false); //uss
    const yMean = calculateMean(dataSet, false, true);
    const x1Mean = calculateMean(dataSet, true, false);
    const x2Mean = calculateMean(dataSet, false, false);

    const b1 = ((sumX2Squared*sumX1y) - (sumX1X2*sumX2Y))/((sumX1Squared*sumX2Squared)-Math.pow(sumX1X2, 2));
    const b2 = ((sumX1Squared*sumX2Y)-(sumX1X2*sumX1y))/((sumX1Squared*sumX2Squared)-Math.pow(sumX1X2, 2));
    const a = yMean - b1 * x1Mean - b2 * x2Mean;

    for(let i=0; i<dataSet.length; i++) {
        const curDataSet = dataSet[i];

        if (i>0) {
            const predictedYValue = a + b1 * curDataSet.x1 + b2 * curDataSet.x2;
            console.log('currentDataSet: ', curDataSet);
            console.log('predictedYValue: ', predictedYValue);
        }
    }
}

// used in both single and two parameter linear regression
function calculateSumXY(dataSet, isX1) {
    console.log('inside calculateSumXY()');

    let total = 0;
    let sumX = 0;
    let sumY = 0;
    const recordCount = getRecordCount(dataSet);

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        console.log('curDataSetItem: ', curDataSetItem);

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
    console.log('inside calculateMean()');

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