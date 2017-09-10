var dataRef = require('./iD3Data');

// sources (quote in blog post)
// 1) http://web.arch.usyd.edu.au/~wpeng/DecisionTree2.pdf
// 2) udacity.com machine learning program .pdf on id3 algorithm

function demoiD3Algorithm() {
    console.log('inside demoiD3Algorithm()');

    runWeatherDataSample();
}
var cont = true;

function getNonSplitableDataSetDecision(data, decisionDataElementName) {
    var decision = null;

    if (data.length < 1) {
        throw new Error('getNonSplitableDataSetDecision(args) - no data');
    }

    decision = data[0][decisionDataElementName];

    return decision;
}

var childNodesToProcess = [];

function runWeatherDataSample() {
    var data = dataRef.getWeatherDiscreteDataSets();

    var node = buildNode(data);
    var node = processLeafNodes(data, node);

    console.log('inside runWeatherDataSample()');

    var interationCtr = 0;  //do we need?
    while (childNodesToProcess.length > 0) {
        processChildNodes(data);
        //processLeafNodes(data, node);

        //interationCtr++;  //put in some exit condition
    }
}

function processChildNodes(data) {
    var test = 1;
    for(var ctr=0; ctr<childNodesToProcess.length; ctr++){
        var newChildeNode = processLeafNodes(data, childNodesToProcess[ctr]);
        var teset1 = 2;
    }
}

function processLeafNodes(data, node) {
    for (var ctr = 0; ctr < node.leaves.length; ctr++) {
        var newChildNode = processLeafNode(data, node.dataElement, node.leaves[ctr]);

        if (Object.prototype.toString.call(newChildNode.leaves) === '[object Array]') {
            childNodesToProcess.push(newChildNode);
            node.leaves[ctr].leaves.push(newChildNode);
        } else {
            node.leaves[ctr] = newChildNode;
        }
    }

    return node;
}

function processLeafNode(data, parentDataElement, node) {
    var matchingDataSets = getDataByDataElementAndSubDataElement(data, parentDataElement, node.dataElement);
    var splitFurther = splitDataFurther(matchingDataSets, 'Decision');  // TODO - make decision a constant or something

    if (!splitFurther) {
        var decision = getNonSplitableDataSetDecision(matchingDataSets, 'Decision'); // TODO - make decision a constant or something

        node = createNode(node.dataElement, decision, 0, 0, parentDataElement);
    } else {
        matchingDataSets = removeUsedDataElements(data, matchingDataSets, parentDataElement);
        node = buildNode(matchingDataSets, node.dataElement);
    }

    return node;
}

function buildNode(data, nodeParentName = '') {
    var parent = '';

    if(nodeParentName === '') {
        parent = 'root';
    } else {
        parent = nodeParentName;
    }

    var baseEntropyGains = calculateBaseEntropyGains(data, parent);
    baseEntropyGains = sort(baseEntropyGains);
    var newNode = baseEntropyGains[baseEntropyGains.length - 1];

    return newNode;
}

function removeAnyNodeLeavesWithAllTrueValues(data, node, decisionDataElement) {
    var removeDataElement = getListOfUniqueValuesCtrArrayInitialized(node.leaves.length, true);

    for (var outer = 0; outer < node.leaves.length; outer++) {
        var curLeave = node.leaves[outer];
        var blah = 1;

        for (var inner = 0; inner < data.length; inner++) {
            var curData = data[inner];

            if (removeDataElement[outer]
                && curData[node.dataElement] === curLeave
                && curData[decisionDataElement] !== true) {
                removeDataElement[outer] = false;
                break;
            }
        }
    }

    var newData = [];
    for (var outer = 0; outer < data.length; outer++) {
        var curData = data[outer];
        var add = true;

        for (var inner = 0; inner < data.length; inner++) {
            var curLeave = node.leaves[inner];
            var deleteDataElement = removeDataElement[inner];

            var curDataNodeDataElement = curData[node.dataElement];
            var deleteDataElementValue = deleteDataElement;

            if (curData[node.dataElement] === curLeave && deleteDataElement) {
                add = false;
                break;
            }
        }

        if (add) {
            newData.push(curData);
        }
    }

    return newData;
}
function calculateBaseEntropyGains(data, parent) {
    //NOTE: first element is base entropy...rest are gains
    var results = [];
    var keys = Object.keys(data[0]);

    console.log('inside calculateBaseEntropyGains(args)');

    var baseEntropy = 0;
    var decisionElementName = '';
    for (var ctr = 0; ctr < keys.length; ctr++) {
        var gain = 0;

        if (ctr === 0)   // NOTE: Base entropy is first element in each dataSet (i.e. decision) - always true/false are only values
        {
            baseEntropy = calculateIndividualEntropyGain(data, keys[ctr], true);
            decisionElementName = keys[ctr];
        }
        else {
            gain = calculateIndividualEntropyGain(data, keys[ctr], false, baseEntropy, decisionElementName);
        }

        var result = buildNodeWithChildren(keys[ctr], baseEntropy, gain, data, parent);

        results[ctr] = result;
    }

    return results;
}

