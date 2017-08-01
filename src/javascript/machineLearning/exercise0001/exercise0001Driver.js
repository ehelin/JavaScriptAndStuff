var trainingSetRef = require('./trainingSet');
var ref = require('./trainingSetPerceptron');
var trainRef = require('./train');

function demoExercise0001() {
    console.log('inside demoExercise0001()');

    //===================================================
    console.log('getting training sets...');
    //var trainingSets = ref.getTrainingSet();
    var trainingSets = trainingSetRef.getTrainingSet();

    console.log('training...');
    //trainingSets = trainRef.train(trainingSets);
    trainingSets = trainRef.trainHouse(trainingSets);

    console.log('done training!');

    trainingSets.forEach(function(trainingSet) {
        console.log('running: ', trainingSet);

        var output = trainRef.runHouse(trainingSet);
        console.log('expected: ' + trainingSet.isCorrect);
        console.log('actual: ' + output);

        console.log(''); //formatting
    });

    console.log('done running!');
    //===================================================


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