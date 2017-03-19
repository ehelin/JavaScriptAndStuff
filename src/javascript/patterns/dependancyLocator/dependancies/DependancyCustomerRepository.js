var depAbstract = require('../DependancyAbstract');

var DepCustomerRepository = Object.create(depAbstract.DependancyAbstract);
DepCustomerRepository.name = 'CustomerRepository';
DepCustomerRepository.createCustomer = function(customer){
    console.log(`DepCustomerRepository-createCustomer - ${customer.name} created!`);
};
DepCustomerRepository.updateCustomer = function(customer){
    console.log(`DepCustomerRepository-updateCustomer - ${customer.name} updated!`);
};
DepCustomerRepository.deleteCustomer = function(customer){
    console.log(`DepCustomerRepository-deleteCustomer - ${customer.name} deleted!`);
};

module.exports.DepCustomerRepository = DepCustomerRepository;