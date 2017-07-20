var sortRef = require('../../sorting/bubble/bubbleDriver');

function initDataSet(dayOnePrices, dayTwoPrices) {
    var dataSet = [];

    console.log('Initializing dataset');

    for(var i=0; i<dayOnePrices.length; i++){
        var element = {
            individual: i+1,
            manufacturer: 'eggManufacturer' + i.toString(),
            dayOnePrice: dayOnePrices[i],
            dayTwoPrice: dayTwoPrices[i],
            mean: dayOnePrices[i] + dayTwoPrices[i]/2,
            distanceToMin: 0,
            distanceToMax: 0,
            group: null,
        };

        dataSet.push(element)
    }

    return dataSet;
}

function recalculateClusterMean(cluster) {
    var numberOfItems = 0;
    var dayOnePrices = 0;
    var dayTwoPrices = 0;

    cluster.objectsInThisGroup.forEach(function(object) {
        dayOnePrices += object.dayOnePrice;
        dayTwoPrices += object.dayTwoPrice;

        numberOfItems += 1;
    });

    cluster.dayOnePrice = dayOnePrices/numberOfItems;
    cluster.dayTwoPrice = dayTwoPrices/numberOfItems;
    cluster.mean = cluster.dayOnePrice/2 + cluster.dayTwoPrice/2;

    return cluster;
}
function createCluster(object) {
    var newObject = {
        objectsInThisGroup: [],
        dayOnePrice: object.dayOnePrice,
        dayTwoPrice: object.dayTwoPrice,
        mean: object.dayOnePrice + object.dayTwoPrice/2,
    };

    newObject.objectsInThisGroup.push(object);

    return newObject
}
function exists(object, array) {
    var found = false;

    for(var i=0; i<array.length; i++){
        var element = array[i];

        if(object.manufacturer === element.manufacturer
            && object.dayOnePrice === element.dayOnePrice
            && object.dayTwoPrice === element.dayTwoPrice
            && object.mean === element.mean
            && object.group === element.group)
        {
            found = true;
            break;
        }
    }

    return found;
}
function removeIfExists(object, cluster) {
    var newArray = [];

    for(var i=0; i<cluster.objectsInThisGroup.length; i++) {
        var element = cluster.objectsInThisGroup[i];

        if(object.individual !== element.individual)
        {
            newArray.push(element);
        }
    }

    cluster.objectsInThisGroup = newArray;

    return cluster;
}
function getPricesSorted(dataSet, isDayOne) {
    var prices = [];

    if (isDayOne) {
        dataSet.forEach((element) => prices.push(element.dayOnePrice));
    } else {
        dataSet.forEach((element) => prices.push(element.dayTwoPrice));
    }

    prices = sortRef.sort(prices, false);

    return prices;
}
function getMinimumCluster(dataSet) {
    var curMinimumElement = null;

    console.log('Getting minimum cluster');

    dataSet.forEach(function(element) {
        if(curMinimumElement == null) {
            curMinimumElement = element;
        } else {
            if (element.dayOnePrice < curMinimumElement.dayOnePrice
                    && element.dayTwoPrice < curMinimumElement.dayTwoPrice)
            {
                curMinimumElement = element;
            }
        }
    });

    curMinimumElement.group = 'minElement';

    var cluster = createCluster(curMinimumElement);

    return cluster;
}
function getMaximumCluster(dataSet) {
    var curMaximumElement = null;

    console.log('Getting maximum cluster');

    dataSet.forEach(function(element) {
        if(curMaximumElement == null) {
            curMaximumElement = element;
        } else {
            if (element.dayOnePrice > curMaximumElement.dayOnePrice
                && element.dayTwoPrice > curMaximumElement.dayTwoPrice)
            {
                curMaximumElement = element;
            }
        }
    });

    curMaximumElement.group = 'maxElement';

    var cluster = createCluster(curMaximumElement);

    return cluster;
}

module.exports.initDataSet = initDataSet;
module.exports.getPricesSorted = getPricesSorted;
module.exports.getMaximumCluster = getMaximumCluster;
module.exports.getMinimumCluster = getMinimumCluster;
module.exports.exists = exists;
module.exports.recalculateClusterMean = recalculateClusterMean;
module.exports.removeIfExists = removeIfExists;