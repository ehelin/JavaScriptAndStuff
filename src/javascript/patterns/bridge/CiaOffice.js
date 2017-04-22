var ref = require('./IOffice');

var CiaOffice = Object.create(ref.IOffice);

CiaOffice.giveSupport = function() {
    console.log('CIA Office -> give support');
};

module.exports.CiaOffice = CiaOffice;