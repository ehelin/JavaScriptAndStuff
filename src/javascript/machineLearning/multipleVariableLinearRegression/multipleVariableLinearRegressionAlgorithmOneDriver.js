const dataSetSource = require('./data');
const ins = require('util');

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    if (dataSetNumber === 1) {
        singleParameter(dataSetSource.getGradientDescentDataSetOne());
    } else if (dataSetNumber === 2) {
        singleParameter(dataSetSource.getGradientDescentDataSetTwo());
    } else if (dataSetNumber === 3) {
        twoParameter( dataSetSource.getGradientDescentDataSetThree());
    } else if (dataSetNumber === 4) {
        twoParameter( dataSetSource.getGradientDescentDataSetFour());
    } else if (dataSetNumber === 5) {
        threeParameter( dataSetSource.getGradientDescentDataSetFive());
    }

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}

function singleParameter(dataSet) {
    const sumX1y = calculateSumXY(dataSet[0], true, false);
    const sumX2Squared = calculateSumOfSquares(dataSet[0], true, false, false);  //uss
    const b1 = sumX1y/sumX2Squared;
    const yMean = calculateMean(dataSet[0], false, true, false);
    const x1Mean = calculateMean(dataSet[0], true, false, false);
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
function twoParameter(dataSet) {
    const sumX2Squared = calculateSumOfSquares(dataSet[0], false, false, false);  //uss
    const sumX1y = calculateSumXY(dataSet[0], true, false);
    //const sumX1X2 = calculateSumX1X2X3(dataSet[0], false);
    const sumX2Y = calculateSumX2Y(dataSet[0]);
    const sumX1Squared = calculateSumOfSquares(dataSet[0], true, false, false); //uss
    const yMean = calculateMean(dataSet[0], false, true, false);
    const x1Mean = calculateMean(dataSet[0], true, false, false);
    const x2Mean = calculateMean(dataSet[0], false, false, false);
    const sumX1X2 = calculateSumX1X2X3(dataSet[0], false);
    const sumX1X2Squared = Math.pow(sumX1X2, 2);

    console.log('sumX1X2Squared: ', sumX1X2Squared);
    //console.log('sumX2Y: ', sumX2Y);

    const denominator = ((sumX1Squared * sumX2Squared) - sumX1X2Squared);
    console.log('denominator: ', denominator);

    const numeratorB1Left = sumX2Squared*sumX1y;
    const numeratorB1Right = sumX1X2*sumX2Y;

    console.log('numeratorB1Left: ', numeratorB1Left);
    console.log('numeratorB1Right: ', numeratorB1Right);

    const b1 = (numeratorB1Left-numeratorB1Right)/denominator;

    const numeratorB2Left = sumX1Squared*sumX2Y;
    const numeratorB2Right = sumX1X2*sumX1y;

    console.log('numeratorB2Left: ', numeratorB2Left);
    console.log('numeratorB2Right: ', numeratorB2Right);

    const b2 = (numeratorB2Left-numeratorB2Right)/denominator;
    const a = yMean - b1 * x1Mean - b2 * x2Mean;

    console.log('b1: ', b1);
    console.log('b2: ', b2);

    // const dataSetForPredictions = dataSet[1];
    // for(let i=0; i<dataSetForPredictions.length; i++) {
    //     const curDataSet = dataSetForPredictions[i];
    //
    //     if (i>0 && curDataSet.xCount === -1) {
    //         const predictedYValue = a + b1 * curDataSet.x1 + b2 * curDataSet.x2;
    //
    //         console.log('currentDataSet: ', curDataSet);
    //         console.log('predictedYValue: ', predictedYValue);
    //     }
    // }
}
function threeParameter(dataSet) {
    const sumX3Squared = calculateSumOfSquares(dataSet[0], false, true, false);   //uss
    const sumX2Squared = calculateSumOfSquares(dataSet[0], false, false, false);  //uss
    const sumX1Squared = calculateSumOfSquares(dataSet[0], true, false, false);    //uss

    const x1Mean = calculateMean(dataSet[0], true, false, false);
    const x2Mean = calculateMean(dataSet[0], false, false, false);
    const x3Mean = calculateMean(dataSet[0], false, false, true);
    const yMean = calculateMean(dataSet[0], false, true, false);

    const sumX1y = calculateSumXY(dataSet[0], true, false);
    const sumX2y = calculateSumXY(dataSet[0], false, false);
    const sumX3y = calculateSumXY(dataSet[0], false, true);

    const sumX1X2X3 = calculateSumX1X2X3(dataSet[0], true);
    const sumX1X2X3Squared = Math.pow(sumX1X2X3, 2);

    // // Start problem area -----------------------------------------
    // const sumX1X2 = calculateSumX1X2X3(dataSet[0], false);
    // const sumX1X2Squared = Math.pow(sumX1X2, 2);
    //
    // console.log('sumX2Squared: ', sumX2Squared);
    // console.log('sumX1Squared: ', sumX1Squared);
    // console.log('sumX1y: ', sumX1y);
    // console.log('sumX2y: ', sumX2y);
    // console.log('sumX1X2: ', sumX1X2);
    // console.log('sumX1X2Squared: ', sumX1X2Squared);
    //
    // const denominator = ((sumX1Squared * sumX2Squared) - sumX1X2Squared);
    // console.log('denominator: ', denominator);
    //
    // const numeratorB1Left = sumX2Squared * sumX1y;
    // const numeratorB1Right = sumX1X2 * sumX2y;
    //
    // console.log('numeratorB1Left: ', numeratorB1Left);
    // console.log('numeratorB1Right: ', numeratorB1Right);
    //
    // const b1 = (numeratorB1Left - numeratorB1Right)/denominator;
    //
    // const numeratorB2Left = sumX1Squared * sumX2y;
    // const numeratorB2Right = sumX1X2 * sumX1y;
    //
    // console.log('numeratorB2Left: ', numeratorB2Left);
    // console.log('numeratorB2Right: ', numeratorB2Right);
    //
    // const b2 = (numeratorB2Left - numeratorB2Right)/denominator;
    // //const b3 = (sumX2Squared * sumX1Squared * sumX3y) - (sumX1X2X3 * sumX1y * sumX2y)/denominator;
    // // End problem area -------------------------------------------


    // Start problem area -----------------------------------------
    const denominator = ((sumX1Squared * sumX2Squared * sumX3Squared) - sumX1X2X3Squared);

    const b1 = ((sumX3Squared * sumX2Squared * sumX1y) - (sumX1X2X3 * sumX2y * sumX3y))/denominator;
    const b2 = ((sumX3Squared * sumX1Squared * sumX2y) - (sumX1X2X3 * sumX1y * sumX3y))/denominator;
    const b3 = ((sumX2Squared * sumX1Squared * sumX3y) - (sumX1X2X3 * sumX1y * sumX2y))/denominator;
    // // End problem area -------------------------------------------

    console.log('b1: ', b1);
    console.log('b2: ', b2);
    console.log('b3: ', b3);

    //const a = yMean - b1 * x1Mean - b2 * x2Mean - b3 * x3Mean;
    // const dataSetForPredictions = dataSet[1];
    // for(let i=0; i<dataSetForPredictions.length; i++) {
    //     const curDataSet = dataSetForPredictions[i];
    //
    //     //if (i>0 && curDataSet.xCount === -1) {
    //         const predictedYValue = a + b1 * curDataSet.x1 + b2 * curDataSet.x2 + b3 * curDataSet.x3;
    //
    //         console.log('currentDataSet: ', curDataSet);
    //         console.log('predictedYValue: ', predictedYValue);
    //     //}
    // }
}

// used in both single and two and three parameter linear regression
function calculateSumXY(dataSet, isX1, isX3) {
    let total = 0;
    let sumX = 0;
    let sumY = 0;
    const recordCount = getRecordCount(dataSet);

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let xValue = getCurrentDataSetItem(curDataSetItem, isX1, isX3, false);

            sumX += xValue;
            sumY += curDataSetItem.y;

            xValue = xValue * curDataSetItem.y;

            total += xValue;
        }
    }

    const finalTotal = total - ((sumX * sumY)/recordCount);

    return finalTotal;
}
function calculateSumOfSquares(dataSet, isX1, isX3, isY) {
    let total = 0;
    const xValuesSquared = [];

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            const value = getCurrentDataSetItem(curDataSetItem, isX1, isX3, isY);
            total += value;
        }
    }

    const n = dataSet.length-1;
    const mean = total/n;

    let squaredTotal = 0;
    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value = getCurrentDataSetItem(curDataSetItem, isX1, isX3, isY);
            value = value - mean;
            value = Math.pow(value, 2);
            squaredTotal += value;
        }
    }

    return squaredTotal;
}
function calculateMean(dataSet, isX1, isY, isX3) {
    const total = calculateTotal(dataSet, isX1, isY, 0, false, isX3);
    const recordCount = getRecordCount(dataSet);
    const mean = total/recordCount;

    return mean;
}

