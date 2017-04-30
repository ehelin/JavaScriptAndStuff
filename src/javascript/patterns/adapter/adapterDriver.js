var adapteeRef = require('./Adaptee');
var adapterRef = require('./Adapter');

function demoAdapterPattern() {
    console.log('inside demoAdapterPattern');

    var adapter = adapterRef.Adapter;
    console.log('adapter is created!');
    console.log(adapter);

    adapter.adaptee = adapteeRef.Adaptee;
    console.log('adaptee is created and placed inside adapter');
    console.log(adapter);

    console.log('calling adaptee via adapater...');
    var adapteeData = adapter.getTargetData();

    console.log('adapteeData: ', adapteeData);
};

module.exports.demoAdapterPattern = demoAdapterPattern;