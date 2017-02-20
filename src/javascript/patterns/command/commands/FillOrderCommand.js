var cmdAbstract = require('../CommandAbstract');

var cmdFillOrderImpl = Object.create(cmdAbstract.CommandAbstract);
cmdFillOrderImpl.execute = function() {
    this.receiver.action();
};

module.exports.cmdFillOrderImpl = cmdFillOrderImpl;