var depAbstract = require('../DependancyAbstract');

var DepServiceOne = Object.create(depAbstract.DependancyAbstract);
DepServiceOne.name = 'ServiceOne';
DepServiceOne.getData = function(id){
    console.log(`DepServiceOne-createCustomer - data for ${id} retrieved!`);
};
DepServiceOne.sendData = function(data){
    console.log(`DepServiceOne-sendData - ${data} sent!`);
};

module.exports.DepServiceOne = DepServiceOne;

