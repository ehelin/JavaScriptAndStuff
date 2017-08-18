function getTrainingSetWholeNumbers() {
    var trainingSet = [];

    trainingSet.push({
        x: 0,
        y: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        x: 1,
        y: 0,
        expectedOutput: 1,
    });
    trainingSet.push({
        x: 0,
        y: 1,
        expectedOutput: 0,
    });
    trainingSet.push({
        x: 1,
        y: 1,
        expectedOutput: 0,
    });

    return trainingSet;
}

module.exports.getTrainingSetWholeNumbers = getTrainingSetWholeNumbers;