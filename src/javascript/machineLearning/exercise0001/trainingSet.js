var trainingSet = [];

function getTrainingSet() {
    trainingSet.push({
        bedrooms: 3,
        squareFeet: 2000,
        neighborHood: 'Normaltown',
        salePrice: 0,
        myGuess: 0,
    });

    trainingSet.push({
        bedrooms: 2,
        squareFeet: 800,
        neighborHood: 'Hipsterton',
        salePrice: 0,
        myGuess: 0,
    });

    trainingSet.push({
        bedrooms: 2,
        squareFeet: 850,
        neighborHood: 'Normaltown',
        salePrice: 0,
        myGuess: 0,
    });

    trainingSet.push({
        bedrooms: 1,
        squareFeet: 550,
        neighborHood: 'Normaltown',
        salePrice: 0,
        myGuess: 0,
    });

    trainingSet.push({
        bedrooms: 4,
        squareFeet: 2000,
        neighborHood: 'Skid Row',
        salePrice: 0,
        myGuess: 0,
    });

    return trainingSet;
}

module.exports.getTrainingSet = getTrainingSet;