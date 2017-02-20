var receiverInterface = require('../IReceiver');

var CreateOrderReceiver =  Object.create(receiverInterface.IReceiver);
CreateOrderReceiver.action = function () {
    console.log('Create Order Receiver - action fired!');
};

module.exports.CreateOrderReceiver = CreateOrderReceiver;