var cmdAbstract = require('../CommandAbstract');

var cmdShipOrderImpl = Object.create(cmdAbstract.CommandAbstract);
cmdShipOrderImpl.execute = function() {
    this.receiver.action();
};

module.exports.cmdShipOrderImpl = cmdShipOrderImpl;