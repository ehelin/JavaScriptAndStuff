var ref = require('./ITarget');

var Adapter = Object.create(ref.ITarget);

Adapter.adaptee = undefined;
Adapter.getTargetData = function() {
    return this.adaptee.getAdapteeData();
};

module.exports.Adapter = Adapter;
