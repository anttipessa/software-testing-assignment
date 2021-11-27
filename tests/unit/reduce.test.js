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
})