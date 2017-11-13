function makePrediction(x, B0, B1, output) {
    if (output) {
        console.log('Prediction for x: ', x);
        console.log('Prediction for B0: ', B0);
        console.log('Prediction for B1: ', B1);
    }

    const y = B0 + B1 * x;

    if (output) {
        console.log('Predicted y value: ', y);
    }

    return y;
}

module.exports.makePrediction = makePrediction;