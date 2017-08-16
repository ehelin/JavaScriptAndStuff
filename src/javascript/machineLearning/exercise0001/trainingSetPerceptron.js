

//http://www.shodor.org/interactivate/activities/SimplePlot/

// 0.027999999999999997,20.02
// 0.04,22
// .02,8.5
// .02,18,
// .02,8
// .01,5.5
// .04,20
// .032,20
// .03,19.98

function getTrainingSetDecimals() {
    var trainingSet = [];

    trainingSet.push({
        x: .5,
        y: .89,
        expectedOutput: 0,
    });
    trainingSet.push({
        x: .98,
        y: 0,
        expectedOutput: 1,
    });
    trainingSet.push({
        x: .001,
        y: 1,
        expectedOutput: 0,
    });
    trainingSet.push({
        x: .523,
        y: .004,
        expectedOutput: 0,
    });

    return trainingSet;
}

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
module.exports.getTrainingSetDecimals = getTrainingSetDecimals;