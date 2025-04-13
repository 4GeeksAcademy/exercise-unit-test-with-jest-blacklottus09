const {sum, fromYenToPound} = require("./app.js");

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 167.455 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 167.455; 
     expect(fromDollarToYen(3.5)).toBe(586.0925);
})

test("One yen should be 136.155 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(3.5);
    const expected = 3.5 * 136.155; 
     expect(fromYenToPound(3.5)).toBe(476.5425);
})