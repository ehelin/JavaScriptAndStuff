var depLocIfc = require('./IDependancyLocator');

var DependancyLocatorImpl = Object.create(depLocIfc.IDependancyLocator);
DependancyLocatorImpl.dependancies = [];
DependancyLocatorImpl.get = function(name) {
    console.log('inside depLocator->get');

    const matchingDependancyArrElement = this.dependancies.filter((currentDependancy) => {
        return currentDependancy.name === name;
    });

    if (!matchingDependancyArrElement){;
        throw new Error('no matching dependancy found for name: ' + name);
    }
    //TODO - find more elegant way to return desired element
    const matchingDependancy = matchingDependancyArrElement[0];

    console.log(`DependancyLocatorImpl - get - ${matchingDependancy.name} retrieved!`);

    return matchingDependancy;
};
DependancyLocatorImpl.register = function(dependancy) {
    this.dependancies.push(dependancy);
    console.log(`DependancyLocatorImpl - register - ${dependancy.name} registered!`);
};
DependancyLocatorImpl.remove = function(dependancy) {
    return this.get(dependancy.name)
        .then((matchingDependancy) => {
            if (matchingDependancy){
                this.dependancies.pop(matchingDependancy);
                console.log(`DependancyLocatorImpl - register - ${dependancy.name} removed!`);
            }
        });
};

module.exports.DependancyLocatorImpl = DependancyLocatorImpl;