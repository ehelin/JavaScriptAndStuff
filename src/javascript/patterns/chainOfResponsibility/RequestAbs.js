var RequestAbs = {
    name: undefined,
    successor: undefined,
    processRequest(){
        throw new Error('Base Class processRequest should not be called');
    },
    callRequest(){
        console.log(this.name + ' callRequest()');
        this.processRequest();

        if (this.successor != undefined) {
            this.successor.callRequest();
        }
        else {
            console.log('successor is not set');
        }
    },
};

module.exports.RequestAbs = RequestAbs;