// used in two parameter linear regression
function calculateSumX1X2X3(dataSet, hasX3) {
    let total = 0;
    let sumX1 = 0;
    let sumX2 = 0;
    let sumX3 = 0;
    const recordCount = getRecordCount(dataSet);

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            sumX1 += curDataSetItem.x1;
            sumX2 += curDataSetItem.x2;

            let value = 0;
            if (hasX3) {
                sumX3 += curDataSetItem.x3;
                value = curDataSetItem.x1 * curDataSetItem.x2 * curDataSetItem.x3;
            } else {
                value = curDataSetItem.x1 * curDataSetItem.x2;
            }


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
function calculateTotal(dataSet, isX1, isY, mean, useMean, isX3) {
    let total = 0;

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value = getCurrentDataSetItem(curDataSetItem, isX1, isX3, isY);
            value = prepareNumbers(value, useMean, mean);

            // if (isX1) {
            //     value = prepareNumbers(curDataSetItem.x1, useMean, mean);
            // } else if (isY) {
            //     value = prepareNumbers(curDataSetItem.y, useMean, mean);
            // } else if (isX3) {
            //     value = prepareNumbers(curDataSetItem.x3, useMean, mean);
            // } else {
            //     value = prepareNumbers(curDataSetItem.x2, useMean, mean);
            // }

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
function getCurrentDataSetItem(curDataSetItem, isX1, isX3, isY) {
    if (isX1) {
        value = curDataSetItem.x1;
    } else if (isY) {
        value = curDataSetItem.y;
    } else if (isX3) {
        value = curDataSetItem.x3;
    } else {
        value = curDataSetItem.x2;
    }
    //
    // console.log('curDataSetItem: ', curDataSetItem);
    // console.log('isX1: ', isX1);
    // console.log('isX3: ', isX3);
    // console.log('isY: ', isY);
    // console.log('value: ', value);
    //
    // throw new Error('blah');

    return value;
}

module.exports.demoMultipleVariableLinearRegression = demoMultipleVariableLinearRegression;