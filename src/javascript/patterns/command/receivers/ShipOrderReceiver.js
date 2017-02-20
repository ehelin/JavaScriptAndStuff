var receiverInterface = require('../IReceiver');

var ShipOrderReceiver =  Object.create(receiverInterface.IReceiver);
ShipOrderReceiver.action = function () {
    console.log('Ship Order Receiver - action fired!');
};

module.exports.ShipOrderReceiver = ShipOrderReceiver;