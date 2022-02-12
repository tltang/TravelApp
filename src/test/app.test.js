// Import the js file to test
import app from '../server/server'

// // The describe() function takes two arguments - a string description, and a test suite as a callback function.
// // A test suite may contain one or more related tests
describe("Testing the input validation functionalities", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

    // function checkForInput
    test('enter a string', () => {
        expect(checkForInput("Enter a Phrase")).toBe(true);
    })
    test('NOT enter a string', () => {
        expect(checkForInput("")).toBe(false);
    })

});
