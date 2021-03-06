// Import the js file to test
import { fetchZip, fetchWeather, fetchImage } from '../client/js/API'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
// per Udacity knowledge base 757333, rather than trying to
// figure out the jest config and test mocking fetch functions, I will just test if these functions exist
describe("Testing the API functionalities exist", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

    // function fetchZip
    test('verify fetchZip exist', () => {
        expect(fetchZip).toBeDefined();
    })

    // function fetchWeather
    test('verify fetchWeather exist', () => {
        expect(fetchWeather).toBeDefined();
    })

    // function fetchImage
    test('verify fetchImage exist', () => {
        expect(fetchImage).toBeDefined();
    })

});

