var visitorInterface = require('./IVisit');

var SystemVisitor = Object.create(visitorInterface.IVisit);

SystemVisitor.visit = function(system) {
    console.log(system.group + '/' + system.name + ' has been visited');
};

module.exports.SystemVisitor = SystemVisitor;