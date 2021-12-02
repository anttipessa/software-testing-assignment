import map from '../../src/map'

const testFunctionSquare = (n) => n*n
const testFunctionRound = (n) => Math.round(n)

describe("map.js", () => {
  test("should square all integers", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    expect(map(arr, testFunctionSquare)).toStrictEqual(result)
  })
  test("should round the floats and turn the boolean 'true' into 1", () => {
    const arr = [1, 2.6, true, 3.14159265359, 2.718281828459]
    const result = [1, 3, 1, 3, 3]
    expect(map(arr, testFunctionRound)).toStrictEqual(result)
  })
  test("empty array should stay empty", () => {
    expect(map([], testFunctionSquare)).toStrictEqual([])
  })

  // bad inputs
  test("null as both parameters should throw error", () => {
    expect(() => 
      map(null, null)).toThrowError() // returns [] instead
  })
  test("null as second parameter should throw error", () => {
    expect(() => 
      map([1, 2, 3], null)).toThrowError() // throws TypeError
  })
  test("null as first parameter should throw error", () => {
    expect(() => 
      map(null, testFunctionSquare)).toThrowError() // throws TypeError
  })
  test("wrong number of parameters should throw error", () => {
    expect(() => 
      map(testFunctionSquare)).toThrowError() // returns [] instead
  })
  test("passing no parameters should throw error", () => {
    expect(() => 
      map()).toThrowError() // returns [] instead
  })
})