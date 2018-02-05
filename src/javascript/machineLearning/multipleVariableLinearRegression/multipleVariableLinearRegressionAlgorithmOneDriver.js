const dataSetSource = require('./data');
const ins = require('util');

// Sample data set - http://reliawiki.org/index.php/Multiple_Linear_Regression_Analysis (towards bottom of page)
// example - http://faculty.cas.usf.edu/mbrannick/regression/Reg2IV.html

function testProvidedFormula(dataSets) {
    console.log('inside testProvidedFormula()');

    for(let i=0; i<dataSets.length; i++) {
        if (i>0) {
            const currentDataSetItem = dataSets[i];

            const height = currentDataSetItem.x1;
            const age = currentDataSetItem.x2;

            const weight = -127.819907444769 + (.240274914264461*height) + (3.09004803935285*age);

            console.log('===========================');
            console.log('age: ', age);
            console.log('height: ', height);
            console.log('weight: ', weight);
        }
    }
}

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
        //testProvidedFormula(dataSets[0])
        linearRegressionCoefficientCalculation(dataSets);
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