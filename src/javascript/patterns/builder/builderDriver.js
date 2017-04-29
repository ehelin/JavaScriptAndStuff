var cbRef = require('./ConcreteBuilder');

function demoBuilderPattern() {
    console.log('inside demoBuilderPattern');

    var builder = cbRef.ConcreteBuilder;

    builder.buildObjectPart();
    builder.buildObjectPart();
    builder.buildObjectPart();
    builder.buildObjectPart();
    builder.buildObjectPart();

    var compositeObject = builder.getCompositeObject();

    console.log('compositeObject');
    console.log(compositeObject);
};

module.exports.demoBuilderPattern = demoBuilderPattern;