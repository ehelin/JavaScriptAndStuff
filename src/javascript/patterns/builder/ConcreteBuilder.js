var iBuilderRef = require('./IBulder');
var obRef = require('./ObjectPart');

var ConcreteBuilder = Object.create(iBuilderRef.IBuilder);

var ConcreteBuilder = {
    objectParts: [],
    ctr: 1,
    buildObjectPart: function() {
        console.log('inside buildObjectPart()');

        var object = Object.create(obRef.ObjectPart);
        object.name = 'Object' + this.ctr.toString();

        console.log('created object part');
        console.log(object);

        this.objectParts.push(object);
        this.ctr++;
    },
    getCompositeObject() {
        console.log('inside getCompositeObject()');

        var compositeObject = {};
        var coCtr = 0;
        this.objectParts.forEach((part) => {
            compositeObject[coCtr] = part;
            coCtr++;
        });

        return compositeObject;
    }
};

module.exports.ConcreteBuilder = ConcreteBuilder;