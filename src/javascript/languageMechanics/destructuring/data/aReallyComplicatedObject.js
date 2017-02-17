const aReallyComplicatedObject = {
    rootProperty: 'a root property',
    multiLevelNestedProperty: {
        nestLevelOneProperty: 'a nested Level One Property',
        nestLevelOneNest: {
            nestLevelTwoProperty: 'a nested Level Two Property',
            nestLevelTwoNest: {
                nestLevelThreeProperty: 'a nested Level Three Property',
                nestLevelThreeNest: {
                    nestLevelThreeProperty: 'a nested Level Three Property',
                    nestLevelFourNest: {
                        nestLevelFourProperty: 'a nested Level Four Property',
                        nestLevelFiveNest: {
                            nestLevelFiveProperty: 'a nested Level Five Property',
                            anotherLevelFiveProperty: 'another Level Five Property',
                            nestLevelSixNest: {
                                nestLevelSixProperty: 'a nested Level Six Property',
                                nestLevelSevenNest: {
                                    nestLevelSevenProperty: 'a nested Level Seven Property',
                                    nestLevelEightNest: {
                                        nestLevelEightProperty: 'a nested Level Eight Property',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    anotherRootProperty: 'another root property',
};

module.exports.aReallyComplicatedObject = aReallyComplicatedObject;
