import toString from "../../src/toString";

describe("toString.js", () => {
  test("should convert number to string", () => {
    const result = toString(0);
    expect(result).toBeString();
    expect(result).toBe("0");
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
  test("should convert Date object to string", () => {
    const result = toString(new Date());
    expect(result).toBeString();
  });
  test("should convert object to string", () => {
    const result = toString({ test: 1 });
    expect(result).toBeString();
  });
});
