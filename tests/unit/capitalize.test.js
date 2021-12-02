import capitalize from "../../src/capitalize"

describe("capitalize.js", () => {
  test("should capitalize the first letter", () => {
    expect(capitalize("testing")).toBe("Testing")
  });
  test("should capitalize the first letter and convert the rest to lowercase", () => {
    expect(capitalize("TESTING")).toBe("Testing")
  });
  test("should capitalize the first letter and convert rest to lowercase", () => {
    expect(capitalize("tEsTiNg")).toBe("Testing")
  });
  test("should capitalize the first letter and convert rest to lowercase with scandinavian characters as well", () => {
    expect(capitalize("äÄnItTäÄ")).toBe("Äänittää")
  });
  test("should not capitalize anything if the first character is not a letter", () => {
    expect(capitalize("@userName")).toBe("@username")
  });
  test("should convert number to string", () => {
    expect(capitalize(123)).toBe("123")
  })
  test("should only capitalize the first letter", () => {
    expect(capitalize("i am a sentence!")).toBe("I am a sentence!")
  })
  test("should capitalize the first letter of both sentences", () => {
    expect(capitalize("i am a sentence! so am I!")).toBe("I am a sentence! So am I!")
  })
  test("should capitalize the first letter of both sentences", () => {
    expect(capitalize("i am a sentence. so am I.")).toBe("I am a sentence. So am I.")
  })
  test("should capitalize the first letter of both sentences", () => {
    expect(capitalize("am I a sentence? i think i am.")).toBe("Am I a sentence? I think i am.")
  })
  

  // bad input tests
  test("passing an object should throw an error", () => {
    expect(() => 
      capitalize({testdata: "test"})).toThrowError()
  })
  test("passing null should throw an error", () => {
    expect(() => 
      capitalize(null)).toThrowError()
  })
  test("passing a boolean should throw an error", () => {
    expect(() => 
      capitalize(true)).toThrowError()
  })
  test("passing an array should throw an error", () => {
    expect(() => 
      capitalize(["hi", "i'm", "a", "test", "array"])).toThrowError()
  })
});
