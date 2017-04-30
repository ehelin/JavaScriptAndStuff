var ref = require('./Object');

function createObject (){
    newObject = Object.create(ref.Object);

    return newObject;
};

module.exports.createObject = createObject;