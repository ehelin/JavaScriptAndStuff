var ref = require('./createObject');

function demoPrototypePattern() {
    console.log('inside demoPrototypePattern');

    var object = undefined;
    var ctr = 1;
    while(ctr <= 5) {
        object = createObject(object, ctr);

        console.log(object.getName());
        console.log(object.getProperty());
        console.log('');

        ctr++;
    }
};

function createObject(object, index) {
    var newObject = undefined;

    if (object === undefined){
        console.log('initial object ------');

        newObject = ref.createObject();
        newObject.index = index;
        newObject.name = 'Object' + index.toString();
        newObject.property = 'Property' + index.toString();
    } else {
        console.log('cloning object ------');
        newObject = object.clone(index);
    }

    return newObject;
}

module.exports.demoPrototypePattern = demoPrototypePattern;