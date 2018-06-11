var singletonReference = require('./Singleton');

//This pattern only allows one instance of a class to be instantiated.
function demoSingletonPattern(){
    console.log('inside demoSingletonPattern');

    let lastInstanceName = undefined;
    let ctr = 0;
    while (ctr < 5){
        let instance = createInstance();

        if (lastInstanceName === undefined){
            lastInstanceName = instance.name;
        }
        else if (lastInstanceName === instance.name) {
            console.log('The last instance created has the same name as the first.');
            break;
        }

        ctr++;
    }
};

function createInstance(){
    console.log('inside createInstance');

    let instance = singletonReference.createSingletonInstance();

    return instance;
}

module.exports.demoSingletonPattern = demoSingletonPattern;