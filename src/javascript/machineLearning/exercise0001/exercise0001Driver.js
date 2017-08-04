var trainingSetRef = require('./trainingSet');
var perceptronTrainingSetRef = require('./trainingSetPerceptron');
var trainRef = require('./train');

function demoExercise0001() {
    console.log('inside demoExercise0001()');

    //runBasicPerceptron();
    runHouse();
}

function runBasicPerceptron() {
    console.log('inside runBasicPerceptron()');

    console.log('getting training sets...');
    var perceptronTrainingSets = perceptronTrainingSetRef.getTrainingSet();

    console.log('starting to train...');
    perceptronTrainingSets = trainRef.train(perceptronTrainingSets);
    console.log('done training!');

    console.log('testing run sets...');
    perceptronTrainingSets.forEach(function(perceptronTrainingSet) {
        var output = trainRef.run(perceptronTrainingSet);

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
            bedrooms: trainingSet.bedrooms/100,
            squareFeet: trainingSet.squareFeet/100,
            neighborHood: trainingSet.neighborHood/3,
            salePrice: trainingSet.salePrice,
            myGuess: trainingSet.myGuess,
            price: trainingSet.price,
            expectedOutput: trainingSet.expectedOutput,
        };

        updatedTrainingSets.push(newTrainingSet)
    });

    console.log('training...');
    updatedTrainingSets = trainRef.trainHouse(updatedTrainingSets);

    console.log('getting run sets...');
    var runSets = trainingSetRef.getRunSet();

    console.log('updating run sets...');
    var updatedRunSets = [];
    runSets.forEach(function(runSet) {
        var newRunSet = {
            bedrooms: runSet.bedrooms/100,
            squareFeet: runSet.squareFeet/100,
            neighborHood: runSet.neighborHood/3,
            salePrice: runSet.salePrice,
            myGuess: runSet.myGuess,
            price: runSet.price,
            expectedOutput: runSet.expectedOutput,
        };

        updatedRunSets.push(newRunSet)
    });

    console.log('testing run sets...');
    updatedRunSets.forEach(function(runSet) {
        var output = trainRef.runHouse(runSet);

        if(output === 1) {
            console.log('match found:');
            console.log(runSet);
            console.log('output: ' + output);
        }
    });

    console.log('done running!');
}

module.exports.demoExercise0001 = demoExercise0001;