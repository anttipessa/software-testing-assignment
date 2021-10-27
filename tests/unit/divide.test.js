import divide from "../../src/divide";

// test numbers
const dividend1 = -1;
const dividend2 = 0;
const dividend3 = 1;
const divisor1 = -1;
const divisor2 = 0;
const divisor3 = 1;

describe("divide.js unit tests", () => {
    test("-1/-1 should be 1", () => {
        const result = divide(dividend1, divisor1)
        expect(divide.toBe(1));
    });
    test("-1/0 should not be possible", () => {
        expect(divide(dividend1, divisor2).toThrow(error));
    });
    test("-1/1 should be -1", () => {
        expect(divide(dividend1, divisor3).toBe(-1));
    });
});
