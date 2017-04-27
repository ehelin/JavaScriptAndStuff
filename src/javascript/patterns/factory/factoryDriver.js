var absObjFactoryRef = require('./AbsFactory');
var absObjRef = require('./AbsObject');

function demoFactoryPattern() {
    console.log('inside demoFactoryPattern');
    var names = ['A', 'B', 'C'];

    names.forEach((name) => {
        console.log('running factory for ' + name);

        var factory = buildFactory(name);
        factory.createObject();
    });
};

function buildFactory(name){
    var factory = Object.create(absObjFactoryRef.AbsFactory);

    factory.name = 'Object' + name + 'Factory';
    factory.createObject = function() {
        console.log(this.name + ' -> createObject() -> Object' + name + ' created');

        var obj = Object.create(absObjRef.Object);
        obj.name = 'Object' + name;

        return obj;
    };

    return factory;
}

module.exports.demoFactoryPattern = demoFactoryPattern;