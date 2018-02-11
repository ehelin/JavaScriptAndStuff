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

    // const sumYSquared = calculateSumOfSquares(dataSet, false);  //uss
    // const sumX2Squared = calculateSumOfSquares(dataSet, true);  //uss
    // const sumX1y = calculateSumXY(dataSet, true);

    //start here
    const rxy1 = calculateRCorrelationCoefficient(dataSet);

    // const sumX2y = calculateSumXY(dataSet, false);
    //
    // console.log('sumYSquared: ', sumYSquared);
    // console.log('sumX1y: ', sumX1y);
    // console.log('sumX2y: ', sumX2y);
    //
    // console.log('ryx1: ', rxy1);
    //
    // console.log('sumX2Squared: ', sumX2Squared);

    // start old ==============================================
    // const total = getXTotal(isX1, dataSet);
    // const mean = total/recordCount;
    // const standardDeviation = getStandardDeviation(recordCount, dataSet, isX1, mean);
    // const x2Total = calculateSumOfSquares(dataSet, isX1);  //uss
    // const sumX1X2 = calculateSumX1X2(dataSet, false);
    // const sumX1X2Squared = calculateSumX1X2(dataSet, true);

    // console.log('mean: ', mean);
    // console.log('total: ', total);
    // console.log('standardDeviation: ', standardDeviation);
    // console.log('x2Total: ', x2Total);
    // console.log('sumX1X2: ', sumX1X2);
    // console.log('sumX1X2Squared: ', sumX1X2Squared);
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

// TODO - did I do this right?
// https://www.khanacademy.org/math/probability/data-distributions-a1/summarizing-spread-distributions/a/calculating-standard-deviation-step-by-step
function calculateRCorrelationCoefficient(dataSet) {
    console.log('inside calculateRCorrelationCoefficient()');

    const xMeanTotal = -11.9
        + -6.9
       +  -13.9
       +  -1.9
        +   -3.9
        +  3.1
        +  1.1
        +  3.1
        +  6.1
        +  -11.9
        +  3.1
        +  -3.9
        +  -6.9
        +  3.1
        +  8.1
        +  8.1
        +  8.1
        +  13.1
        +  -1.9
        +  6.1;

    console.log('xMeanTotal: ', xMeanTotal);

    const x1Mean = calculateMean(dataSet, true, false);
    // const x2Mean = calculateMean(dataSet, false, false);
    // const yMean = calculateMean(dataSet, false, true);

    console.log('x1Mean: ', x1Mean);

    let x1TotalMinusMean = calculateTotal(dataSet, true, false, x1Mean, true);

    console.log('x1TotalMinusMean: ', x1TotalMinusMean);
    // let x2TotalMinusMean = calculateTotal(dataSet, false, false, x2Mean, true);
    // let yTotalMinusMean = calculateTotal(dataSet, false, true, yMean, true);
    //
    // const x1StandardDeviation = calculateFinalStandardDeviation(x1TotalMinusMean, dataSet);
    // const x2StandardDeviation = calculateFinalStandardDeviation(x2TotalMinusMean, dataSet);
    // const yStandardDeviation = calculateFinalStandardDeviation(yTotalMinusMean, dataSet);

    // console.log('x1StandardDeviation: ', x1StandardDeviation);
    // console.log('x2StandardDeviation: ', x2StandardDeviation);
    // console.log('yStandardDeviation: ', yStandardDeviation);
}

function calculateSumOfSquares(dataSet, isX) {
    let total = 0;
    const xValuesSquared = [];

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let value;

            if (isX) {
               value = curDataSetItem.x2;
            } else {
                value = curDataSetItem.y;
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

            if (isX) {
                value = curDataSetItem.x2;
            } else {
                value = curDataSetItem.y;
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
function calculateSumX1X2(dataSet, squareNumbers) {
    let total = 0;
    const xValuesSquared = [];

    for(let i=0; i<dataSet.length; i++) {
        const curDataSetItem = dataSet[i];

        if (i>0) {
            let xValue = curDataSetItem.x1 * curDataSetItem.x2;;
            total += xValue;
        }
    }

    if (squareNumbers){
        total = Math.pow(total, 2);
    }

    return total;
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