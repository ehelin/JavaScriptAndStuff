var trainingSet = [];

townEnum = {
    SkidRow : 0,
    Normaltown : 1,
    Hipsterton : 2
};

function getTrainingSet() {
    trainingSet.push({
        //bedrooms: 0,
        //squareFeet: 0,
        bedrooms: 2.8/100,
        squareFeet: 2002/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 250001,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 0,
        //squareFeet: 1,
        bedrooms: 4/100,
        squareFeet: 2200/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 255000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 0,
        //squareFeet: 0,
        bedrooms: 2/100,
        squareFeet: 850/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 150000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 1,
        //squareFeet: 1,
        bedrooms: 2/100,
        squareFeet: 1800/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 245000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 1,
        //squareFeet: 0,
        bedrooms: 3/100,
        squareFeet: 1998/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 249990,
        myGuess: 0,
        price: 0,
        isCorrect: 1,
    });
    trainingSet.push({
        //bedrooms: 1,
        //squareFeet: 1,
        bedrooms: 2/100,
        squareFeet: 1800/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 245000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 1,
        //squareFeet: 1,
        bedrooms: 2/100,
        squareFeet: 800/100,
        //neighborHood: townEnum.Hipsterton,
        salePrice: 300000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 0,
        //squareFeet: 1,
        bedrooms: 1/100,
        squareFeet: 550/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 78000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 1,
        //squareFeet: 1,
        bedrooms: 4/100,
        squareFeet: 2000/100,
        //neighborHood: townEnum.SkidRow,
        salePrice: 150000,
        myGuess: 0,
        price: 0,
        isCorrect: 0,
    });
    trainingSet.push({
        //bedrooms: 1,
        //squareFeet: 0,
        bedrooms: 3.2/100,
        squareFeet: 2000/100,
        //neighborHood: townEnum.Normaltown,
        salePrice: 250000,
        myGuess: 0,
        price: 0,
        isCorrect: 1,
    });

    return trainingSet;
}

module.exports.getTrainingSet = getTrainingSet;
module.exports.townEnum = townEnum;