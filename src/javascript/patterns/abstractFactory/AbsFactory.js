var AbsFactory = {
    makeObjectA: function() {
        console.log('AbsFactory -> makeObjectA() - should not be called');
    },
    makeObjectB: function() {
        console.log('AbsFactory -> makeObjectB() - should not be called');
    },
    makeObjectC: function() {
        console.log('AbsFactory -> makeObjectC() - should not be called');
    },
};

module.exports.AbsFactory = AbsFactory;