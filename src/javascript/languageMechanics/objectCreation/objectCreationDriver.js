function demoObjectCreation() {
    console.log('inside demoObjectCreation()');

    createObjectWithNew();
    createObjectWithObjectCreate();

}

var myObjectCreateObjectDefinition = {
    propertyOne: 'propertyOne',
    methodOne: function() {
        console.log('inside methodOne -> propertyOne: ' + this.propertyOne);
    }
};
function createObjectWithObjectCreate(){
    console.log('inside createObjectWithObjectCreate()');

    var myObjectCreateObject = Object.create(myObjectCreateObjectDefinition);
    myObjectCreateObject.methodOne();
}

function createObjectWithNew(){
    console.log('inside createObjectWithNew()');

    var myObject = new myObjectDefinition();
    myObject.methodOne()

}
function myObjectDefinition() {
    this.propertyOne = 'propertyOne';
    this.methodOne = function() {
        console.log('inside methodOne -> propertyOne: ' + this.propertyOne);
    }
}

module.exports.demoObjectCreation = demoObjectCreation;