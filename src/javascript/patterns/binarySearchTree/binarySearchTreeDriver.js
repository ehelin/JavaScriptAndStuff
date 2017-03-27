let values = [1,8,65,34,90,114,-34,-125,3,75,-2];

function demoBinarySearchTree () {
    console.log('inside demoBinarySearchTree');

    console.log('building tree ----------- -----')
    let root = buildTree(null);
    console.log('');

    console.log('traversing tree ----------------')
    traverseTree(root, null);
};

function traverseTree(node, left) {
    if (node !== null){
        if (left === null)
            console.log(node.value);
        else if (left === true)
            console.log('left value: ' + node.value);
        else if (left === false)
            console.log('right value: ' + node.value);
    }

    if (node.leftNode != null) {
        traverseTree(node.leftNode, true);
    }

    if (node.rightNode !== null) {
        traverseTree(node.rightNode, false);
    }
}
function buildTree(node){
    //entry condition (i.e first node)
    if (node === null) {
        node = createNode(values.pop());
    }

    while(values.length > 0){
        let curValue = values.pop();
        console.log('currentValue: ' + curValue + ', value array length: ' + values.length);

        if (curValue < node.value){
            if (node.leftNode === null){
                node.leftNode = createNode(curValue);
                node.leftNode.parent = node;
                buildTree(node.leftNode);
            }
        }
        else
        {
            if (node.rightNode === null){
                node.rightNode = createNode(curValue);
                node.rightNode.parent = node;
                buildTree(node.rightNode);
            }
        }
    }

    return node;
}
function createNode(value){
    return {
        value: value,
        parent: null,
        leftNode: null,
        rightNode: null,
    };
}

module.exports.demoBinarySearchTree = demoBinarySearchTree;