var receiverInterface = require('../IReceiver');

var ProcessPaymentReceiver =  Object.create(receiverInterface.IReceiver);
ProcessPaymentReceiver.action = function () {
    console.log('Process Payment Receiver - action fired!');
};

module.exports.ProcessPaymentReceiver = ProcessPaymentReceiver;