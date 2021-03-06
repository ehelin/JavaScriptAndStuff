function getWeatherDiscreteDataSets() {
    // NOTE: Base entropy is first element in each dataSet (i.e. decision) - always true/false are only values
    return [
        {
            Decision: false,
            Outlook: 'Sunny',
            Temp: 'Hot',
            Humidity: 'High',
            Wind: 'Weak',
        },
        {
            Decision: false,
            Outlook: 'Sunny',
            Temp: 'Hot',
            Humidity: 'High',
            Wind: 'Strong',
        },
        {
            Decision: true,
            Outlook: 'Overcast',
            Temp: 'Hot',
            Humidity: 'High',
            Wind: 'Weak',
        },
        {
            Decision: true,
            Outlook: 'Rain',
            Temp: 'Mild',
            Humidity: 'High',
            Wind: 'Weak',
        },
        {
            Decision: true,
            Outlook: 'Rain',
            Temp: 'Cool',
            Humidity: 'Normal',
            Wind: 'Weak',
        },
        {
            Decision: false,
            Outlook: 'Rain',
            Temp: 'Cool',
            Humidity: 'Normal',
            Wind: 'Strong',
        },
        {
            Decision: true,
            Outlook: 'Overcast',
            Temp: 'Cool',
            Humidity: 'Normal',
            Wind: 'Strong',
        },
        {
            Decision: false,
            Outlook: 'Sunny',
            Temp: 'Mild',
            Humidity: 'High',
            Wind: 'Weak',
        },
        {
            Decision: true,
            Outlook: 'Sunny',
            Temp: 'Cool',
            Humidity: 'Normal',
            Wind: 'Weak',
        },
        {
            Decision: true,
            Outlook: 'Rain',
            Temp: 'Mild',
            Humidity: 'Normal',
            Wind: 'Weak',
        },
        {
            Decision: true,
            Outlook: 'Sunny',
            Temp: 'Mild',
            Humidity: 'Normal',
            Wind: 'Strong',
        },
        {
            Decision: true,
            Outlook: 'Overcast',
            Temp: 'Mild',
            Humidity: 'High',
            Wind: 'Strong',
        },
        {
            Decision: true,
            Outlook: 'Overcast',
            Temp: 'Hot',
            Humidity: 'Normal',
            Wind: 'Weak',
        },
        {
            Decision: false,
            Outlook: 'Rain',
            Temp: 'Mild',
            Humidity: 'High',
            Wind: 'Strong',
        },
    ];
}

function getWeatherDiscreteRunDataSets() {

}

module.exports.getWeatherDiscreteDataSets = getWeatherDiscreteDataSets;