function buildNodeWithChildren(dataElementName, baseEntropy, gain, data, parent) {
    var leaves = getListOfUniqueValues(data, dataElementName);

    var nodeWithChildren = createNode(dataElementName, [], baseEntropy, gain, parent);

    for(var ctr=0; ctr<leaves.length; ctr++) {
        var curLeaf = createNode(leaves[ctr], [], 0, 0, dataElementName);

        nodeWithChildren.leaves.push(curLeaf);
    }

    return nodeWithChildren
}

function calculateIndividualEntropyGain(data, dataElementKey, isBaseEntropy, baseEntropy = 0, baseDataElementKey = '') {
    var totalDataElements = data.length;

    var uniqueListOfValues = getListOfUniqueValues(data, dataElementKey);

    var uniqueListOfValueOccurrences = getUniqueListOfValueOccurrences(isBaseEntropy, uniqueListOfValues.length);
    uniqueListOfValueOccurrences = getUniqueListOfValueOccurrencesCounts(data, dataElementKey, uniqueListOfValueOccurrences, isBaseEntropy, uniqueListOfValues, baseDataElementKey);

    //[0] is positive and [1] is negative for base entropy...handle to make more robust
    if (isBaseEntropy) {
        var baseEntropy = calculateEntropy(
            uniqueListOfValueOccurrences[0],
            uniqueListOfValueOccurrences[1],
            totalDataElements);

        return baseEntropy;
    } else {
        var dataElementGain = calculateNonDecisionDataElementGain(uniqueListOfValues, baseEntropy, uniqueListOfValueOccurrences, totalDataElements);

        return dataElementGain;
    }
}

