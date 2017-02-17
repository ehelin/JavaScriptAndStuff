var aComplexObject = require('./data/aReallyComplicatedObject');

function Destructuring () {

    this.simpleDestructuring = function () {
        const myObject =  {
            propertyOne: 1,
            propertyTwo: 'property two value',
            propertyThree: 'property three value',
            propertyFour: 'property four value',
        };

        const {propertyOne, propertyFour} = myObject;

        console.log('Simple Destructuring -------');
        console.log(propertyOne);
        console.log(propertyFour);
        console.log('');
    };

    this.nestedDestructuring = function() {
        const  {  anotherRootProperty: propertyOne,multiLevelNestedProperty:
            {nestLevelOneNest: {nestLevelTwoNest: {nestLevelThreeNest: { nestLevelFourNest: {
                nestLevelFiveNest: {nestLevelSixNest: {nestLevelSixProperty: propertyTwo,
                    nestLevelSevenNest: {nestLevelEightNest:
                        {nestLevelEightProperty: propertyThree,},
                    },},},},},},},}} = aComplexObject.aReallyComplicatedObject;

        console.log('Nested Destructing ----------');
        console.log(propertyOne);
        console.log(propertyTwo);
        console.log(propertyThree);
        console.log('');
    };
}

module.exports.Destructuring = Destructuring;