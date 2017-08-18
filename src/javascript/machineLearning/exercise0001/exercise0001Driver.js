var trainingSetRef = require('./trainingSet');
var perceptronTrainingSetRef = require('./trainingSetPerceptron');
var trainRef = require('./train');

function demoExercise0001() {
    console.log('inside demoExercise0001()');

    runBasicPerceptron();
    runHouse();
}

function runBasicPerceptron() {
    console.log('inside runBasicPerceptron()');

    console.log('getting training sets...');
    var perceptronTrainingSets = perceptronTrainingSetRef.getTrainingSetWholeNumbers();
    perceptronTrainingSets.forEach((perceptronTrainingSet) => console.log(perceptronTrainingSet));

    console.log('starting to train...');
    var weights = trainRef.train(perceptronTrainingSets);
    weights.forEach((weight) => console.log('weight: ', weight));
    console.log('done training!');

    console.log('testing run sets...');
    perceptronTrainingSets.forEach(function(perceptronTrainingSet) {
        var output = trainRef.run(perceptronTrainingSet, weights);

        if(output === 1) {
            console.log('match found:');
            console.log(perceptronTrainingSet);
            console.log('output: ' + output);
        }
    });

    console.log('done running!');
}
function runHouse() {
    console.log('getting training sets...');
    var trainingSets = trainingSetRef.getTrainingSet();

    console.log('updating training sets...');
    var updatedTrainingSets = [];
    trainingSets.forEach(function(trainingSet) {
        var newTrainingSet = {
            bedrooms: trainingSet.bedrooms/10000,
            squareFeet: trainingSet.squareFeet/10000,
            expectedOutput: trainingSet.expectedOutput,
        };

        updatedTrainingSets.push(newTrainingSet)
    });

    updatedTrainingSets.forEach((updatedTrainingSet) => console.log(updatedTrainingSet));

    console.log('training...');
    var weights = trainRef.trainHouse(updatedTrainingSets);

    console.log('getting run sets...');
    var runSets = trainingSetRef.getRunSet();

    console.log('updating run sets...');
    var updatedRunSets = [];
    runSets.forEach(function(runSet) {
        var newRunSet = {
            bedrooms: runSet.bedrooms/10000,
            squareFeet: runSet.squareFeet/10000,
            expectedOutput: runSet.expectedOutput,
        };

        updatedRunSets.push(newRunSet)
    });

    updatedRunSets.forEach(function(runSet) {
        var output = trainRef.runHouse(runSet, weights);

        if(output === 1) {
            console.log('match found:');
            console.log(runSet);
            console.log('output: ' + output);
        }
    });

    console.log('done running!');
}

module.exports.demoExercise0001 = demoExercise0001;