var acceptVisitorInterface = require('./IAcceptVisitor');
var visitor = require('./SystemVisitor');
var visitorInterface = require('./IVisit');

function demoVisitorPattern() {
    console.log('inside demoVisitorPattern()');

    var systemsGroupOne = buildSystems(5, 'SystemGroupOne');
    var systemsGroupTwo = buildSystems(50, 'SystemGroupTwo');
    var systemsGroupThree = buildSystems(50000, 'SystemGroupThree');
    var systemsGroupFour = buildSystems(500, 'SystemGroupFour');
    var systemsGroupFive = buildSystems(50000, 'SystemGroupFive');

    var systemVisitor = visitor.SystemVisitor;

    evaluateSystem(systemsGroupOne, visitor);
    evaluateSystem(systemsGroupTwo, visitor);
    evaluateSystem(systemsGroupThree, visitor);
    evaluateSystem(systemsGroupFour, visitor);
    evaluateSystem(systemsGroupFive, visitor);

};

function evaluateSystem(systemGroup, visitor){
    systemGroup.forEach((system) => {
        system.acceptVisitor(visitor);
    });
}
function buildSystems(limit, groupName){
    var systems = [];

    var ctr = 1;
    while(ctr <= limit){
        var system = buildsSystem(ctr, groupName);

        systems.push(system);

        ctr++;
    };

    return systems;
}
function buildsSystem(id, groupName){
    var system = Object.create(acceptVisitorInterface.IAcceptVisitor);

    system.name = 'System' + id;
    system.group = groupName;
    system.acceptVisitor = function(visitor){
        visitor.SystemVisitor.visit(this);
    };

    return system;
};

module.exports.demoVisitorPattern = demoVisitorPattern;