var ref = require('./IOffice');

var FbiOffice = Object.create(ref.IOffice);

FbiOffice.giveSupport = function() {
    console.log('FBI Office -> giving support');
};

module.exports.FbiOffice = FbiOffice;