import capitalize  from "../../src/capitalize";

const lowerCase = "testing"
const upperCase = "TESTING"
const mixedCase =  "tEsTiNg"
const number = 123

describe("capitalize.js unit tests", () => {
  test("should capitalize the first letter", () => {
    expect(capitalize(lowerCase)).toBe("Testing");
  });
  test("should capitalize the first letter and rest lowercase", () => {
    expect(capitalize(upperCase)).toBe("Testing");
  });
  test("should capitalize the first letter and rest lowercase", () => {
    expect(capitalize(mixedCase)).toBe("Testing");
  });
  test("convert number to string", () => {
    expect(capitalize(number)).toBe("123");
  });
});
