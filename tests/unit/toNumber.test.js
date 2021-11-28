import toNumber from "../../src/toNumber";

const string = '1000'
const float = 3.14
const int = 1

// bad inputs
const object = {'name' : 'barney'}
const array = [1, 2, 3, 'fred', 5]

describe("toNumber.js", () => {
  test("should convert string to int", () => {
    expect(toNumber(string)).toBe(1000)
    expect(typeof toNumber(string)).toBe("number")
  })
  test("should keep float as a number", () => {
    expect(toNumber(float)).toBe(3.14)
    expect(typeof toNumber(float)).toBe("number")
  })
  test("should keep int as number", () => {
    expect(toNumber(int)).toBe(1)
    expect(typeof toNumber(int)).toBe("number")
  })

  // bad input tests
  test("bad input should throw error", () => {
    expect(() => 
      toNumber(object)).toThrowError()
  })
  test("bad input should throw error", () => {
    expect(() => 
      toNumber(array)).toThrowError()
  })
})