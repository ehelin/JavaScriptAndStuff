var ref = require('./createObject');

var Object = {
    index: 0,
    name: undefined,
    property: undefined,
    getName: function() {
        return this.name;
    },
    getProperty: function() {
        return this.property;
    },
    clone: function(index) {
        var clonedObject = ref.createObject();

        clonedObject.index = index;
        clonedObject.name = this.name.substr(0, this.name.length-1) + index.toString();
        clonedObject.property = this.property.substr(0, this.property.length-1) + index.toString();
        clonedObject.getName = this.getName;
        clonedObject.getProperty = this.getProperty;

        return clonedObject;
    }
};

module.exports.Object = Object;