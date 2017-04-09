var cmdAbstract = require('../CommandAbstract');

var cmdCreateOrderImpl = Object.create(cmdAbstract.CommandAbstract);

cmdCreateOrderImpl.execute = function() {
    this.receiver.action();
};

module.exports.cmdCreateOrderImpl = cmdCreateOrderImpl;