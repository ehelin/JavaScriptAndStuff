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
function setUpSimpleArray() {
    return [1,2,3,4,5];
}
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}

module.exports.buildName = buildName;
module.exports.setUpObjectCollection = setUpObjectCollection;
module.exports.aComplexObjectArrayItem = aComplexObjectArrayItem;
module.exports.setUpSimpleArray = setUpSimpleArray;