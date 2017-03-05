var invoker = require('./Invoker');

var cmdCreateOrder = require('./commands/CreateOrderCommand');
var cmdFillOrder = require('./commands/FillOrderCommand');
var cmdShipOrder = require('./commands/ShipOrderCommand');
var cmdProcessPaymentOrder = require('./commands/ProcessPaymentCommand');

var iCreateReceiver = require('./receivers/CreateOrderReceiver');
var iFillOrderReceiver = require('./receivers/FillOrderReceiver');
var iShipOrderReceiver = require('./receivers/ShipOrderReceiver');
var iProcessPaymentReceiver = require('./receivers/ProcessPaymentReceiver');

function demoCommandPattern() {
    console.log('inside demoCommandPattern()');

    //create order
    var cmdCreateOrderObj = cmdCreateOrder.cmdCreateOrderImpl;
    var ireceiverObj = iCreateReceiver.CreateOrderReceiver;
    cmdCreateOrderObj.receiver = ireceiverObj;

    //fill order
    var cmdFillOrderObj = cmdFillOrder.cmdFillOrderImpl;
    var ireceiverObj = iFillOrderReceiver.FillOrderReceiver;
    cmdFillOrderObj.receiver = ireceiverObj;

    //fill order
    var cmdShipOrderObj = cmdShipOrder.cmdShipOrderImpl;
    var ireceiverObj = iShipOrderReceiver.ShipOrderReceiver;
    cmdShipOrderObj.receiver = ireceiverObj;

    //process payment
    var cmdProcessPaymentOrderObj = cmdProcessPaymentOrder.cmdProcessPaymentImpl;
    var ireceiverObj = iProcessPaymentReceiver.ProcessPaymentReceiver;
    cmdProcessPaymentOrderObj.receiver = ireceiverObj;

    //NOTE: put in reverse order since javascript arrays are stacks
    invoker.CommandInvoker.cmd.push(cmdProcessPaymentOrderObj);
    invoker.CommandInvoker.cmd.push(cmdShipOrderObj);
    invoker.CommandInvoker.cmd.push(cmdFillOrderObj);
    invoker.CommandInvoker.cmd.push(cmdCreateOrderObj);

    invoker.CommandInvoker.execute();
    invoker.CommandInvoker.execute();
    invoker.CommandInvoker.execute();
    invoker.CommandInvoker.execute();
    invoker.CommandInvoker.execute();
};

module.exports.demoCommandPattern = demoCommandPattern;