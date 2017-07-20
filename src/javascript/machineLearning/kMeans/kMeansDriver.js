var utilsRef = require('./kMeansUtility');

function demoKMeans() {
    console.log('inside demoKMeans');
    //var dayOnePrices = [3.5, .2, .5, 3.05, 1.2, 2.8];
    //var dayTwoPrices = [3.55, 2.85, .8, 3.03, 5.4, 2.56];
    var dayOnePrices = [1.0, 1.5, 3.0, 5.0, 3.5, 4.5, 3.5];
    var dayTwoPrices = [1.0, 2.0, 4.0, 7.0, 5.0, 5.0, 4.5];

    var dataSet = utilsRef.initDataSet(dayOnePrices, dayTwoPrices);
    //console.log(dataSet);

    processDataSet(dataSet);
}

function demoKMeansLargerDataSet() {
    console.log('inside demoKMeansLargerDataSet');

    var dayOnePrices = [95.0, 127.0, 44.0, 278.0, 193.0];
    var dayTwoPrices = [161.0, 214.0, 211.0, 205.0, 143.0];

    var dataSet = utilsRef.initDataSet(dayOnePrices, dayTwoPrices);

    processDataSet(dataSet);
}

function getDistance(dataSetElement, cluster) {
    var distance = Math.sqrt(Math.pow((cluster.dayOnePriceMean - dataSetElement.dayOnePrice), 2)
            + Math.pow((cluster.dayTwoPriceMean - dataSetElement.dayTwoPrice), 2));

    return distance;
}

function processDataSet(dataSet) {
    var minCluster = utilsRef.getMinimumCluster(dataSet);
    var maxCluster = utilsRef.getMaximumCluster(dataSet);

    console.log('Adding other elements to a cluster by comparing their mean to each cluster and assiging to the closest');
    dataSet.forEach(function(object) {
        object.distanceToMin = Math.abs(object.mean - minCluster.mean);
        object.distanceToMax = Math.abs(object.mean - maxCluster.mean);

        if(!utilsRef.exists(object, minCluster.objectsInThisGroup)
            && !utilsRef.exists(object, maxCluster.objectsInThisGroup)) {

            if (object.distanceToMin < object.distanceToMax) {
                minCluster.objectsInThisGroup.push(object);
                minCluster = utilsRef.recalculateClusterMean(minCluster);
            } else {
                maxCluster.objectsInThisGroup.push(object);
                maxCluster = utilsRef.recalculateClusterMean(maxCluster);
            }
        }
    });

    console.log('Confirming each element is where it is supposed to by comparing its mean to both cluster means');
    for(var i=0; i<dataSet.length; i++) {
        var object = dataSet[i];

        object.distanceToMin = Math.abs(object.mean - minCluster.mean);
        object.distanceToMax = Math.abs(object.mean - maxCluster.mean);

        if (object.distanceToMin < object.distanceToMax
                && !utilsRef.exists(object, minCluster.objectsInThisGroup)) {
            minCluster.objectsInThisGroup.push(object);
            maxCluster = utilsRef.removeIfExists(object, maxCluster);
            minCluster = utilsRef.recalculateClusterMean(minCluster);
        }

        if (object.distanceToMin > object.distanceToMax
                && !utilsRef.exists(object, maxCluster.objectsInThisGroup)) {
            maxCluster.objectsInThisGroup.push(object);
            minCluster = utilsRef.removeIfExists(object, minCluster);
            maxCluster = utilsRef.recalculateClusterMean(maxCluster);
        }
    }

    minCluster = utilsRef.recalculateClusterMean(minCluster);

    console.log('');
    console.log('minCluster --------------------------------------');
    minCluster.objectsInThisGroup.forEach(function(object) {
        console.log('Individual: ' + object.individual.toString()
            + ', dayOnePrice: ' + object.dayOnePrice.toString()
            + ', dayTwoPrice: ' + object.dayTwoPrice.toString())
    });
    console.log('minCluster: dayOnePrice: ' + minCluster.dayOnePrice.toString() + ', dayTwoPrice: ' + minCluster.dayTwoPrice.toString());

    console.log('');
    console.log('maxCluster ---------------------------------------');
    maxCluster.objectsInThisGroup.forEach(function(object) {
        console.log('Individual: ' + object.individual.toString()
            + ', dayOnePrice: ' + object.dayOnePrice.toString()
            + ', dayTwoPrice: ' + object.dayTwoPrice.toString())
    });
    console.log('maxCluster: dayOnePrice: ' + maxCluster.dayOnePrice.toString() + ', dayTwoPrice: ' + maxCluster.dayTwoPrice.toString());
}

module.exports.demoKMeans = demoKMeans;
module.exports.demoKMeansLargerDataSet = demoKMeansLargerDataSet;



// const numberOfClusters = 2;
// function processDataSetnew(dataSet) {
//     var minCluster = utilsRef.getMinimumCluster(dataSet);
//     var maxCluster = utilsRef.getMaximumCluster(dataSet);
//
//     var bigNumber = Math.pow(10, 10);
//     var cluster = 0;
//
//     for(var outer=0; outer<dataSet.length; outer++) {
//         var dataSetElement = dataSet[outer];
//         var minimum = bigNumber;
//
//         for(var clusterCtr=0; clusterCtr<numberOfClusters; clusterCtr++) {
//             var distance = getDistance(dataSetElement, minCluster);
//             if (distance < minimum) {
//                 minimum = distance;
//                 cluster = clusterCtr;
//             }
//         }
//
//         dataSetElement.group = cluster;
//         if(cluster === 0) {
//             minCluster.objectsInThisGroup.push(dataSetElement);
//         } else {
//             maxCluster.objectsInThisGroup.push(dataSetElement);
//         }
//
//         for(var clusterCtr=0; clusterCtr<numberOfClusters; clusterCtr++) {
//             var totalDayOnePrices = 0;
//             var totalDayTwoPrices = 0;
//             var totalDayPricesInCluster = 0;
//
//             for(var j=0; j<dataSet.length; j++) {
//                 var currentDataSetElement = dataSet[j];
//
//                 if (currentDataSetElement.group === clusterCtr) {
//                     totalDayOnePrices += currentDataSetElement.dayOnePrice;
//                     totalDayTwoPrices += currentDataSetElement.dayTwoPrice;
//                     totalDayPricesInCluster++;
//                 }
//             }
//
//             if(totalDayPricesInCluster>0) {
//                 if(clusterCtr === 0) {
//                     minCluster.dayOnePriceMean = totalDayOnePrices /totalDayPricesInCluster;
//                     minCluster.dayTwoPriceMean = totalDayTwoPrices /totalDayPricesInCluster;
//                 } else {
//                     maxCluster.dayOnePriceMean = totalDayOnePrices /totalDayPricesInCluster;
//                     maxCluster.dayTwoPriceMean = totalDayTwoPrices /totalDayPricesInCluster;
//                 }
//             }
//         }
//     }
//
//     console.log('minCluster');
//     console.log(minCluster);
//
//     console.log('maxCluster');
//     console.log(maxCluster);
// }