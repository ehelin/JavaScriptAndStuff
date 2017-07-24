var ref = require('./trainingSetPerceptron');
var trainRef = require('./train');

function demoPerceptron() {
    console.log('inside demoPerceptron()');

    console.log('getting training sets...');
    var trainingSets = ref.getTrainingSet();

    console.log('training...');
    trainingSets = trainRef.train(trainingSets);

    console.log('done training!');

    trainingSets.forEach(function(trainingSet) {
        console.log('running: ', trainingSet);

        var output = trainRef.run(trainingSet);
        console.log('expected: ' + trainingSet.output);
        console.log('actual: ' + output);

        console.log(''); //formatting
    });

    console.log('done running!');
}

module.exports.demoPerceptron = demoPerceptron;