function demoBubbleSort() {
    console.log('inside demoBubbleSort()');

    var elements = [254, 9, 3, 23, 10, 0, 155, 7, 99, 352];
    displayElements(elements);
    sort(elements, true);
}

function sort(elements, display) {
    for(var outer=0; outer<elements.length-1; outer++) {

        for(var inner=0; inner<elements.length-1; inner++) {
            if (inner + 1 >= elements.length) {
                break;
            }

            var one = elements[inner];
            var two = elements[inner + 1];

            if (one > two){
                elements[inner] = two;
                elements[inner + 1] = one;
            }

            if (display) {
                displayElements(elements);
            }
        }
    }

    if (display) {
        displayElements(elements);
    }

    return elements;
}

function displayElements(elements) {
    var line = '';

    elements.forEach( function (element) {
        line += element + ',';
    });

    line = line.substring(0, line.length - 1);

    console.log('elements', line);

}

module.exports.demoBubbleSort = demoBubbleSort;
module.exports.sort = sort;