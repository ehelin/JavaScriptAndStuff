var AbsObjectX = {
    name: undefined,
    property: undefined,
    writeState: function() {
        console.log('AbsObjectX -> writeProperty() - should not be called');
    }
};

module.exports.AbsObjectX = AbsObjectX;