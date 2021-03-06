function objectFunctions () {

    this.getPrototypeOf = function () {
        var importer = require('./AnObject');

        var anObject = new importer.AnObject();
        var anotherObject = Object.create(anObject);

        console.log('Object.getPrototypeOf() -----------------');
        console.log(Object.getPrototypeOf(anotherObject));
        console.log('');
    };
    this.getOwnPropertyNames = function () {
        var myComplexObject = {
            property1: 'one',
            property2: 'two',
            property3: 'three',
            property4: 'four',
            property5: 'five',
        };

        console.log('Object.getOwnPropertyNames() ------------');
        console.log(Object.getOwnPropertyNames(myComplexObject));
        console.log('');
    };
    this.assign = function () {
        var myComplexObjectOne = {
            property1: 'one',
        };

        var myComplexObjectTwo = {
            property2: 'one',
        };

        var myComplexObjectThree = {
            property3: 'one',
        }

        console.log('Object.assign() --------------------------');
        let newObj = Object.assign({},
            myComplexObjectOne,
            myComplexObjectTwo,
            myComplexObjectThree);
        console.log(newObj);
        console.log('');
    };
    this.dotDotDotOperator = function () {
        var utilities = require('./utilities');
        let employeeName = utilities.buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie',
                                                'Smith', 'Gertrude', 'Ethel');

        console.log('... Operator-------------------------------');
        console.log(employeeName);
        console.log('');
    };
    this.displayWithALambda = function () {
        var utilities = require('./utilities');
        var myComplexObjectArray = utilities.setUpObjectCollection();

        console.log('List with lambda and no function body ---------');
        myComplexObjectArray.forEach((arrayElement) => console.log(JSON.stringify(arrayElement)));
    };
    this.keysDemo = function () {
        const arr = ['a', 'b', 'c'];
        const keys = Object.keys(arr);

        for(var i=0; i<arr.length; i++){
            let keysOutput = 'keys(' + i + '): ' + keys[i];
            let arrOutput = 'arr(' + i + '): ' + arr[i];

            console.log('');
            console.log('objectKeysDemo ------------------')
            console.log(keysOutput)
            console.log(arrOutput);
        }
    }
    this.objectAsArrayFacade = function() {
        const myObject = {
            property: 'value'
        };

        myObject[1] = 'value1';
        myObject[2] = 'value2';
        myObject[3] = 'value3';

        console.log('');
        console.log('object as array facade (ish) ------------------')
        console.log(myObject);
        console.log('');
        Object.keys(myObject).forEach((key) => console.log(myObject[key]));
    }
    //array ============================
    this.every = function () {
        var utilities = require('./utilities');
        var myComplexObjectArray = utilities.setUpObjectCollection();

        console.log('array.every()-----------------------------');
        console.log('Every element > 5: ' + myComplexObjectArray.every((element) => element.propertyOne >= 5));
        console.log('Every element > -1: ' + myComplexObjectArray.every((element) => element.propertyOne >= -1));
        console.log('');
    };
    this.concat = function() {
        var utilities = require('./utilities');
        var arrayOne = utilities.setUpSimpleArray();
        var arrayTwo = utilities.setUpSimpleArray();

        console.log('array.concat()-----------------------------');
        console.log('arrayOne length: ', arrayOne.length);
        console.log('arrayTwo length: ', arrayTwo.length);

        var compositeArray = arrayOne.concat(arrayTwo);
        console.log('composite array length: ', compositeArray.length);
    };
    this.copyWithin = function() {
        var utilities = require('./utilities');
        var array = utilities.setUpSimpleArray();

        console.log('array.copyWithin()--------------------------');
        console.log('copy first two elements to the 3rd and 4th position');
        console.log('array before copy', array.forEach((element) => console.log(element)));
        array.copyWithin(2, 0, 2);
        console.log('array after copy', array.forEach((element) => console.log(element)));
    };

    // TODO - add .forEach() that returns an element after some condition is met
};

module.exports.objectFunctions = objectFunctions;