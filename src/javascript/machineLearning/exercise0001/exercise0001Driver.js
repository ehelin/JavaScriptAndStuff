var trainingSetRef = require('./trainingSet');
var ref = require('./trainingSetPerceptron');
var trainRef = require('./train');

function demoExercise0001() {
    console.log('inside demoExercise0001()');

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
            isCorrect: trainingSet.isCorrect,
        };

        updatedTrainingSets.push(newTrainingSet)
    });

    console.log('training...');
    updatedTrainingSets = trainRef.trainHouse(updatedTrainingSets);

    console.log('getting run sets...');
    var runSets = trainingSetRef.getTrainingSet();

    //runSets.forEach((runSet) => console.log(runSet));

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
            isCorrect: runSet.isCorrect,
        };

        updatedRunSets.push(newRunSet)
    });

    //updatedRunSets.forEach((runSet) => console.log(runSet));

    console.log('testing run sets...');
    updatedRunSets.forEach(function(runSet) {
        console.log('currentRunSet: ', runSet);

        var output = trainRef.runHouse(runSet);

        if(output === 1) {
            console.log('actual: ' + output);
            console.log(runSet);

            console.log(trainRef.showWeights());
        }
    });

    console.log('done running!');

    //----------------------------------------------------------
    // console.log('getting training sets...');
    // var trainingSets = trainingSetRef.getTrainingSet();
    //
    // console.log('starting to train...');
    // train(trainingSets);
    //
    // console.log('done training!');
    //
    // //console.log('training...');
    // // trainingSets.forEach((trainingSet) => {
    // //     //console.log('training set: ', trainingSet);
    // //     trainingSet = train(trainingSet);
    // //
    // //     return trainingSet;
    // // });
    //
    // // var totalDifferenceSquared = Math.pow(totalDifference, 2);
    // // var cost = totalDifference/trainingSets.length * 2;
    // //
    // // console.log('total difference: ', totalDifference);
    // // console.log('cost: ', cost);
    // //
    // // console.log('result:');
    // // trainingSets.forEach((trainingSet) => console.log( trainingSet));
}

//http://aass.oru.se/~lilien/ml/seminars/2007_02_01b-Janecek-Perceptron.pdf
//http://www.codingvision.net/miscellaneous/c-perceptron-tutorial
//https://medium.com/@ageitgey/machine-learning-is-fun-80ea3ec3c471

var bedRoomWeight = Math.random();
var squareFeetWeight = Math.random();
var neighBorWeight = Math.random();
var biasWeight = Math.random();  //bias
var totalDifference = 0.0;


function train(trainingSets) {
    var learningRate = 1;
    var totalError = 1;
    var ctr = 1;

    while(totalError > .2) {
        console.log('training iteration ' + ctr.toString());

        for(var i=0; i<trainingSets.length; i++) {
            var trainingSet = trainingSets[i];

            var bedrooms = trainingSet.bedrooms * bedRoomWeight;
            var squareFeet = trainingSet.squareFeet * squareFeetWeight;
            var neighborHood = trainingSet.neighborHood * neighBorWeight;
            var bias = 1 * biasWeight;

            var total = bedrooms + squareFeet + neighborHood + bias;

            var output = 0;
            if (total >= 0) {
                output = 1;
            }

            var error = trainingSet.output - output;

            bedRoomWeight = learningRate * error * bedrooms;
            squareFeetWeight = learningRate * error * squareFeet;
            neighBorWeight = learningRate * error * neighborHood;
            biasWeight = learningRate * error * 1;

            totalError = Math.abs(error);
        }

        ctr++;
    }

    return trainingSets;
}

module.exports.demoExercise0001 = demoExercise0001;