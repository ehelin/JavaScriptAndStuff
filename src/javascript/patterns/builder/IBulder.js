var IBuilder = {
    buildObjectPart: function() {
        console.log('IBuilder -> buildPart() - should not be called');
    },
    getCompositeObject: function() {
        console.log('IBuilder -> getCompositeObject() - should not be called');
    },
};

module.exports.IBuilder = IBuilder;