var agent = require('./Agent');
var ciaOffice = require('./CiaOffice');
var fbiOffice = require('./FbiOffice');

function demoBridgePattern() {
  console.log('inside demoBridgePattern()');

  var ciaAgent = createAgent('CIA', ciaOffice.CiaOffice);
  var fbiAgent = createAgent('FBI', fbiOffice.FbiOffice);

  ciaAgent.giveSupport();
  fbiAgent.giveSupport();
};

function createAgent(name, office){
    var curAgent = Object.create(agent.Agent);

    curAgent.name = name;
    curAgent.office = office;
    curAgent.giveSupport = function() {
        console.log(this.name + ' agent');
        this.office.giveSupport();
    };

    console.log(name + ' agent created!');

    return curAgent;
};

module.exports.demoBridgePattern = demoBridgePattern;