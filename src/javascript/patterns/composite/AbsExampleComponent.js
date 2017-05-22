var AbsExampleComponent = {
    name: undefined,
    isLeaf: false,
    components: undefined,
    identifyMe: function() {
        console.log('AbsExampleComponent identifyMe() - should not be called');
    },
    addComponent: function() {
        console.log('AbsExampleComponent addComponent() - should not be called');
    },
    getComponent: function() {
        console.log('AbsExampleComponent getComponent() - should not be called');
    },
    deleteComponent: function() {
        console.log('AbsExampleComponent deleteComponent() - should not be called');
    },
};

module.exports.AbsExampleComponent = AbsExampleComponent;