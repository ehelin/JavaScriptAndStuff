function demoObserverPattern () {
    console.log('inside demoObserverPattern()');

    var system = buildSystem('System One');
    var observerOne = buildObserver('Observer one', system);
    var observerTwo = buildObserver('Observer two', system);
    var observerThree = buildObserver('Observer three', system);

    system.addObserver(observerOne);
    system.addObserver(observerTwo);
    system.addObserver(observerThree);

    system.notifyObservers();
}

function buildSystem(pName){
    var system = {
        observers: [],
        name: undefined,
        state: undefined,
        addObserver: function(observer) {
            this.observers.push(observer);
        },
        removeObserver: function(observer) {
            this.observers.remove(observer);
        },
        notifyObservers: function(){
            this.observers.forEach((observer) => observer.notify());
        },
        getState: function() {
            return this.state;
        }
    };

    //NOTE:  Assigning this in the system {} doesn't seem to work for state
    system.name = pName;
    system.state = 'state for system ' + system.name;

    return system;
}

function buildObserver(pName, pObservable){

    var observer = {
        name: pName,
        observable: pObservable,
        notify: function() {
            var state = this.observable.getState();
            console.log(this.name + ' observer - ' + state);
        },
    };

    return observer;
}

module.exports.demoObserverPattern = demoObserverPattern;