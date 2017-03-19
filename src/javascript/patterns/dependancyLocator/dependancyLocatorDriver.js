var depLocatorReference = require('./DependancyLocatorImpl');
var customerRepositoryReference = require('./dependancies/DependancyCustomerRepository');
var httpClientReference = require('./dependancies/DependancyHttpClient');
var serviceOneReference = require('./dependancies/DependancyServiceOne');
var customerReference = require('./dataObjects/Customer');

function demoServiceLocatorPattern () {
    console.log('inside demoServiceLocatorPattern()');

    var depLocator = getDependancyLocator();

    displayDependancyUse(depLocator);
}

function getDependancyLocator() {
    console.log('initializing dependancy locator...');

    var depLocator = depLocatorReference.DependancyLocatorImpl;

    console.log('adding dependancies...');
    depLocator.register(customerRepositoryReference.DepCustomerRepository);
    depLocator.register(httpClientReference.DepHttpClient);
    depLocator.register(serviceOneReference.DepServiceOne);

    return depLocator;
}

function displayDependancyUse(depLocator){
    console.log('');  //formatting

    console.log('Customer Repository ==================================');
    useDependancy('CustomerRepository', depLocator);
    console.log('');

    console.log('Service One ==================================');
    useDependancy('ServiceOne', depLocator);
    console.log('');  //formatting

    console.log('Http Client ==================================');
    useDependancy('HttpClient', depLocator);
    console.log('');  //formatting
}
function useDependancy(name, depLocator) {
    console.log('Using dependancy' + name);

    var dependancy = depLocator.get(name);

    if (name === 'CustomerRepository'){
        useCustomerRepository(dependancy);
    } else if (name === 'ServiceOne'){
        useServiceOne(dependancy);
    } else if (name === 'HttpClient'){
        useHttpClient(dependancy);
    } else {
        throw new Error('unknown dependancy');
    }
}
function useCustomerRepository(dependancy) {
    console.log('inside useCustomerRepository');

    dependancy.createCustomer(customerReference.Customer);
    dependancy.updateCustomer(customerReference.Customer);
    dependancy.deleteCustomer(customerReference.Customer);
}
function useServiceOne(dependancy) {
    console.log('inside useServiceOne');

    dependancy.sendData('Service one data');
    dependancy.getData('Service id - 123');
}
function useHttpClient(dependancy) {
    console.log('inside useHttpClient');

    dependancy.post('Http Client data');
    dependancy.get('Http Client id - 456');
}

module.exports.demoServiceLocatorPattern = demoServiceLocatorPattern;