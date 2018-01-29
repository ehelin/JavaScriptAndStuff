function getGradientDescentDataSetOne() {
    const dataSets =  [
        [
            {x1: 'x', y: 'y', line: 'line', xCount: 1},
            {x1: 1, y: 1, line: 0, xCount: 1},
            {x1: 2, y: 2, line: 0, xCount: 1},
            {x1: 3, y: 3, line: 0, xCount: 1},
            {x1: 4, y: 4, line: 0, xCount: 1},
            {x1: 5, y: 5, line: 0, xCount: 1},
        ],
        //predictions
        [
            {x1: 1, y: 0, xCount: 1},
            {x1: 2, y: 0, xCount: 1},
            {x1: 3, y: 0, xCount: 1},
            {x1: 4, y: 0, xCount: 1},
            {x1: 5, y: 0, xCount: 1},
            {x1: 6, y: 0, xCount: 1},
            {x1: 7, y: 0, xCount: 1},
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
function getGradientDescentDataSetTwo() {
    const dataSets =  [
        [
            {x1: 'x', y: 'y', line: 'line', xCount: 1},
            {x1: 1, y: 1, line: 0, xCount: 1},
            {x1: 2, y: 3, line: 0, xCount: 1},
            {x1: 4, y: 3, line: 0, xCount: 1},
            {x1: 3, y: 2, line: 0, xCount: 1},
            {x1: 5, y: 5, line: 0, xCount: 1},
        ],
        //predictions
        [
            {x1: 1, y: 0, xCount: 1},
            {x1: 2, y: 0, xCount: 1},
            {x1: 3, y: 0, xCount: 1},
            {x1: 4, y: 0, xCount: 1},
            {x1: 5, y: 0, xCount: 1},
            {x1: 6, y: 0, xCount: 1},
            {x1: 7, y: 0, xCount: 1},
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
function getGradientDescentDataSetThree() {
    const dataSets =  [
        [
            {x1: 'milesTraveled', x2: 'numDeliveries', x3: 'gasPrice', y: 'y', line: 'line', xCount: 3},
            {x1: 89, x2: 4, x3: 3.84, y:7, line: 0, xCount: 3},
            {x1: 66, x2: 1, x3: 3.19, y:5.4, line: 0, xCount: 3},
            {x1: 78, x2: 3, x3: 3.78, y:6.6, line: 0, xCount: 3},
            {x1: 111, x2: 6, x3: 3.89, y:7.4, line: 0, xCount: 3},
            {x1: 44, x2: 1, x3: 3.57, y:4.8, line: 0, xCount: 3},
            {x1: 77, x2: 3, x3: 3.57, y:6.4, line: 0, xCount: 3},
            {x1: 80, x2: 3, x3: 3.03, y:7, line: 0, xCount: 3},
            {x1: 66, x2: 2, x3: 3.51, y:5.6, line: 0, xCount: 3},
            {x1: 109, x2: 5, x3: 3.54, y:7.3, line: 0, xCount: 3},
            {x1: 76, x2: 3, x3: 3.25, y:6.4, line: 0, xCount: 3},
        ],
        //predictions
        [
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

            {x1: 81, x2: 7, x3: 5, line: 0, xCount: 3},
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
module.exports.getGradientDescentDataSetThree = getGradientDescentDataSetThree;