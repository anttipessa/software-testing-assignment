import divide from "../../src/divide";

describe("divide.js", () => {
  
// pairwise tests
describe("divide.js pairWise tests", () => {
  test("-1/-1 should be 1", () => {
    const result = divide(-1, -1)
    expect(result).toBe(1);
  });
  test("-1/0 should throw error", () => {
    expect(() => 
      divide(-1, 0)).toThrowError();
  });
  test("-1/1 should be -1", () => {
    const result = divide(-1, 1)
    expect(result).toBe(-1);
  });
  test("0/0 should throw error", () => {
    expect(() => 
      divide(0, 0)).toThrowError(); // returns NaN instead
  });
  test("0/1 should be 0", () => {
    const result = divide(0, 1)
    expect(result).toBe(0);
  });
  test("0/-1 sohuld be 0", () => {
    const result = divide(0, -1)
    expect(result).toBe(0);
  });
  test("1/1 should be 1", () => {
    const result = divide(1, 1)
    expect(result).toBe(1);
  });
  test("1/-1 sohuld be -1", () => {
    const result = divide(1, -1)
    expect(result).toBe(0);
  });
  test("1/0 should throw error", () => {
    expect(() => 
      divide(1, 0)).toThrowError();
  });
});

//tests with bad input parameters
const badInput = 'I am not a number'

describe("divide.js bad input tests", () => {
  test("bad input as dividend should throw error", () => {
    expect(() => 
      divide(badInput, -1)).toThrowError();
  });
  test("bad input as divisor should throw error", () => {
    expect(() =>
      divide(-1, badInput)).toThrowError();
  });
  test("bad input as both dividend and divisor should throw error", () => {
    expect(() => 
      divide(badInput, badInput)).toThrowError();
  });
});

});