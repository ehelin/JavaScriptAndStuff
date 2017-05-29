var sortRef = require('../../sorting/bubble/bubbleDriver');

function initDataSet() {
    var dataSet = [];
    //var dayOnePrices = [3.5, 2.99, 3.1, 3.05, 2.20, 2.8];
    //var dayTwoPrices = [3.55, 2.85, 3.12, 3.03, 2.19, 2.56];
    //var dayOnePrices = [3.5, 2.99, .5, 3.05, 1.2, 2.8];
    //var dayTwoPrices = [3.55, 2.85, .8, 3.03, 1.1, 2.56];
    var dayOnePrices = [3.5, .2, .5, 3.05, 1.2, 2.8];
    var dayTwoPrices = [3.55, 2.85, .8, 3.03, 5.4, 2.56];

    console.log('Initializing dataset');

    for(var i=0; i<6; i++){
        var element = {
            manufacturer: 'eggManufacturer' + i.toString(),
            dayOnePrice: dayOnePrices[i],
            dayTwoPrice: dayTwoPrices[i],
            mean: dayOnePrices[i] + dayTwoPrices[i]/2,
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

    cluster.dayOnePriceMean = dayOnePrices/numberOfItems;
    cluster.dayTwoPriceMean = dayTwoPrices/numberOfItems;
    cluster.mean = cluster.dayOnePriceMean + cluster.dayTwoPriceMean/2;

    return cluster;
}

function createCluster(object) {
    var newObject = {
        objectsInThisGroup: [],
        dayOnePriceMean: object.dayOnePrice,
        dayTwoPriceMean: object.dayTwoPrice,
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