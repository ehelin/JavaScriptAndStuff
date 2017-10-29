function getDataSets() {
    const dataSets =  [
        {x: 1,y: 1},
        {x: 2,y: 3},
        {x: 4,y: 3},
        {x: 3,y: 2},
        {x: 5,y: 5},
    ];

    dataSets.forEach((dataSet) => {
        console.log(dataSet);
    });

    return dataSets;
}

module.exports.getDataSets = getDataSets;