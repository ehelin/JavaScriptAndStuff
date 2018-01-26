function getGradientDescentDataSetOne() {
    const dataSets =  [
        [
            {x1: 'x', y: 'y', line: 'line', xCount: 0},
            {x1: 1,y: 1, line: 0, xCount: 1},
            {x1: 2,y: 3, line: 0, xCount: 1},
            {x1: 4,y: 3, line: 0, xCount: 1},
            {x1: 3,y: 2, line: 0, xCount: 1},
            {x1: 5,y: 5, line: 0, xCount: 1},
        ],
        //predictions
        [
            {x: 1,y: 0},
            {x: 2,y: 0},
            {x: 3,y: 0},
            {x: 4,y: 0},
            {x: 5,y: 0},
            {x: 6,y: 0},
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

function getGradientDescentDataSetTwo() {
    const dataSets =  [
        [
            {x1: 'milesTraveled', x2: 'numDeliveries', x3: 'gasPrice', line: 'line', xCount: 0},
            {x1: 89, x2: 4, x3: 3.84, line: 0, xCount: 3},
            {x1: 66, x2: 1, x3: 3.19, line: 0, xCount: 3},
            {x1: 78, x2: 3, x3: 3.78, line: 0, xCount: 3},
            {x1: 111, x2: 6, x3: 3.89, line: 0, xCount: 3},
            {x1: 44, x2: 1, x3: 3.57, line: 0, xCount: 3},
            {x1: 77, x2: 3, x3: 3.57, line: 0, xCount: 3},
            {x1: 80, x2: 3, x3: 3.03, line: 0, xCount: 3},
            {x1: 66, x2: 2, x3: 3.51, line: 0, xCount: 3},
            {x1: 109, x2: 5, x3: 3.54, line: 0, xCount: 3},
            {x1: 76, x2: 3, x3: 3.25, line: 0, xCount: 3},
        ],
        //predictions
        [
            {x: 89,y: 4, z:3.84 , line: 0},
        ],
        // //min/max
        // [
        //     {minX: 0, maxX: 7, minY: 0, maxY: 7}
        // ],
        // //cost function
        // [
        //     {x: 'x', y: 'y', line: 'line'},
        //     {x: 0,y: 0, line: 0},
        //     {x: 0,y: 0, line: 0},
        //     {x: 0,y: 0, line: 0},
        //     {x: 0,y: 0, line: 0},
        //     {x: 0,y: 0, line: 0},
        // ],
    ];

    return dataSets;
}

module.exports.getGradientDescentDataSetOne = getGradientDescentDataSetOne;
module.exports.getGradientDescentDataSetTwo = getGradientDescentDataSetTwo;