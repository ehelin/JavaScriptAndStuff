function getDataSetOne() {
    const dataSets =  [
        [
            {x: 'x', y: 'y', line: 'line'},
            {x: 1,y: 1, line: 0},
            {x: 2,y: 3, line: 0},
            {x: 4,y: 3, line: 0},
            {x: 3,y: 2, line: 0},
            {x: 5,y: 5, line: 0},
        ],
        //predictions
        [
            {x: 7,y: 0},
        ],
        //min/max
        [
            {minX: 0, maxX: 7, minY: 0, maxY: 7}
        ],
        //cost function
        [
            {x: 'x', y: 'y', line: 'line'},
            {x: 0,y: 0, line: 0},
            {x: 0,y: 0, line: 0},
            {x: 0,y: 0, line: 0},
            {x: 0,y: 0, line: 0},
            {x: 0,y: 0, line: 0},
        ],
    ];


    return dataSets;
}

function getDataSetTwo() {
    const dataSets =  [
        [
            {x: 'x', y: 'y', line: 'line'},
            {x: 1,y: 1, line: 0},
            {x: 2,y: 2, line: 0},
            {x: 3,y: 3, line: 0},
        ],
        //predictions
        [
            {x: 4,y: 0},
        ],
        //min/max
        [
            {minX: 0, maxX: 4, minY: 0, maxY: 4}
        ],
        //cost function
        [
            {x: 'x', y: 'y', line: 'line'},
            {x: 0,y: 0, line: 0},
            {x: 0,y: 0, line: 0},
            {x: 0,y: 0, line: 0},
        ],
    ];

    return dataSets;
}

function getDataSetThree() {
    const dataSets =  [
        [
            {x: 'square footage', y: 'house price', line: 'line'},
            {x: 2104, y: 399900, line: 0},
            {x: 1600, y: 329900, line: 0},
            {x: 2400, y: 369000, line: 0},
            {x: 1416, y: 232000, line: 0},
            {x: 3000, y: 539900, line: 0},
            {x: 1985, y: 299900, line: 0},
            {x: 1534, y: 314900, line: 0},
            {x: 1427, y: 198999, line: 0},
            {x: 1380, y: 212000, line: 0},
            {x: 1494, y: 242500, line: 0},
            {x: 1940, y: 239999, line: 0},
            {x: 2000, y: 347000, line: 0},
            {x: 1890, y: 329999, line: 0},
            {x: 4478, y: 699900, line: 0},
            {x: 1268, y: 259900, line: 0},
            {x: 2300, y: 449900, line: 0},
            {x: 1320, y: 299900, line: 0},
            {x: 1236, y: 199900, line: 0},
            {x: 2609, y: 499998, line: 0},
            {x: 3031, y: 599000, line: 0},
            {x: 1767, y: 252900, line: 0},
            {x: 1888, y: 255000, line: 0},
            {x: 1604, y: 242900, line: 0},
            {x: 1962, y: 259900, line: 0},
            {x: 3890, y: 573900, line: 0},
            {x: 1100, y: 249900, line: 0},
            {x: 1458, y: 464500, line: 0},
            {x: 2526, y: 469000, line: 0},
            {x: 2200, y: 475000, line: 0},
            {x: 2637, y: 299900, line: 0},
            {x: 1839, y: 349900, line: 0},
            {x: 1000, y: 169900, line: 0},
            {x: 2040, y: 314900, line: 0},
            {x: 3137, y: 579900, line: 0},
            {x: 1811, y: 285900, line: 0},
            {x: 1437, y: 249900, line: 0},
            {x: 1239, y: 229900, line: 0},
            {x: 2132, y: 345000, line: 0},
            {x: 4215, y: 54900, line: 0},
            {x: 2162, y: 287000, line: 0},
            {x: 1664, y: 368500, line: 0},
            {x: 2238, y: 329900, line: 0},
            {x: 2567, y: 314000, line: 0},
            {x: 1200, y: 299000, line: 0},
            {x: 852, y: 179900, line: 0},
            {x: 1852, y: 299900, line: 0},
            {x: 1203, y: 239500, line: 0},
        ],
        //predictions
        [
            {x: 4215,y: 0},  //638294.5801895463  vs 549000
            {x: 4218,y: 0},  //638698.156052707
            {x: 852,y: 0},  //185886.03758637467 vs 179900
            {x: 853,y: 0},  //186020.56287409493
        ],
        //min/max
        [
            {minX: 0, maxX: 4478, minY: 0, maxY: 699900}
        ],
        //cost function
        [
            {x: 'square footage', y: 'house price', line: 'line'},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
            {x: 0, y: 0, line: 0},
        ],
    ];

    return dataSets;
}

module.exports.getDataSetOne = getDataSetOne;
module.exports.getDataSetTwo = getDataSetTwo;
module.exports.getDataSetThree = getDataSetThree;