import toNumber from "../../src/toNumber";

describe("toNumber.js", () => {
  test("should convert string to number", () => {
    const string = '1000'
    expect(toNumber(string)).toBe(1000)
    expect(typeof toNumber(string)).toBe("number")
  })
  test("should keep float as a number", () => {
    const float = 3.14
    expect(toNumber(float)).toBe(3.14)
    expect(typeof toNumber(float)).toBe("number")
  })
  test("should keep int as number", () => {
    const int = 1
    expect(toNumber(int)).toBe(1)
    expect(typeof toNumber(int)).toBe("number")
  })
  test("using a number function as parameter should return a number", () => {
    const testFunctionSquare = (n) => (n*n)
    expect(toNumber(testFunctionSquare(2))).toBeNumber()
    expect(toNumber(testFunctionSquare(2))).toBe(4)
  })
  test("using 0/0 as parameter should return NaN", () => {
    expect(toNumber(0/0)).toBeNumber()
    expect(toNumber(0/0)).toBe(NaN) // 0/0 is both a number and Not a Number (NaN)
  })
  test("using Number.MIN_VALUE should return 5e-324", () => {
    expect(toNumber(Number.MIN_VALUE)).toBeNumber()
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
  })
  test("using infinity should return infinity", () => {
    expect(toNumber(Infinity)).toBeNumber()
    expect(toNumber(Infinity)).toBe(Infinity)
  })

  // bad input tests
  test("bad input should throw error", () => { 
    expect(() => 
      toNumber({'name' : 'barney'})).toThrowError() // returns NaN instead of throwing error
  })
  test("bad input should throw error", () => {
    expect(() => 
      toNumber([1, 2, 3, 'fred', 5])).toThrowError() // returns NaN instead of throwing error
  })
  test("bad input should throw error", () => {
    expect(() => 
      toNumber(null)).toThrowError() // returns 0 instead of throwing error
  })
  test("bad input should throw error", () => {
    expect(() => 
      toNumber(undefined)).toThrowError() // returns NaN instead of throwing error
  })
  test("bad input should throw error", () => {
    expect(() => 
      toNumber(/[^, ]+/g)).toThrowError() // returns NaN instead of throwing error
  })
  test("no input should throw error", () => {
    expect(() => 
      toNumber()).toThrowError() // returns NaN instead of throwing error
  })
  test("symbol input should throw error", () => {
    expect(() => 
      toNumber(Symbol("1"))).toThrowError() // returns NaN instead of throwing error
  })
})