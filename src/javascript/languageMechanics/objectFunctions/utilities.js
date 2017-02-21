function aComplexObjectArrayItem (propertyOneValue,
                                 propertyTwoValue,
                                 propertyThreeValue,
                                 propertyFourValue) {
    this.propertyOne = propertyOneValue;
    this.propertyTwo = propertyTwoValue;
    this.propertyThree = propertyThreeValue;
    this.propertyFour = propertyFourValue;
}
function setUpObjectCollection() {
    let complexObjectArr = [];

    let ctr = 0;
    while(ctr < 10){
        var myObject = new aComplexObjectArrayItem(ctr,
                                                 'propertyTwo ' + ctr.toString(),
                                                 'propertyThree ' + ctr.toString(),
                                                 'propertyFour ' + ctr.toString());
        complexObjectArr.push(myObject);

        ctr++;
    };

    return complexObjectArr;
};
function myEveryFunctionFive(aComplexObjectArrayItem) {
    return aComplexObjectArrayItem.propertyOne >= 5;
}
function myEveryFunctionNegativeOne(aComplexObjectArrayItem) {
    return aComplexObjectArrayItem.propertyOne >= -1;
}

function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}

module.exports.buildName = buildName;
module.exports.setUpObjectCollection = setUpObjectCollection;
module.exports.aComplexObjectArrayItem = aComplexObjectArrayItem;
module.exports.myEveryFunctionFive = myEveryFunctionFive;
module.exports.myEveryFunctionNegativeOne = myEveryFunctionNegativeOne;