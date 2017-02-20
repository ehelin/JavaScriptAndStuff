var receiver = require('./IReceiver');

var CommandAbstract = {
    receiver: undefined,
    execute: function() {
        console.log('Cmd Abstract execute');
    },
};

module.exports.CommandAbstract = CommandAbstract;