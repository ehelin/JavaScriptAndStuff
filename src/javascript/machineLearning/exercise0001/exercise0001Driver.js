var trainingSetRef = require('./trainingSet');

function demoExercise0001() {
    console.log('inside demoExercise0001()');

    var trainingSet = trainingSetRef.getTrainingSet();

    console.log('training sets:');

    trainingSet.forEach((home) => console.log(home));

}

module.exports.demoExercise0001 = demoExercise0001;