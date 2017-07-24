var weights = [Math.random(), Math.random(), Math.random()];

function run(trainingSet) {
    var total = trainingSet.x * weights[0] + trainingSet.y * weights[1] + 1 * weights[2];
    console.log('total: ', total);
    var output = 0;
    if (total >= 0) {
        return 1;
    } else {
        return 0;
    }
}

function train(trainingSets) {
    var learningRate = 1;
    var totalError = 1;
    var ctr = 1;

    while(totalError > .2) {
        for(var i=0; i<trainingSets.length; i++) {
            var trainingSet = trainingSets[i];

            var total = trainingSet.x * weights[0] + trainingSet.y * weights[1] + 1 * weights[2];
            console.log('total: ', total);

            var output = 0;
            if (total >= 0) {
                output = 1;
            }

            var error = trainingSet.output - output;

            weights[0] += learningRate * error * trainingSet.x;
            weights[1] += learningRate * error * trainingSet.y;
            weights[2] += learningRate * error * 1;

            totalError = Math.abs(error);
        }

        ctr++;
    }

    return trainingSets;
}

module.exports.train = train;
module.exports.run = run;