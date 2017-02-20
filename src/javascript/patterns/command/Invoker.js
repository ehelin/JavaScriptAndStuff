var CommandInvoker = {
    cmd: [],
    execute: function () {
        if (this.cmd.length > 0) {
            var curCmd = this.cmd.pop();

            if (curCmd != null && curCmd != undefined) {
                curCmd.execute();
            }
        }
        else {
            console.log('Invoker - no commands');
        }

    },
};

module.exports.CommandInvoker = CommandInvoker;