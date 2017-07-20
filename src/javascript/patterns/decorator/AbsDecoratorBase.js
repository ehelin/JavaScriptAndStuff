var AbsDecoratorBase = {
    base: undefined,
    name: undefined,
    methodOne: function() {
        console.log('AbsDecoratorBase -> methodOne() - should not be called');
    },
    methodTwo: function() {
        console.log('AbsDecoratorBase -> methodTwo() - should not be called');
    }
};

module.exports.AbsDecoratorBase = AbsDecoratorBase;