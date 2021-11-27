import capitalize from "../../src/capitalize"

const lowerCase = "testing"
const upperCase = "TESTING"
const mixedCase = "tEsTiNg"
const number = 123
const object = {testdata: "test"}

describe("capitalize.js", () => {
  test("should capitalize the first letter", () => {
    expect(capitalize(lowerCase)).toBe("Testing")
  });
  test("should capitalize the first letter and rest lowercase", () => {
    expect(capitalize(upperCase)).toBe("Testing")
  });
  test("should capitalize the first letter and convert rest lowercase", () => {
    expect(capitalize(mixedCase)).toBe("Testing")
  });
  test("should convert number to string", () => {
    expect(capitalize(number)).toBe("123")
  });
  test("should convert object to string", () => {
    expect(capitalize(object)).toBe('{testdata: "test"}')
  })
});
