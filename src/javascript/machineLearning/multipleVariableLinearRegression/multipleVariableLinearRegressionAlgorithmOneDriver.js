const dataSetSource = require('./data');
const ins = require('util');

// example reference
// 1) http://faculty.cas.usf.edu/mbrannick/regression/Reg2IV.html
// 2) https://www.khanacademy.org/math/probability/data-distributions-a1/summarizing-spread-distributions/a/calculating-standard-deviation-step-by-step
// 3) https://www.youtube.com/watch?v=W0IR9wF_KFQ
// 4) https://www.thoughtco.com/sum-of-squares-formula-shortcut-3126266 (found out how to calculate the sum of squares correctly here!!!)
// 5) http://cf.linnbenton.edu/mathsci/math/maurerv/upload/7.1%20Lecture%20Notes.pdf

// Start here - calculate ryx1 (reference #5) (get all of the numbers calculated inside the matrix)

// I know...refactor this mess...after it works
function calculateNeededValues(dataSet) {
    console.log('inside calculateSumSquare()');

    const sumX2Squared = calculateSumOfSquares(dataSet, false, false);  //uss
    const sumX1y = calculateSumXY(dataSet, true);
    const sumX1X2 = calculateSumX1X2(dataSet);
    const sumX2Y = calculateSumX2Y(dataSet);
    const sumX1Squared = calculateSumOfSquares(dataSet, true, false); //uss

    console.log('sumX2Squared: ', sumX2Squared);
    console.log('sumX1y: ', sumX1y);
    console.log('sumX1X2: ', sumX1X2);
    console.log('sumX2Y: ', sumX2Y);
    console.log('sumX1Squared: ', sumX1Squared);
    console.log('sumX2Squared: ', sumX2Squared);
    console.log('sumX1X2: ', sumX1X2);
    console.log('sumX1X2: ', sumX1X2);

    const param1 = sumX2Squared*sumX1y;
    const param2 = sumX1X2*sumX2Y;
    const param3 = sumX1Squared*sumX2Squared;
    const param4 = Math.pow(sumX1X2, 2);

    const b1 = (param1 - param2)/(param3-param4);
    console.log('b1: ', b1);

    const b2 = ((sumX1Squared*sumX2Y)-(sumX1X2*sumX1y))/((sumX1Squared*sumX2Squared)-(param4));
    console.log('b2: ', b2);

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

// start calculation throw away methods ------------------------

function getRecordCount(dataSet) {
    const recordCount = dataSet.length-1;  // -1 for labels

    return recordCount;
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
function calculateMean(dataSet, isX1, isY) {
    console.log('inside calculateMean()');

    const total = calculateTotal(dataSet, isX1, isY, 0, false);
    const recordCount = getRecordCount(dataSet);
    const mean = total/recordCount;

    // console.log('total: ', total);
    // console.log('recordCount: ', recordCount);
    // console.log('mean: ', mean);

    return mean;
}
function calculateFinalStandardDeviation(valueTotalMinusmean, dataSet) {
    const recordCount = getRecordCount(dataSet);

    valueTotalMinusmean = Math.pow(valueTotalMinusmean, 2);
    valueTotalMinusmean = valueTotalMinusmean/recordCount;
    valueTotalMinusmean = Math.sqrt(valueTotalMinusmean);

    return valueTotalMinusmean;
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
function getXTotal(isX1, dataSet) {
    let total = 0;

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let xValue = 0;

            if (isX1) {
                total += curDataSetItem.x1;
            } else {
                total += curDataSetItem.x2;
            }
        }
    }

    return total;
}
function getStandardDeviation(recordCount, dataSet, isX1, mean) {
    let sdTotal = 0;

    for(let i=0; i<=recordCount; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value = 0;

            if (isX1) {
                value = curDataSetItem.x1-mean;
            } else {
                value = curDataSetItem.x2-mean;
            }

            value = Math.pow(value, 2);
            sdTotal += value;
        }
    }
    sdTotal = sdTotal/recordCount;
    const standardDeviation = Math.sqrt(sdTotal);

    return standardDeviation;
}
function multiParameter(dataSets) {
    console.log('inside multiParameter()');

    calculateNeededValues(dataSets);

    // console.log('x1 -------------------------------------');
    // calculateSumSquare(dataSets, true);
    //
    // console.log('');
    // console.log('========================================');
    // console.log('');
    //
    // console.log('x2 -------------------------------------');
    // calculateSumSquare(dataSets, false);
}

