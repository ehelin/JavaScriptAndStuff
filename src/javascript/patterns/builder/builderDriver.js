var cbRef = require('./ConcreteBuilder');

//This pattern builds a complex object with specific parts that follow an order or algorithm - build 'parts' and then they can be retrieved as one object
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