// TODO - change of plans...figure out how to calculate coefficients in simple and multiple linear regression (i.e. y = coefficient0 + coefficient1x1 + coefficient2x2 + coefficientmxm)


// Algorithm

// NOTES
// * Adding more independent variables that makes things worse is called overfitting
// * When two independent variables are related to each other, its called multicolleanarity
// * Analyzing the independent variable relationships with each other should be analyzed
//   so that (ideally) they are related to the dependent variable, but not each other

// * multiple regression model - y = B0 + B1X1 + B2X2 + ... BxXx + epsilon
// y = what we want to calculate
// epsilon = error
// B0 is intercept

// * multiple regression equation - E(y) = B0 + B1X1 + B2X2 + ... BxXx
// epsilon (i.e. error) is assumed to be 0 here

//* estimated multiple regression equation = y = = b0 + b1x1 + b2x2 + ... bxxx

//https://www.youtube.com/watch?v=2I_AYIECCOQ&list=PLIeGtxpvyG-IqjoU8IiF0Yu1WtxNq_4z-&index=2
// * process
// - compare each independent variable to y (2d charts) - are they related
// -- if no relationship, do not use that variable in the multiple regression (to be used, there should be a string linear relatiohship between it and the dependant variable)
// - compare each independent variable to each other (2d charts)
// -- if there is a relationship, do not use one of the variables (to be used, they should not be related)

function demoMultipleVariableLinearRegression(dataSetNumber) {
    console.log('inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber);

    return 'inside var demoMultipleVariableLinearRegression - Algorithm 1 - Dataset' + dataSetNumber;
}

module.exports.demoMultipleVariableLinearRegression = demoMultipleVariableLinearRegression;