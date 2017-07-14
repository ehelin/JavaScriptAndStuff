var AbsBase = {
    name: undefined,
    methodOne: function() {
        console.log('AbsBase -> methodOne() - should not be called');
    }
};

module.exports.AbsBase = AbsBase;