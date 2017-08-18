function getRunSet() {
    var runSet = [];

    runSet.push({
        bedrooms: 3,
        squareFeet: 1998,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 3,
        squareFeet: 1995,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 2,
        squareFeet: 2000,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 0,
        squareFeet: 0,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 1,
        squareFeet: 1000,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 3,
        squareFeet: 3800,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 2,
        squareFeet: 3500,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 3,
        squareFeet: 4000,
        expectedOutput: 1,
    });

    return runSet;
}
function getTrainingSet() {
    var trainingSet = [];

    trainingSet.push({
        bedrooms: 2.8,
        squareFeet: 900,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 1,
        squareFeet: 1600,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 850,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 4,
        squareFeet: 2000,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 1800,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 800,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 1,
        squareFeet: 550,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 3,
        squareFeet: 2000,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 3,
        squareFeet: 4000,
        expectedOutput: 1,
    });

    return trainingSet;
}

module.exports.getTrainingSet = getTrainingSet;
module.exports.getRunSet = getRunSet;