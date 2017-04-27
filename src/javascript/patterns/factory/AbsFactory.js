var AbsFactory = {
    name: undefined,
    createObject: function() {
        console.log('AbsFactory -> createObject() - should not be called')
    },
};

module.exports.AbsFactory = AbsFactory;