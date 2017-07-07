var clientRef = require('./Client');
var absFactoryRef = require('./AbsFactory');
var absObjectXRef = require('./AbsObjectX');

function demoAbstractFactoryDriver() {
    console.log('inside demoAbstractFactoryDriver');

    var client = initializeClient();

    client.objectA.writeState();
    client.objectB.writeState();
    client.objectC.writeState();
}

function initializeFactory() {
    console.log('inside initializeFactory()');

    var factory = Object.create(absFactoryRef.AbsFactory);

    factory.makeObjectA = function() {
        var object = Object.create(absObjectXRef.AbsObjectX);
        object.name = 'ObjectA';
        object.property = 'ObjectAPropetyValue';
        object.writeState = function() {
            console.log(this.name + ', property: ' + this.property);
        };

        return object;
    };

    factory.makeObjectB = function() {
        var object = Object.create(absObjectXRef.AbsObjectX);
        object.name = 'ObjectB';
        object.property = 'ObjectBPropetyValue';
        object.writeState = function() {
            console.log(this.name + ', property: ' + this.property);
        };

        return object;
    };

    factory.makeObjectC = function() {
        var object = Object.create(absObjectXRef.AbsObjectX);
        object.name = 'ObjectC';
        object.property = 'ObjectCPropetyValue';
        object.writeState = function() {
            console.log(this.name + ', property: ' + this.property);
        };

        return object;
    };

    return factory;
}

function initializeClient() {
    console.log('inside initializeClient()');

    var client = Object.create(clientRef.Client);

    client.factory = initializeFactory();

    client.objectA = client.factory.makeObjectA();
    client.objectB = client.factory.makeObjectB();
    client.objectC = client.factory.makeObjectC();

    return client
}

module.exports.demoAbstractFactoryDriver = demoAbstractFactoryDriver;