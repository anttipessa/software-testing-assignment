import isEmpty from "../../src/isEmpty"

describe("isEmpty.js", () => {
  test("a string should not be empty", () => {
    expect(isEmpty("test")).toBe(false)
  })
  test("an integer should return empty", () => {
    expect(isEmpty(1)).toBe(true)
  })
  test("should not be empty", () => {
    expect(isEmpty([1, 2, 3, 4, 5])).toBe(false)
  })
  test("populated array should not be empty", () => {
    expect(isEmpty([1, "wee", 3.14, {name: 'mauri'}])).toBe(false)
  })
  test("empty array should be empty", () => {
    expect(isEmpty([])).toBe(true)
  })
  test("a populated object should not be empty", () => {
    expect(isEmpty({name : 'Mauri'})).toBe(false)
  })
  test("an array of objects should not be empty", () => {
    expect(isEmpty([{'name' : 'Mauri'}, {'liar' : true}])).toBe(false)
  })
  test("a boolean should return empty", () => {
    expect(isEmpty(true)).toBe(true)
  })
  test("null should be empty", () => {
    expect(isEmpty(null)).toBe(true) // javascript's own version of isEmpty would return false here
  })
  test("an array containing null should be empty", () => { 
    expect(isEmpty([null])).toBe(false) 
  })
  test("Nan should return empty", () => {
    expect(isEmpty(NaN)).toBe(true)
  })
  test("infinity should return empty", () => {
    expect(isEmpty(Infinity)).toBe(true)
  })
  test("negative infinity should return empty", () => {
    expect(isEmpty(-Infinity)).toBe(true)
  })

  test("Empty symbol should be empty", () => {
    expect(isEmpty(Symbol(""))).toBe(true)
  })

  test("Symbol with content should not be empty", () => {
    expect(isEmpty(Symbol("test"))).toBe(false)
  })


  // passing a function should throw error
  
  test("passing a function should not work", () => {
    const testFunctionSquare = (n) => (n*n)
    expect(() => isEmpty(testFunctionSquare(2))).toThrowError() // returns true instead of throwing error
  })
})