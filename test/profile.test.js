const { calculateSum } = require('../js/profile');

describe('Utility Functions', () => {
    test('calculates the sum of an array of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = calculateSum(numbers);
        expect(result).toBe(15);
    });

    test('returns 0 for an empty array', () => {
        const numbers = [];
        const result = calculateSum(numbers);
        expect(result).toBe(0);
    });

    test('calculates the sum of negative numbers', () => {
        const numbers = [-1, -2, -3];
        const result = calculateSum(numbers);
        expect(result).toBe(-6);
    });

    test('handles an array with mixed numbers', () => {
        const numbers = [-1, 2, -3, 4];
        const result = calculateSum(numbers);
        expect(result).toBe(2);
    });
});
