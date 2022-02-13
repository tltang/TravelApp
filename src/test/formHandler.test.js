// Import the js file to test
import { handleSubmit, postData, updateUI } from '../client/js/formHandler'
import { onBlur,onFocus, onBlur1, onFocus1, onBlur2, onFocus2 } from '../client/js/formHandler'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionalities exist", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

    // function handleSubmit
    test('verify handleSubmit exist', () => {
        expect(handleSubmit).toBeDefined();
    })

    // function postData
    test('verify postData exist', () => {
        expect(postData).toBeDefined();
    })

    // function updateUI
    test('verify updateUI exist', () => {
        expect(updateUI).toBeDefined();
    })

    // function onBlur
    test('verify onBlur exist', () => {
        expect(onBlur).toBeDefined();
    })

    // function onFocus
    test('verify onFocus exist', () => {
        expect(onFocus).toBeDefined();
    })

    // function onBlur1
    test('verify onBlur1 exist', () => {
        expect(onBlur1).toBeDefined();
    })

    // function onFocus1
    test('verify onFocus1 exist', () => {
        expect(onFocus1).toBeDefined();
    })

    // function onBlur2
    test('verify onBlur2 exist', () => {
        expect(onBlur2).toBeDefined();
    })

    // function onFocus2
    test('verify onFocus2 exist', () => {
        expect(onFocus2).toBeDefined();
    })
});