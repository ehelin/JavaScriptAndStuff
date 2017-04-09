var Singleton = function() {
    this.ctr = 0;
    this.name = null;
    this.doSomething = function() {
        console.log('This method does something :)');
    };
};

var singletonInstance = null;

function createSingletonInstance(){
    console.log('inside createSingletonInstance');

     if (singletonInstance == null)
     {
         singletonInstance = new Singleton();

         singletonInstance.name = 'Instance ' + singletonInstance.ctr.toString();
         singletonInstance.ctr++;

         console.log('Instance created!');
     }
     else{
         console.log('Cannot create Singleton...an instance already exists');
     }

     return singletonInstance;
}

module.exports.Singleton = Singleton;
module.exports.createSingletonInstance = createSingletonInstance;