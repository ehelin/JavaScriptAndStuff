const dataSetSource = require('./data');

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    var dataSets = null;

    if (dataSetNumber === 1) {
        dataSets = dataSetSource.getGradientDescentDataSetOne();
    } else if (dataSetNumber === 2) {
        dataSets = dataSetSource.getGradientDescentDataSetTwo();
    } else if (dataSetNumber === 3) {
        dataSets = dataSetSource.getGradientDescentDataSetThree();
    }

    linearRegressionCoefficientCalculation(dataSets);

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}
function linearRegressionCoefficientCalculation(dataSets) {
    const coefficients = calculateSimpleLinearRegressionCoefficients(dataSets[0]);

    makePrediction(coefficients, dataSets[1]);
}
function calculateSimpleLinearRegressionCoefficients(dataSets) {
    console.log('inside calculateSimpleLinearRegressionCoefficients()');

    let error = 0;   //is error cummulative or 0 for each iteration?
    const alpha = .01;  //aka learning rate

    const coefficients = getCoefficientArray(dataSets);

    let interactionCnt = 2;
    let breakEarly = false;
    while(true) {

        if (interactionCnt>200) {
            break;
        }

        for(let outer=0; outer<dataSets.length; outer++) {
            const currentDataset = dataSets[outer];

            console.log('currentDataSet: ', currentDataset);

            //skip first row which are labels
            if (outer > 0) {
                const currentCoefficientTotal = getPValue(coefficients);

                let p = 0;
                for (let inner = 1; inner <= currentDataset.xCount; inner++) {
                    const currentX = currentDataset['x' + inner];
                    const coefficient = coefficients[inner];

                    console.log('currentX: ', currentX);
                    console.log(coefficient);

                    p += currentX * coefficient;
                }

                p += coefficients[0];
                console.log('p: ', p);

                error = p - currentDataset.y;
                console.log('error: ', error);

                // breakEarly = true;
                // break;

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