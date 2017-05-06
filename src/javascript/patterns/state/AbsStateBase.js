var AbsStateBase = {
    name: undefined,
    execute: function(context) {
        console.log('AbsStateBase -> execute() - should not be called');
    }
};

module.exports.AbsStateBase = AbsStateBase;
