var AbsDecoratorBase = {
    base: undefined,
    decoratorMethodOne: function() {
        console.log('AbsDecoratorBase -> decoratorMethodOne() - should not be called');
    }
};

module.exports.AbsDecoratorBase = AbsDecoratorBase;