// end calculation throw away methods ------------------------

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    var dataSets = null;

    if (dataSetNumber === 1) {
        dataSets = dataSetSource.getGradientDescentDataSetOne();
        linearRegressionCoefficientCalculation(dataSets);
    } else if (dataSetNumber === 2) {
        dataSets = dataSetSource.getGradientDescentDataSetTwo();
        linearRegressionCoefficientCalculation(dataSets);
    } else if (dataSetNumber === 3) {
        dataSets = dataSetSource.getGradientDescentDataSetThree();
        multiParameter(dataSets[0]);
    }

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}
function linearRegressionCoefficientCalculation(dataSets) {
    const coefficients = calculateSimpleLinearRegressionCoefficients(dataSets[0]);

    //makePrediction(coefficients, dataSets[1]);
}
function getPArray(dataSet) {
    const p = [];
    p.push(0);

    for(let i=0; i<dataSet[0].xCount; i++) {
        p.push(0);
    }

    return p;
}
function calculateSimpleLinearRegressionCoefficients(dataSets) {
    console.log('inside calculateSimpleLinearRegressionCoefficients()');

    const p = getPArray(dataSets);
    let error = 0;   //is error cummulative or 0 for each iteration?
    const alpha = .01;  //aka learning rate

    const coefficients = getCoefficientArray(dataSets);

    let interactionCnt = 2;
    let breakEarly = false;
    while(true) {

        if (interactionCnt>2) {
            break;
        }

        for(let outer=0; outer<dataSets.length; outer++) {
            const currentDataset = dataSets[outer];

            console.log('currentDataSet: ', currentDataset);

            //skip first row which are labels
            if (outer > 0) {
                const currentCoefficientTotal = getPValue(coefficients);

                for (let inner = 1; inner <= currentDataset.xCount; inner++) {
                    const currentX = currentDataset['x' + inner];
                    const coefficient = coefficients[inner];

                    p[inner] = currentX * coefficient;
                }

                let sumP = 0;
                for (let inner = 0; inner < p.length; inner++) {
                    sumP = sumP +  p[inner];
                }

                sumP += coefficients[0];
                //console.log('sumP: ', sumP);

                error = sumP - currentDataset.y;
                //console.log('error: ', error);

                let coefficientXValueTotals = 0;
                for(let inner=1; inner<=currentDataset.xCount; inner++) {
                    const currentX = currentDataset['x' + inner];

                    if (inner === 0) {
                        coefficients[inner] = coefficients[inner] - alpha * error;
                    } else {
                        coefficients[inner] = coefficients[inner] - alpha * error * currentX;
                    }
                }
            }

            console.log('coefficients: ', coefficients);
            console.log('p: ', p);

            if (breakEarly) {
                break;
            }

            interactionCnt++;
        }

        if (breakEarly) {
            break;
        }
    }

    return coefficients;
}
function getPValue(coefficients) {
    let curCoefficientTotal = 0;

    for(let pValCtr=0; pValCtr<coefficients.length; pValCtr++) {
        curCoefficientTotal += coefficients[pValCtr]
    }

    return curCoefficientTotal;
}
function getCoefficientArray(dataSets) {
    const coefficients = [];
    const numberOfCoefficients = dataSets[0].xCount;

    for(let i=0; i<=numberOfCoefficients; i++) {
        coefficients.push(0);
    }

    return coefficients;
}
function makePrediction(coefficients, predictions) {
    for(let outer=0; outer<predictions.length; outer++) {
        const curPrediction = predictions[outer];
        let predictionLabel = '';

        let coefficientXValueTotals = 0;
        for(let inner=1; inner<=curPrediction.xCount; inner++) {
            const currentX = curPrediction['x' + inner];

            coefficientXValueTotals += currentX * coefficients[inner];

            predictionLabel+= currentX + ',';
        }

        predictionLabel = predictionLabel.substring(0, predictionLabel.length-1); //remove last comma

        const predictedValue = coefficients[0] + coefficientXValueTotals;

        console.log('prediction for ' + predictionLabel + ' is ' + predictedValue);
        console.log('');  //formatting
    }
}

module.exports.demoMultipleVariableLinearRegression = demoMultipleVariableLinearRegression;