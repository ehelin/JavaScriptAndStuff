var baseRef = require('./AbsBase');
var baseDecoratorRef = require('./AbsDecoratorBase');

function demoDecoratorPattern() {
    console.log('inside demoDecoratorPattern()');

    var concreteBase = buildConcrete(null, 'ConcreteBase');
    var concreteDecoratorBase = buildConcrete(concreteBase, 'ConcreteDecoratorBase');

    concreteBase.methodOne();
    concreteDecoratorBase.methodOne();
    concreteDecoratorBase.decoratorMethodOne();

    // TODO - update decoratorMethodOne or it's methodOne to do something to the base

}

function buildConcrete(base, name) {
    var concrete = null;

    if (!base) {
        concrete = Object.create(baseRef.AbsBase);

        concrete.name = name;
        concrete.methodOne = function() {
            console.log(this.name + '.methodOne() called');
        };
    } else {
        concrete = Object.create(baseDecoratorRef.AbsDecoratorBase);

        concrete.name = name;
        concrete.base = base;
        concrete.methodOne = function() {
            console.log(this.name + '.methodOne() calling base.methodOne()');
            this.base.methodOne();
        };
        concrete.decoratorMethodOne = function() {
            console.log(this.name + '.decoratorMethodOne() called');
        };
    }

    return concrete;
}

module.exports.demoDecoratorPattern = demoDecoratorPattern;