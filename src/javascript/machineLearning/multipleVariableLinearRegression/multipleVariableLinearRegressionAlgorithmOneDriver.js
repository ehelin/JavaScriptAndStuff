const dataSetSource = require('./data');

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    if (dataSetNumber === 1) {
        simpleLinearRegressionCoefficientCalculation();
    }

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}
function simpleLinearRegressionCoefficientCalculation() {
    let B0 = 0;
    let B1 = 0;
    let error = 0;   //is error cummulative or 0 for each iteration?
    const alpha = .01;  //aka learning rate

    let dataSets = dataSetSource.getGradientDescentDataSetOne();
    const coefficients = calculateSimpleLinearRegressionCoefficients(dataSets[0]);

    makePrediction(coefficients, dataSets[1]);
}
function makePrediction(coefficients, predictions) {
    console.log('coefficients: ', coefficients);

    predictions.forEach((prediction) => {
        console.log('prediction: ', prediction);

        const predictedValue = coefficients.B0 + coefficients.B1 * prediction.x;

        console.log('prediction for ' + prediction.x + ' is ' + predictedValue);
        console.log('');  //formatting
    });
}
function calculateSimpleLinearRegressionCoefficients(dataSets) {
    let B0 = 0;
    let B1 = 0;
    let error = 0;   //is error cummulative or 0 for each iteration?
    const alpha = .01;  //aka learning rate

    let ctr = 2;
    while(true) {

        if (ctr>22) {
            break;
        }

        for(let i=0; i<dataSets.length; i++) {
            const currentDataset = dataSets[i];

            var xNan = isNaN(parseInt(currentDataset.x));
            var yNan = isNaN(parseInt(currentDataset.y));

            if (!xNan && !yNan) {
                let p = B0 + B1 * currentDataset.x;
                error = p - currentDataset.y;

                B0 = B0 - alpha * error;
                B1 = B1 - alpha * error * currentDataset.x;

                ctr++;
            }
        }
    }

    return {
        B0,
        B1,
    }
}

module.exports.demoMultipleVariableLinearRegression = demoMultipleVariableLinearRegression;