//support methods
function calculateEntropy(totalPositive, totalNegative, totalElements) {
    // entropy = -1 * (+/total) * log2(+/total) - (-/total) * log2(-/total)
    var entropy = -1
        * (totalPositive / totalElements)
        * Math.log2(totalPositive / totalElements)
        - (totalNegative / totalElements)
        * Math.log2(totalNegative / totalElements);

    return entropy;
}
function getListOfUniqueValuesCtrArrayObjectInitialized(arraySize) {
    var uniqueListOfValueOccurrences = new Array(arraySize);

    for (var ctr = 0; ctr < uniqueListOfValueOccurrences.length; ctr++) {
        uniqueListOfValueOccurrences[ctr] = {
            positive: 0,
            negative: 0,
        };
    }

    return uniqueListOfValueOccurrences;
}
function getListOfUniqueValuesCtrArrayInitialized(arraySize, boolType = false) {
    var uniqueListOfValueOccurrences = new Array(arraySize);

    for (var ctr = 0; ctr < uniqueListOfValueOccurrences.length; ctr++) {
        if (boolType) {
            uniqueListOfValueOccurrences[ctr] = true;
        } else {
            uniqueListOfValueOccurrences[ctr] = 0;
        }
    }

    return uniqueListOfValueOccurrences;
}
function getListOfUniqueValues(data, dataElementKey) {
    var listOfValues = [];

    for (var ctr = 0; ctr < data.length; ctr++) {
        var curDataSet = data[ctr];
        var curDataElementValue = curDataSet[dataElementKey];

        if (!listOfValues.includes(curDataElementValue)) {
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
function getUniqueListOfValueOccurrencesCounts(data, dataElementKey, uniqueListOfValueOccurrences, isBaseEntropy, uniqueListOfValues, baseDataElementKey) {
    for (var outerCtr = 0; outerCtr < data.length; outerCtr++) {
        var curDataSet = data[outerCtr];
        var curDataElementValue = curDataSet[dataElementKey];

        if (isBaseEntropy) {
            for (var innerCtr = 0; innerCtr < uniqueListOfValues.length; innerCtr++) {
                if (curDataElementValue === uniqueListOfValues[innerCtr]) {
                    var curCtrVar = uniqueListOfValueOccurrences[innerCtr];
                    curCtrVar++;
                    uniqueListOfValueOccurrences[innerCtr] = curCtrVar;
                }
            }
        } else {
            for (var innerCtr = 0; innerCtr < uniqueListOfValues.length; innerCtr++) {
                if (curDataElementValue === uniqueListOfValues[innerCtr]) {
                    var curCtrObject = uniqueListOfValueOccurrences[innerCtr];
                    var decisionValue = curDataSet[baseDataElementKey];

                    if (decisionValue === true) {
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
function calculateNonDecisionDataElementGain(uniqueListOfValues, baseEntropy, uniqueListOfValueOccurrences, totalDataElements) {
    var equationComponents = getListOfUniqueValuesCtrArrayInitialized(uniqueListOfValues.length);

    for (var ctr = 0; ctr < uniqueListOfValues.length; ctr++) {
        var totalPositive = uniqueListOfValueOccurrences[ctr].positive;
        var totalNegative = uniqueListOfValueOccurrences[ctr].negative;
        var totalReadings = uniqueListOfValueOccurrences[ctr].positive + uniqueListOfValueOccurrences[ctr].negative;

        var dataElementEntropy = calculateEntropy(totalPositive, totalNegative, totalReadings);

        if (isNaN(dataElementEntropy)) {
            dataElementEntropy = 0;
        }

        equationComponents[ctr] = totalReadings / totalDataElements * dataElementEntropy;
    }

    var gain = calculateGain(equationComponents, baseEntropy);

    return gain;
}
function calculateGain(equationComponents, baseEntropy) {
    var gain = 0;

    for (var ctr = 0; ctr < equationComponents.length; ctr++) {
        gain = gain - equationComponents[ctr];
    }

    var gain = baseEntropy - Math.abs(gain);

    return gain;
}
function sort(data) {
    var length = data.length - 1;

    for (var outer = 0; outer < length; outer++) {
        for (var inner = 0; inner < length; inner++) {
            if (inner + 1 > length) {
                break;
            }

            var dataOne = data[inner];
            var dataTwo = data[inner + 1];

            if (dataOne.gain > dataTwo.gain) {
                data[inner] = dataTwo;
                data[inner + 1] = dataOne
            }
        }
    }

    return data;
}
function removeUsedDataElements(data, dataElement) {
    //var newData = [];

    for (var ctr = 0; ctr < data.length; ctr++) {
        var curData = data[ctr];
        delete curData[dataElement];
        data[ctr] = curData;
    }

    return data;
}
function getDataByDataElementAndSubDataElement(data, dataElement, subDataElement) {
    var matchedData = [];

    for (var ctr = 0; ctr < data.length; ctr++) {
        var curData = data[ctr];

        if (curData[dataElement] === subDataElement) {
            matchedData.push(curData);
        }
    }

    return matchedData;
}
function splitDataFurther(data, decisionDataElementName) {
    var splitFurther = false;
    var lastDecision = null;

    for (var ctr = 0; ctr < data.length; ctr++) {
        var curData = data[ctr];

        if (lastDecision === null) {
            lastDecision = curData[decisionDataElementName];
        } else {
            if (curData[decisionDataElementName] !== lastDecision) {
                splitFurther = true;
            }
        }
    }

    return splitFurther;
}
function createNode(dataElement, leaves, baseEntropy, gain, parent){
    var node = {
        dataElement: dataElement,
        leaves: leaves,
        baseEntropy: baseEntropy,
        gain: gain,
        parent: parent,
    };

    return node;
}

// function removeUsedDataElements(data, dataElement) {
//     var newData = [];
//
//     for (var ctr = 0; ctr < data.length; ctr++) {
//         var curData = data[ctr];
//         delete curData[dataElement];
//         data[ctr] = curData;
//     }
//
//     return data;
// }

module.exports.demoiD3Algorithm = demoiD3Algorithm;