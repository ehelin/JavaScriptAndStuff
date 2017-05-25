var ref = require('./AbsExampleComponent');

function demoCompositePattern() {
    console.log('inside demoCompositePattern');

    const root = createComponent('root', false);

    var level2Obj1 = createComponent('level 2-Object 1', false);
    var level2Obj2 = createComponent('level 2-Object 2', false);

    addComponents(root, level2Obj1, level2Obj2);

    var level3Obj1 = createComponent('level 3-Object 1', true);
    var level3Obj2 = createComponent('level 3-Object 2', true);

    addComponents(level2Obj1, level3Obj1, level3Obj2);

    var level3Obj3 = createComponent('level 3-Object 3', true);
    var level3Obj4 = createComponent('level 3-Object 4', true);

    addComponents(level3Obj2, level3Obj3, level3Obj4);

    console.log('listAllComponents: ');
    root.listAllComponents();
}
function addComponents(masterComponent, componentOne, componentTwo) {
    console.log('adding ' + masterComponent.name + ' components...');

    masterComponent.addComponent(componentOne);
    masterComponent.addComponent(componentTwo);

    console.log(''); //formatting
}
function createComponent(name, isLeaf) {
    var component = createComponentObject(name, isLeaf);
    display(component);

    return component;
}
function display(component) {
    console.log('created ' + component.name + ' node, identity is...');
    component.identifyMe();
    console.log('');  //formatting
}
function createComponentObject(name, isLeaf) {
    const component = Object.create(ref.AbsExampleComponent);

    component.name = name;
    component.isLeaf = isLeaf;
    component.components = [];
    component.exampleComponents = [];
    component.identifyMe = function() {
        console.log('(name/isLeaf) - (' + this.name + '/' + this.isLeaf + ') identifyMe()');
    };
    component.addComponent = function(component) {
        this.exampleComponents.push(component);
    };
    component.getComponent = function(component) {
        return this.exampleComponents.forEach((curComponent) => {
            if (curComponent.name === component.name
                && curComponent.isLeaf === component.isLeaf) {
                return curComponent;
            }
        })
    };
    component.deleteComponent = function(component) {
        var localComponents = [];

        for(var i=0; i<localComponents.length; i++){
            var curComponent = exampleComponents[i];

            if (curComponent.name !== component.name
                && curComponent.isLeaf !== component.isLeaf) {
                localComponents.push(curComponent);
            }
        }

        this.components = localComponents;
    };
    component.listAllComponents = function() {
        this.identifyMe();

        return this.exampleComponents.forEach((curComponent) => {
            return curComponent.listAllComponents();
        })
    };

    return component;
}

module.exports.demoCompositePattern = demoCompositePattern;