import divide from "../../src/divide";

describe("divide.js", () => {
  test("should divide two numbers correctly", () => {
    const result = divide(6, 4);
    expect(result).toBe(1.5);
  });
});
