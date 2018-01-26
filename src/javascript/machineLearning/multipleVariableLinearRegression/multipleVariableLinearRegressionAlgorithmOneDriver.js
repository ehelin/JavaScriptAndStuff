const dataSetSource = require('./data');

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    var dataSets = null;

    if (dataSetNumber === 1) {
        dataSets = dataSetSource.getGradientDescentDataSetOne();
        linearRegressionCoefficientCalculation(dataSets);
    } else if (dataSetNumber === 2) {
        dataSets = dataSetSource.getGradientDescentDataSetTwo();
    }

    // if (dataSetNumber === 1) {
    //     simpleLinearRegressionCoefficientCalculation();
    // }

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}
function linearRegressionCoefficientCalculation(dataSets) {
    const coefficients = calculateSimpleLinearRegressionCoefficients(dataSets[0]);

    makePrediction(coefficients, dataSets[1]);
}
function calculateSimpleLinearRegressionCoefficients(dataSets) {
    let error = 0;   //is error cummulative or 0 for each iteration?
    const alpha = .01;  //aka learning rate

    const coefficients = getCoefficientArray(dataSets);

    let interactionCnt = 2;
    while(true) {

        if (interactionCnt>22) {
            break;
        }

        for(let outer=0; outer<dataSets.length; outer++) {
            const currentDataset = dataSets[outer];

            // TODO - handle multiple x1, x2, etc.
            var xNan = isNaN(parseInt(currentDataset.x1));
            var yNan = isNaN(parseInt(currentDataset.y));

            const currentCoefficientTotal = getPValue(coefficients);

            for(let inner=0; inner<coefficients.length; inner++) {

                if (!xNan && !yNan) {

                    // TODO - handle multiple x1, x2, etc.
                    let p = currentCoefficientTotal * currentDataset.x1;
                    error = p - currentDataset.y;

                    if (inner === 0) {
                        coefficients[inner] = coefficients[inner] - alpha * error;
                    } else {

                        // TODO - handle multiple x1, x2, etc.
                        coefficients[inner] = coefficients[inner] - alpha * error * currentDataset.x1;
                    }
                }

                interactionCnt++;
            }
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

    // TODO - make 'discoverable' by the number of x values (i.e. xCount=?)...how make BX inside json Object?
    coefficients.push(0);
    coefficients.push(0);
    //coefficients.push({B2: 0});
    //coefficients.push({B3: 0});

    return coefficients;
}
function makePrediction(coefficients, predictions) {
    console.log('coefficients: ', coefficients);

    predictions.forEach((prediction) => {
        console.log('prediction: ', prediction);

        // START HERE - how handle x1, x2, etc.?
        //const predictedValue = coefficients.B0
        // + coefficients.B1 * prediction.x1;
        // + coefficients.B2 * prediction.x2;
        // + coefficients.B3 * prediction.x3;

        const predictedValue = coefficients.B0 + coefficients.B1 * prediction.x;

        console.log('prediction for ' + prediction.x + ' is ' + predictedValue);
        console.log('');  //formatting
    });
}

module.exports.demoMultipleVariableLinearRegression = demoMultipleVariableLinearRegression;