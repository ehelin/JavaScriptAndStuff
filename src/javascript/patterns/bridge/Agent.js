var Agent = {
    name: undefined,
    office: undefined,
    giveSupport: function() {
        console.log('Agent giveSupport -> should not be called');
    },
};

module.exports.Agent = Agent;