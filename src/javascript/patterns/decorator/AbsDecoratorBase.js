var AbsDecoratorBase = {
    base: undefined,
    name: undefined,
    decoratorMethodOne: function() {
        console.log('AbsDecoratorBase -> decoratorMethodOne() - should not be called');
    }
};

module.exports.AbsDecoratorBase = AbsDecoratorBase;