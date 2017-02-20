var cmdAbstract = require('../CommandAbstract');

var cmdProcessPaymentImpl = Object.create(cmdAbstract.CommandAbstract);
cmdProcessPaymentImpl.execute = function() {
    this.receiver.action();
};

module.exports.cmdProcessPaymentImpl = cmdProcessPaymentImpl;