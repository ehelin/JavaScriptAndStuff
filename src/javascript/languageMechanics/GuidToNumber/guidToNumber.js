var sourceRef = require('guid');

function generateRandomNumber() {
    console.log('inside generateRandomNumber()');

    var guid = sourceRef.create();
    console.log('starting guid: ', guid.value)

    var guidStr = guid.toString();

    while (guidStr.indexOf('-') != -1) {
        guidStr = guidStr.replace('-', '');
    }

    let guidAsNumber = '';
    for(let i=0; i<guidStr.length; i++) {
        const curChar = guidStr.charAt(i);
        guidAsNumber += curChar.charCodeAt(0);
    }

    console.log('guid: ', guidStr);
    console.log('guidAsNumber: ', guidAsNumber);
}

module.exports.generateRandomNumber = generateRandomNumber;