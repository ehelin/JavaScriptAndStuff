var absStateBaseRef = require('./AbsStateBase');
var contextRef = require('./Context');

var Context = contextRef.Context;

function demoStatePattern() {
    console.log('inside demoStatePattern');

    var ctr = 1;
    while(ctr <= 5) {
        var concreteStateBase = createStateObject('State Object ' + ctr.toString());
        Context.getCurrentState();
        concreteStateBase.execute(Context);

        console.log('');  //formatting

        ctr++
    };
};

function createStateObject(name) {
    var object = Object.create(absStateBaseRef.AbsStateBase);

    console.log('Creating object: ' + name);

    object.name = name;
    object.execute = function(context) {
        console.log(this.name + ' execute()');
        context.stateBase = this;
        context.getCurrentState();
    };

    return object;
};

module.exports.demoStatePattern = demoStatePattern;