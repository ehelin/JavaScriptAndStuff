var absFactoryRef = require('./AbsFactory');

var Client = {
    factory: undefined,
    objectA: undefined,
    objectB: undefined,
    objectC: undefined,
    setFactory: function(factory) {
        this.factory = factory;
    },
};

module.exports.Client = Client;