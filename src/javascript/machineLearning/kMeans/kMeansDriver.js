var utilsRef = require('./kMeansUtility');

function demoKMeans() {
    console.log('inside demoKMeans');

    var dataSet = utilsRef.initDataSet();
    var minCluster = utilsRef.getMinimumCluster(dataSet);
    var maxCluster = utilsRef.getMaximumCluster(dataSet);

    console.log('Adding other elements to a cluster by comparing their mean to each cluster and assiging to the closest');
    dataSet.forEach(function(object) {
        if(!utilsRef.exists(object, minCluster.objectsInThisGroup)
            && !utilsRef.exists(object, maxCluster.objectsInThisGroup)) {

            var distanceToMin = Math.abs(object.mean - minCluster.mean);
            var distanceToMax = Math.abs(object.mean - maxCluster.mean);

            if (distanceToMin < distanceToMax) {
                minCluster.objectsInThisGroup.push(object);
                minCluster = utilsRef.recalculateClusterMean(minCluster);
            } else {
                maxCluster.objectsInThisGroup.push(object);
                maxCluster = utilsRef.recalculateClusterMean(maxCluster);
            }
        }
    });

    console.log('Confirming each element is where it is supposed to by comparing its mean to both cluster means');
    dataSet.forEach(function(object) {
        var distanceToMin = Math.abs(object.mean - minCluster.mean);
        var distanceToMax = Math.abs(object.mean - maxCluster.mean);

        if (distanceToMin < distanceToMax && object.group && !utilsRef.exists(object, minCluster.objectsInThisGroup)) {
            minCluster.objectsInThisGroup.push(object);
        }

        if (distanceToMin > distanceToMax && object.group && !utilsRef.exists(object, maxCluster.objectsInThisGroup)) {
            maxCluster.objectsInThisGroup.push(object);
        }
    });

    console.log('minCluster');
    console.log(minCluster);

    console.log('maxCluster');
    console.log(maxCluster);
}

module.exports.demoKMeans = demoKMeans;