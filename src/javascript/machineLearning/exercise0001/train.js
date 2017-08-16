//var weights = [];

function runHouse(trainingSet, pWeights) {
    //console.log('inside runHouse()');

    // var total = trainingSet.bedrooms * pWeights[0]
    //                 + trainingSet.squareFeet * pWeights[1]
    //                     + trainingSet.neighborHood * pWeights[2]
    //                         + 1 * pWeights[3];

    var total = trainingSet.bedrooms * pWeights[0]
                    + trainingSet.squareFeet * pWeights[1]
                            + 1 * pWeights[2];

    console.log('total: ', total);

    var output = 0;
    if (total >= 0) {
        return 1;
    } else {
        return 0;
    }
}
function run(trainingSet, pWeights) {
    var total = trainingSet.x * pWeights[0] + trainingSet.y * pWeights[1] + 1 * pWeights[2];

    var output = 0;
    if (total >= 0) {
        return 1;
    } else {
        return 0;
    }
}

function trainHouse(trainingSets) {
    var learningRate = 1;
    var totalError = 1;
    var ctr = 1;

    //var weights = [Math.random(), Math.random(), Math.random(), Math.random()];
    var weights = [Math.random(), Math.random(), Math.random()];

    while(totalError > .2) {
        for(var i=0; i<trainingSets.length; i++) {
            var trainingSet = trainingSets[i];

            // var total = trainingSet.bedrooms * weights[0]
            //     + trainingSet.squareFeet * weights[1]
            //     + trainingSet.neighborHood * weights[2]
            //     + 1 * weights[3];

            var total = trainingSet.bedrooms * weights[0]
                + trainingSet.squareFeet * weights[1]
                + 1 * weights[2];

            var output = 0;
            if (total >= 0) {
                output = 1;
            }

            var error = trainingSet.expectedOutput - output;

            // weights[0] += learningRate * error * trainingSet.bedrooms;
            // weights[1] += learningRate * error * trainingSet.squareFeet;
            // weights[2] += learningRate * error * trainingSet.neighborHood;
            // weights[3] += learningRate * error * 1;

            weights[0] += learningRate * error * trainingSet.bedrooms;
            weights[1] += learningRate * error * trainingSet.squareFeet;
            weights[2] += learningRate * error * 1;

            totalError = Math.abs(error);
        }

        ctr++;
    }

    return weights;
}
function train(trainingSets) {
    var learningRate = 1;
    var totalError = 1;
    var ctr = 1;

    var weights = [Math.random(), Math.random(), Math.random()];

    while(totalError > .2) {
        for(var i=0; i<trainingSets.length; i++) {
            var trainingSet = trainingSets[i];

            var total = trainingSet.x * weights[0] + trainingSet.y * weights[1] + 1 * weights[2];

            var output = 0;
            if (total >= 0) {
                output = 1;
            }

            var error = trainingSet.expectedOutput - output;

            weights[0] += learningRate * error * trainingSet.x;
            weights[1] += learningRate * error * trainingSet.y;
            weights[2] += learningRate * error * 1;

            totalError = Math.abs(error);
        }

        ctr++;
    }

    return weights;
}

module.exports.train = train;
module.exports.run = run;
module.exports.runHouse = runHouse;
module.exports.trainHouse = trainHouse;