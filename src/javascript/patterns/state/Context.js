var Context = {
    stateBase: undefined,
    executeStateBase: function() {
        this.stateBase.execute();
    },
    getCurrentState: function() {
        if (this.stateBase === undefined) {
            console.log('Context state is undefined');
        } else {
            console.log('Context state is :' + this.stateBase.name);
        }
    }
};

module.exports.Context = Context;