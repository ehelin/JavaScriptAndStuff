var receiverInterface = require('../IReceiver');

var FillOrderReceiver =  Object.create(receiverInterface.IReceiver);
FillOrderReceiver.action = function () {
    console.log('Fill Order Receiver - action fired!');
};

module.exports.FillOrderReceiver = FillOrderReceiver;