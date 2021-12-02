import toString from "../../src/toString";

describe("toString.js", () => {
  test("should convert number to string", () => {
    const result = toString(-0);
    expect(result).toBeString();
    expect(result).toBe("-0");
  });
  test("should convert null to empty string", () => {
    const result = toString(null);
    expect(result).toBeString();
    expect(result).toBe("");
  });
  test("should convert undefined to empty string", () => {
    const result = toString(undefined);
    expect(result).toBeString();
    expect(result).toBe("");
  });
  test("should convert array of numbers to string", () => {
    const result = toString([1, 2, 3]);
    expect(result).toBeString();
    expect(result).toBe("1,2,3");
  });
  test("should convert array of numbers and null to string", () => {
    const result = toString([1, null, 3]);
    expect(result).toBeString();
    expect(result).toBe("1,,3");
  });
  test("should convert Date object to string", () => {
    const result = toString(new Date());
    expect(result).toBeString();
  });
  test("should convert object to string", () => {
    const result = toString({ test: 1 });
    expect(result).toBeString();
    expect(result).toBe('{test:1}') // returns "[object Object]" instead
  });

  test("should convert Symbol to string", () => {
    const result = toString(Symbol('test'));
    expect(result).toBeString();
  });

  // bad inputs
  test("no parameters given should throw error", () => {
    const result = toString();
    expect(() => result).toThrowError(); // returns undefined instead
  });
  test("bad input should throw error", () => {
    expect(() => 
      toString(/[^, ]+/g)).toThrowError(); // returns a string of the regex instead
  })
});
