var trainingSet = [];
var runSet = [];

townEnum = {
    SkidRow : 0,
    Normaltown : 1,
    Hipsterton : 2
};

function getRunSet() {
    //correct ones
    runSet.push({
        bedrooms: 3,
        squareFeet: 1998,
        neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        expectedOutput: 1,
    });
    trainingSet.push({
        bedrooms: 3.2,
        squareFeet: 1995,
        neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        expectedOutput: 1,
    });
    trainingSet.push({
        bedrooms: 2.8,
        squareFeet: 2000,
        neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        expectedOutput: 1,
    });

    //bottom
    runSet.push({
        bedrooms: 0,
        squareFeet: 0,
        neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 1,
        squareFeet: 1000,
        neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });

    //top
    runSet.push({
        bedrooms: 50,
        squareFeet: 30000,
        neighborHood: townEnum.Normaltown,
        salePrice: 250001,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    runSet.push({
        bedrooms: 56,
        squareFeet: 80000,
        neighborHood: townEnum.Normaltown,
        salePrice: 250001,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });

    return runSet;
}

function getTrainingSet() {
    trainingSet.push({
        bedrooms: 2.8,
        squareFeet: 2002,
        neighborHood: townEnum.Normaltown,
        salePrice: 250001,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 4,
        squareFeet: 2200,
        neighborHood: townEnum.Normaltown,
        salePrice: 255000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 850,
        neighborHood: townEnum.Normaltown,
        salePrice: 150000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 1800,
        neighborHood: townEnum.Normaltown,
        salePrice: 245000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 1800,
        neighborHood: townEnum.Normaltown,
        salePrice: 245000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 2,
        squareFeet: 800,
        neighborHood: townEnum.Hipsterton,
        salePrice: 300000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 1,
        squareFeet: 550,
        neighborHood: townEnum.Normaltown,
        salePrice: 78000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 4,
        squareFeet: 2000,
        neighborHood: townEnum.SkidRow,
        salePrice: 150000,
        myGuess: 0,
        price: 0,
        expectedOutput: 0,
    });
    trainingSet.push({
        bedrooms: 3.2,
        squareFeet: 2000,
        neighborHood: townEnum.Normaltown,
        salePrice: 250000,
        myGuess: 0,
        price: 0,
        expectedOutput: 1,
    });
    trainingSet.push({
        bedrooms: 3,
        squareFeet: 1998,
        neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        expectedOutput: 1,
    });

    return trainingSet;
}

module.exports.getTrainingSet = getTrainingSet;
module.exports.townEnum = townEnum;
module.exports.getRunSet = getRunSet;