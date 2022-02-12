// Import the js file to test
import { handleSubmit } from '../client/js/formHandler'
import { handleSubmit3 } from '../client/js/formHandler'
import {createTripTable, appendTrip} from '../client/js/formHandler'
import { onBlur,onFocus } from '../client/js/formHandler'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionalities exist", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

    // function handleSubmit
    test('verify handleSubmit exist', () => {
        expect(handleSubmit).toBeDefined();
    })

    // function handleSubmit3
    test('verify handleSubmit2 exist', () => {
        expect(handleSubmit3).toBeDefined();
    })

    // function createTripTable
    test('verify createTripTable exist', () => {
        expect(createTripTable).toBeDefined();
    })

    // function appendTrip
    test('verify appendTrip exist', () => {
        expect(appendTrip).toBeDefined();
    })

    // function onBlur
    test('verify onBlur exist', () => {
        expect(onBlur).toBeDefined();
    })

    // function onFocus
    test('verify onFocus exist', () => {
        expect(onFocus).toBeDefined();
    })

});