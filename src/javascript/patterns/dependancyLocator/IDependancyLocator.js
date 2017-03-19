var IDependancyLocator = {
    get: function(name) {
        console.log('Error: Interface method should not be called');
    },
    register: function(name, dependancy){
        console.log('Error: Interface method should not be called');
    },
    remove: function(name) {
        console.log('Error: Interface method should not be called');
    },
};

module.exports.IDependancyLocator = IDependancyLocator;