import reduce from '../../src/reduce'


describe("reduce.js", () => {
  test("addition test, should return 6", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6)
  })
  test("division test, should return 1", () => {
    expect(reduce([20, 2, 10], (div, n) => div / n, 400)).toBe(1)
  })
  test("object conversion test", () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
       (result[value] || (result[value] = [])).push(key)
       return result
      }, {})).toStrictEqual({'1': ['a', 'c'], '2': ['b']})
  })

  // bad inputs
  test("bad input should throw error", () => {
    expect(() => 
      reduce(null, null, null)).toThrowError() // returns null instead
  })
  test("bad input should throw error", () => {
    expect(() => 
      reduce([0, 1, 2], null, null)).toThrowError() // throws TypeError
  })
  test("bad input should throw error", () => {
    expect(() => 
      reduce(null, (div, n) => div / n, null)).toThrowError() // returns null instead
  })
  test("bad input should throw error", () => {
    expect(() => 
      reduce(null, null)).toThrowError() // returns undefined instead
  })
  test("too few parameters should throw error", () => {
    expect(() => 
      reduce([2, 3, 5])).toThrowError() // throws TypeError
  })
})