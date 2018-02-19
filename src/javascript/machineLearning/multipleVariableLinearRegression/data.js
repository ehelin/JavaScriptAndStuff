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

            // new predictions not in test set
            {x1: 6, y: 0, xCount: 1},
            {x1: 7, y: 0, xCount: 1},
        ],
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

            // new predictions not in test set
            {x1: 6, y: 0, xCount: 1},
            {x1: 7, y: 0, xCount: 1},
        ],
    ];

    return dataSets;
}
function getGradientDescentDataSetThree() {
    const dataSets =  [
        [
            {x1: 'x1', x2: 'x2', y: 'y', line: 0, xCount: 2},
            {x1: 40, x2: 25, y: 1, line: 0, xCount: 2},
            {x1: 45, x2: 20, y: 2, line: 0, xCount: 2},
            {x1: 38, x2: 30, y: 1, line: 0, xCount: 2},
            {x1: 50, x2: 30, y: 3, line: 0, xCount: 2},
            {x1: 48, x2: 28, y: 2, line: 0, xCount: 2},
            {x1: 55, x2: 30, y: 3, line: 0, xCount: 2},
            {x1: 53, x2: 34, y: 3, line: 0, xCount: 2},
            {x1: 55, x2: 36, y: 4, line: 0, xCount: 2},
            {x1: 58, x2: 32, y: 4, line: 0, xCount: 2},
            {x1: 40, x2: 34, y: 3, line: 0, xCount: 2},
            {x1: 55, x2: 38, y: 5, line: 0, xCount: 2},
            {x1: 48, x2: 28, y: 3, line: 0, xCount: 2},
            {x1: 45, x2: 30, y: 3, line: 0, xCount: 2},
            {x1: 55, x2: 36, y: 2, line: 0, xCount: 2},
            {x1: 60, x2: 34, y: 4, line: 0, xCount: 2},
            {x1: 60, x2: 38, y: 5, line: 0, xCount: 2},
            {x1: 60, x2: 42, y: 5, line: 0, xCount: 2},
            {x1: 65, x2: 38, y: 5, line: 0, xCount: 2},
            {x1: 50, x2: 34, y: 4, line: 0, xCount: 2},
            {x1: 58, x2: 38, y: 3, line: 0, xCount: 2},
        ],
        //predictions
        [
            {x1: 'x1', x2: 'x2', y: 'y', line: 0, xCount: 2},
            {x1: 40, x2: 25, y: 1, line: 0, xCount: 2},
            {x1: 45, x2: 20, y: 2, line: 0, xCount: 2},
            {x1: 38, x2: 30, y: 1, line: 0, xCount: 2},
            {x1: 50, x2: 30, y: 3, line: 0, xCount: 2},
            {x1: 48, x2: 28, y: 2, line: 0, xCount: 2},
            {x1: 55, x2: 30, y: 3, line: 0, xCount: 2},
            {x1: 53, x2: 34, y: 3, line: 0, xCount: 2},
            {x1: 55, x2: 36, y: 4, line: 0, xCount: 2},
            {x1: 58, x2: 32, y: 4, line: 0, xCount: 2},
            {x1: 40, x2: 34, y: 3, line: 0, xCount: 2},
            {x1: 55, x2: 38, y: 5, line: 0, xCount: 2},
            {x1: 48, x2: 28, y: 3, line: 0, xCount: 2},
            {x1: 45, x2: 30, y: 3, line: 0, xCount: 2},
            {x1: 55, x2: 36, y: 2, line: 0, xCount: 2},
            {x1: 60, x2: 34, y: 4, line: 0, xCount: 2},
            {x1: 60, x2: 38, y: 5, line: 0, xCount: 2},
            {x1: 60, x2: 42, y: 5, line: 0, xCount: 2},
            {x1: 65, x2: 38, y: 5, line: 0, xCount: 2},
            {x1: 50, x2: 34, y: 4, line: 0, xCount: 2},
            {x1: 58, x2: 38, y: 3, line: 0, xCount: 2},

            // new predictions not in test set
            {x1: 500, x2: 299, y: 3, line: 0, xCount: 2},
            {x1: 2, x2: 100, y: 3, line: 0, xCount: 2},
        ],
    ];

    return dataSets;
}

module.exports.getGradientDescentDataSetOne = getGradientDescentDataSetOne;
module.exports.getGradientDescentDataSetTwo = getGradientDescentDataSetTwo;
module.exports.getGradientDescentDataSetThree = getGradientDescentDataSetThree;