//let values = [1,8,65,34,90,114,-34,-125,3,75,-2];
let values = [4,5,6,7,8,9,10];

const BLACK = 'black';
const RED = 'red';

function demoBinarySearchTree () {
    console.log('inside demoBinarySearchTree');
    console.log('NOTE: This is not complete and is on my to do list to complete :)')
    //unbalancedBinarySearchTree();
    //balancedBinarySearchTree();
};

//unbalanced binary search tree
function unbalancedBinarySearchTree(){
    console.log('inside unbalancedBinarySearchTree');

    console.log('building tree ----------- -----')
    let root = buildTree(null);
    console.log('');

    console.log('traversing tree ----------------')
    traverseTree(root, null);

}
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

//red-black balanced binary search tree
//https://en.wikipedia.org/wiki/Red%E2%80%93black_tree
function balancedBinarySearchTree()
{
    console.log('inside unbalancedBinarySearchTree');


}

function insert_case1(node){
    if(node.parent === null){
        node.color == BLACK;
    }
    else{
        insert_case2(node);
    }
}
function insert_case2(node){
    if (node.parent.color != BLACK) {
        insert_case3(node);
    }
    //else - tree is still valid
}
function insert_case3(node){
    let uncle = getUncle(node);
    let grandParent = null;

    if (uncle != null && uncle.color === RED){
        node.parent.color = BLACK;
        u.color = BLACK;
        grandParent = getGrandParent(node);
        grandParent.color = RED;
        insert_case1(grandParent);
    }
    else {
        insert_case4(node);
    }
}
function insert_case4(node){
    let grandParent = getGrandParent(node);

    if (node === node.parent.right && node.parent === grandParent.left){
        //rotate_left(node.parent);
        node = node.left;
    }
    else if (node === node.parent.left && node.parent === grandParent.right){
        //rotate_right(node.parent);
        node = node.right;
    }
    else {
        insert_case5(node);
    }
}
function insert_case5(node){
    let grandParent = getGrandParent(node);

    node.parent.color = BLACK;
    grandParent.color = RED;

    if (node === node.parent.left){
        //rotate_right(grandParent);
    }
    else {
        //rotate_left(grandParent);
    }
}

function getUncle(node){
    let uncle = null;
    let grandParent = getGrandParent(node);

    if (grandParent != null){
        if (node.parent === grandParent.left){;
            uncle = grandParent.right;
        }
        else {
            uncle = grandParent.left;
        }
    }

    return uncle;
}
function getGrandParent(node){
    let grandParent = null;

    if(node != null && node.parent != null && node.parent.parent != null){
        grandParent = node.parent.parent;
    }

    return grandParent;
}
function createNode(value){
    return {
        value: value,
        parent: null,
        left: null,
        right: null,
        color: RED,
    };
}

module.exports.demoBinarySearchTree = demoBinarySearchTree;