// TODO - start here and see if you can apply the 2 parameter version of the last blog post
//        to use 4 parameters (I think it will work)
// ---------------------------------------------------------------
// Initial state where the coefficients are initialized to 0
// B0 = 0
// B1 = 0
// B2 = 0
//
// alpha (aka learning rate) = .01 //arbitrary
//
// y = 0 + 0x1 + 0x2 + 0x3
// y aka as p(i)
// error = p(i) - y(i)
//
// ---------------------------------------------------------------
// {x1: 89, x2: 4, x3: 3.84, line: 0},
//
// B0 = 0
// B1 = 0
// B2 = 0
// B3 = 0
//
// p(i) = 0 + 0(89) + 0(4) + 0(3.84)
// p(i) = 0
// error = 0-1
// error = -1
//
// B0(t+1) = B0(t) – alpha * error
// B0 = 0 - .01 * -1
// B0 = .01
//
// B1(t+1) = B1(t) – alpha * error * x1
// B1 = 0 - .01 * -1 * 89
// B1 = 0 - .01 * -89
// B1 = 0 + .89
// B1 = .89
//
// B2(t+1) = B2(t) – alpha * error * x2
// B2 = 0 - .01 * -1 * 4
// B2 = 0 - .01 * -4
// B2 = 0 + .04
// B2 = .04
//
// B3(t+1) = B3(t) – alpha * error * x3
// B3 = 0 - .01 * -1 * 3.84
// B3 = 0 - .01 * -3.84
// B3 = 0 + .0384
// B3 = .0384
//
//
// --------------------------------------------------------------- 
// {x1: 66, x2: 1, x3: 3.19, line: 0}, 
// {x1: 78, x2: 3, x3: 3.78, line: 0}, 
// {x1: 111, x2: 6, x3: 3.89, line: 0},
//  {x1: 44, x2: 1, x3: 3.57, line: 0}, 
// {x1: 77, x2: 3, x3: 3.57, line: 0},
//  {x1: 80, x2: 3, x3: 3.03, line: 0}, 
// {x1: 66, x2: 2, x3: 3.51, line: 0}, 
// {x1: 109, x2: 5, x3: 3.54, line: 0}, 
// {x1: 76, x2: 3, x3: 3.25, line: 0},
