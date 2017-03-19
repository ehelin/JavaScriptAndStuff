var depAbstract = require('../DependancyAbstract');

var DepHttpClient = Object.create(depAbstract.DependancyAbstract);
DepHttpClient.name = 'HttpClient';
DepHttpClient.get = function(id){
    console.log(`DepHttpClient-get - data for ${id} retrieved!`);
};
DepHttpClient.post = function(data){
    console.log(`DepHttpClient-post - ${data} sent!`);
};

module.exports.DepHttpClient = DepHttpClient;
