var dataRef = require('./iD3Data');

// sources (quote in blog post)
// 1) http://web.arch.usyd.edu.au/~wpeng/DecisionTree2.pdf
// 2) udacity.com machine learning program .pdf on id3 algorithm

function demoiD3Algorithm() {
    console.log('inside demoiD3Algorithm()');

    weatherDataSample();
}
function weatherDataSample() {
    console.log('inside weatherDataSample()');

    var data = dataRef.getWeatherDiscreteDataSets();
    var baseEntropyGains = calculateBaseEntropyGain(data);

    // TODO - complete rest of example
    console.log('baseEntropyGains: ', baseEntropyGains);
}
function calculateBaseEntropyGain(data) {
    var results = [];  //NOTE: first element is base entropy...rest are gains
    var keys = Object.keys(data[0]);

    console.log('inside calculateBaseEntropyGain(args)');

    for (var ctr=0; ctr<data.length; ctr++) {

        if (ctr > 1) {
            // TODO - calculate gain of unique keys...not for each instance of a key
            break;
        }

        if (ctr === 0)   // NOTE: Base entropy is first element in each dataSet (i.e. decision) - always true/false are only values
        {
            results[ctr] = calculateIndividualEntropyGain(data, keys[ctr], true);
        }
        else
        {
            results[ctr] = calculateIndividualEntropyGain(data, keys[1], false, results[0], keys[0]);
        }
    }

    return results;
}
function calculateIndividualEntropyGain(data, dataElementKey, isBaseEntropy, baseEntropy = 0, baseDataElementKey = '') {
    var totalDataElements = data.length;
    var uniqueListOfValues = getListOfUniqueValues(data, dataElementKey);
    var uniqueListOfValueOccurrences = getUniqueListOfValueOccurrences(isBaseEntropy, uniqueListOfValues.length);

    uniqueListOfValueOccurrences = getUniqueListOfValueOccurrencesCounts(data, dataElementKey, uniqueListOfValueOccurrences, isBaseEntropy, uniqueListOfValues, baseDataElementKey);

    //[0] is positive and [1] is negative for base entropy...handle to make more robust
    if (isBaseEntropy) {
        var baseEntropy = -1 * (uniqueListOfValueOccurrences[0]/totalDataElements)*Math.log2(uniqueListOfValueOccurrences[0]/totalDataElements)
            - (uniqueListOfValueOccurrences[1]/totalDataElements)*Math.log2(uniqueListOfValueOccurrences[1]/totalDataElements);

        return baseEntropy;
    } else {
        var dataElementGain = calculateNonDecisionDataElementGain(uniqueListOfValues, baseEntropy, uniqueListOfValueOccurrences, totalDataElements);

        return dataElementGain;
    }
}

//support methods
function getListOfUniqueValuesCtrArrayObjectInitialized(arraySize) {
    var uniqueListOfValueOccurrences = new Array(arraySize);

    for(var ctr=0; ctr<uniqueListOfValueOccurrences.length; ctr++) {
        uniqueListOfValueOccurrences[ctr] = {
            positive: 0,
            negative: 0,
        };
    }

    return uniqueListOfValueOccurrences;
}
function getListOfUniqueValuesCtrArrayInitialized(arraySize) {
    var uniqueListOfValueOccurrences = new Array(arraySize);

    for(var ctr=0; ctr<uniqueListOfValueOccurrences.length; ctr++) {
        uniqueListOfValueOccurrences[ctr] = 0;
    }

    return uniqueListOfValueOccurrences;
}
function getListOfUniqueValues(data, dataElementKey) {
    var listOfValues = [];

    for (var ctr=0; ctr<data.length; ctr++) {
        var curDataSet = data[ctr];
        var curDataElementValue = curDataSet[dataElementKey];

        if (!listOfValues.includes(curDataElementValue)){
            listOfValues.push(curDataElementValue)
        }
    }

    return listOfValues;
}
function getUniqueListOfValueOccurrences(isBaseEntropy, arraySize) {
    var uniqueListOfValueOccurrences = null;

    if (isBaseEntropy) {
        uniqueListOfValueOccurrences = getListOfUniqueValuesCtrArrayInitialized(arraySize);
    } else {
        uniqueListOfValueOccurrences = getListOfUniqueValuesCtrArrayObjectInitialized(arraySize);
    }

    return uniqueListOfValueOccurrences;
}

// TODO - refactor this
function getUniqueListOfValueOccurrencesCounts(data, dataElementKey, uniqueListOfValueOccurrences, isBaseEntropy, uniqueListOfValues, baseDataElementKey) {
    for (var outerCtr=0; outerCtr<data.length; outerCtr++) {
        var curDataSet = data[outerCtr];
        var curDataElementValue = curDataSet[dataElementKey];

        console.log('getUniqueListOfValueOccurrencesCounts: ', curDataElementValue);

        if (isBaseEntropy) {
            for(var innerCtr=0; innerCtr<uniqueListOfValues.length; innerCtr++) {
                if(curDataElementValue === uniqueListOfValues[innerCtr]) {
                    var curCtrVar = uniqueListOfValueOccurrences[innerCtr];
                    curCtrVar++;
                    uniqueListOfValueOccurrences[innerCtr] = curCtrVar;
                }
            }
        } else {
            var curCtrVar = 0;
            for(var innerCtr=0; innerCtr<uniqueListOfValues.length; innerCtr++) {
                if(curDataElementValue === uniqueListOfValues[innerCtr]) {
                    var curCtrObject = uniqueListOfValueOccurrences[innerCtr];
                    var decisionValue = curDataSet[baseDataElementKey];

                    if (decisionValue === true){
                        curCtrObject.positive = curCtrObject.positive + 1;
                    } else {
                        curCtrObject.negative = curCtrObject.negative + 1;
                    }

                    uniqueListOfValueOccurrences[innerCtr] = curCtrObject;
                }
            }
        }
    }

    return uniqueListOfValueOccurrences;
}

// TODO - refactor this
function calculateNonDecisionDataElementGain(uniqueListOfValues, baseEntropy, uniqueListOfValueOccurrences, totalDataElements) {
    //handle the else for non-base entrophy cases
    var factors = getListOfUniqueValuesCtrArrayInitialized(uniqueListOfValues.length);
    for(var ctr=0; ctr<uniqueListOfValues.length; ctr++) {
        console.log(uniqueListOfValues[ctr]);
        console.log(uniqueListOfValueOccurrences[ctr]);

        var totalPositive = uniqueListOfValueOccurrences[ctr].positive;
        var totalNegative = uniqueListOfValueOccurrences[ctr].negative;
        var totalReadings = uniqueListOfValueOccurrences[ctr].positive + uniqueListOfValueOccurrences[ctr].negative;

        //get entropy for this data element
        var curEntropy = -1 * (totalPositive/totalReadings)*Math.log2(totalPositive/totalReadings)
            - (totalNegative/totalReadings)*Math.log2(totalNegative/totalReadings);

        if (isNaN(curEntropy)) {
            curEntropy = 0;
        }

        var calculatedValue = totalReadings/totalDataElements * curEntropy;
        factors[ctr] = calculatedValue;
    }

    var factor = 0;
    for(var ctr=0; ctr<factors.length; ctr++) {
        factor = factor - factors[ctr];
    }

    var gain = baseEntropy - Math.abs(factor);

    return gain;
}

module.exports.demoiD3Algorithm = demoiD3Algorithm;