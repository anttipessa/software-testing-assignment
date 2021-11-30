import capitalize from "../../src/capitalize"

const lowerCase = "testing"
const upperCase = "TESTING"
const mixedCase = "tEsTiNg"
const number = 123
const sentence = "i am a sentence!"
const twoSentences = "i am a sentence! so am I!"
const twoSentences2 = "i am a sentence. so am I."
const twoSentences3 = "am I a sentence? i think i am."

// bad inputs
const object = {testdata: "test"}
const nullInput = null
const bool = true
const array = ["hi", "i'm", "a", "test", "array"]

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
  })
  test("should only capitalize the first letter", () => {
    expect(capitalize(sentence)).toBe("I am a sentence!")
  })
  test("should capitalize the first letter of both sentences", () => {
    expect(capitalize(twoSentences)).toBe("I am a sentence! So am I!")
  })
  test("should capitalize the first letter of both sentences", () => {
    expect(capitalize(twoSentences2)).toBe("I am a sentence. So am I.")
  })
  test("should capitalize the first letter of both sentences", () => {
    expect(capitalize(twoSentences3)).toBe("Am I a sentence? I think i am.")
  })
  

  // bad input tests
  test("bad input should throw error", () => {
    expect(() => 
      capitalize(object)).toThrowError()
  })
  test("bad input should throw error", () => {
    expect(() => 
      capitalize(nullInput)).toThrowError()
  })
  test("bad input should throw error", () => {
    expect(() => 
      capitalize(bool)).toThrowError()
  })
  test("bad input should throw error", () => {
    expect(() => 
      capitalize(array)).toThrowError()
  })
});
