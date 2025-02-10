// Import the function to test
import { validateInput } from "../client/js/validateInput";

// Client side test for input validation
describe("Testing the input validation function", () => {
    beforeAll(() => {
        // Mocking global alert to avoid ReferenceError
        global.alert = jest.fn();
    });

    test("validateInput() should return false for missing dates", () => {
        const userInput = { 
            to: "Amsterdam",
            from: "Boston",
            startDate: "",
            endDate: ""
        };

        const result = validateInput(userInput);
        expect(result).toBe(false); // validateInput should return false
        expect(global.alert).toHaveBeenCalledWith("Please select your dates"); // Check if alert was called
    });
});
