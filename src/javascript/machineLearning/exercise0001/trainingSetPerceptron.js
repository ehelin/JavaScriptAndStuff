var trainingSet = [];

function getTrainingSet() {
    trainingSet.push({
        x: 0,
        y: 0,
        output: 0,
    });
    trainingSet.push({
        x: 1,
        y: 0,
        output: 1,
    });
    trainingSet.push({
        x: 0,
        y: 1,
        output: 0,
    });
    trainingSet.push({
        x: 1,
        y: 1,
        output: 0,
    });

    return trainingSet;
}

module.exports.getTrainingSet = getTrainingSet;