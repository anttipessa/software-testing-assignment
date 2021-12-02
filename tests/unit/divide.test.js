import divide from "../../src/divide";

// test numbers
const dividend1 = -1;
const dividend2 = 0;
const dividend3 = 1;
const divisor1 = -1;
const divisor2 = 0;
const divisor3 = 1;

const badInput = 'I am not a number'

describe("divide.js", () => {
  
// pairwise tests
describe("divide.js pairWise tests", () => {
  test("-1/-1 should be 1", () => {
    const result = divide(dividend1, divisor1)
    expect(result).toBe(1);
  });
  test("-1/0 should throw error", () => {
    expect(() => 
      divide(dividend1, divisor2)).toThrowError();
  });
  test("-1/1 should be -1", () => {
    const result = divide(dividend1, divisor3)
    expect(result).toBe(-1);
  });
  test("0/0 should throw error", () => {
    expect(() => 
      divide(dividend2, divisor2)).toThrowError();
  });
  test("0/1 should be 0", () => {
    const result = divide(dividend2, divisor3)
    expect(result).toBe(0);
  });
  test("0/-1 sohuld be 0", () => {
    const result = divide(dividend2, divisor1)
    expect(result).toBe(0);
  });
  test("1/1 should be 1", () => {
    const result = divide(dividend3, divisor3)
    expect(result).toBe(1);
  });
  test("1/-1 sohuld be -1", () => {
    const result = divide(dividend3, divisor1)
    expect(result).toBe(0);
  });
  test("1/0 should throw error", () => {
    expect(() => 
      divide(dividend3, divisor2)).toThrowError();
  });
});

//tests with bad input parameters
describe("divide.js bad input tests", () => {
  test("bad input as dividend should throw error", () => {
    expect(() => 
      divide(badInput, divisor1)).toThrowError();
  });
  test("bad input as divisor should throw error", () => {
    expect(() =>
      divide(dividend1, badInput)).toThrowError();
  });
  test("bad input as both dividend and divisor should throw error", () => {
    expect(() => 
      divide(badInput, badInput)).toThrowError();
  });
});

});