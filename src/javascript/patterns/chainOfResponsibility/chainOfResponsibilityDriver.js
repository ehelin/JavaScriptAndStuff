var baseRequest = require('./RequestAbs');

function demoChainOfResponsibility() {
    console.log('inside demoChainOfResponsibility()');
    console.log('');  //formatting

    var r1 = createRequest('request one');
    var r2 = createRequest('request two');
    var r3 = createRequest('request three');
    var r4 = createRequest('request four');

    console.log('');  //formatting

    r1.successor = r2;
    r2.successor = r3;
    r3.successor = r4;
    r4.successor = undefined;

    try {
        r1.callRequest();
    }
    catch(err) {
        console.log(err);
    }
};

function createRequest(name){
    var request = Object.create(baseRequest.RequestAbs);

    request.name = name;
    request.processRequest = function(){
        console.log(this.name + ' processRequest has been processed');
        console.log('');  //formatting
    };

    console.log('Created request ' + request.name);

    return request;
};

module.exports.demoChainOfResponsibility = demoChainOfResponsibility;