import capitalize from "../../src/capitalize"

const lowerCase = "testing"
const upperCase = "TESTING"
const mixedCase = "tEsTiNg"
const number = 123

describe("capitalize.js", () => {
  test("should capitalize the first letter", () => {
    expect(capitalize(lowerCase))
    .toBe("Testing")
    .toBeString()
  });
  test("should capitalize the first letter and rest lowercase", () => {
    expect(capitalize(upperCase))
    .toBe("Testing")
    .toBeString()
  });
  test("should capitalize the first letter and rest lowercase", () => {
    expect(capitalize(mixedCase))
    .toBeString()
    .toBe("Testing")
  });
  test("should convert number to string", () => {
    expect(capitalize(number))
    .toBe("123")
    .toBeString()
  });
});
