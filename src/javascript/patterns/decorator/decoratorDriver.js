var baseRef = require('./AbsBase');
var baseDecoratorRef = require('./AbsDecoratorBase');

function demoDecoratorPattern() {
    console.log('inside demoDecoratorPattern()');

    var concreteBase = buildConcrete(null, 'ConcreteBase');
    var concreteDecoratorBase = buildConcrete(concreteBase, 'ConcreteDecoratorBase');

    concreteBase.methodOne();
    concreteBase.methodTwo();
    concreteDecoratorBase.methodOne();
    concreteDecoratorBase.methodTwo();
}

function buildConcrete(base, name) {
    var concrete = null;

    if (!base) {
        concrete = Object.create(baseRef.AbsBase);

        concrete.name = name;
        concrete.methodOne = function() {
            console.log(this.name + '.methodOne() called');
        };
        concrete.methodTwo = function() {
            console.log(this.name + '.methodTwo() called');
        };
    } else {
        concrete = Object.create(baseDecoratorRef.AbsDecoratorBase);

        concrete.name = name;
        concrete.base = base;
        concrete.methodOne = function() {
            console.log(this.name + '.methodOne() - do something before calling base.methodOne()');
            console.log(this.name + '.methodOne() calling base.methodOne()');
            this.base.methodOne();
        };
        concrete.methodTwo = function() {
            console.log(this.name + '.methodTwo() - do something before calling base.methodMethod2()');
            console.log(this.name + '.methodTwo() calling base.methodTwo()');
            this.base.methodTwo();
        };
    }

    return concrete;
}

module.exports.demoDecoratorPattern = demoDecoratorPattern;