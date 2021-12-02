import filter from "../../src/filter";

const testArray1 = [
  {name: 'Mauri', 'liar': true},
  {name: 'Lauri', 'liar': false}
]

const testFunction = (n) => n >= 10

describe("filter.js", () => {
  test("should return an array without specified booleans", () => {
    const result1 = [{name: 'Mauri', 'liar': true}]
    const result2 = [{name: 'Lauri', 'liar': false}]
    expect(filter(testArray1, ({ liar }) => liar)).toStrictEqual(result1),
    expect(filter(testArray1, ({ liar }) => !liar)).toStrictEqual(result2)
  })
  test("should return an array without specified names", () => {
    const result = [{name: 'Mauri', 'liar': true}]
    expect(filter(testArray1, (n) => n.name === 'Mauri')).toStrictEqual(result)
  })
  test("should return an array without numbers smaller than 10", () => {
    const arr = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20]
    const result = [16, 17, 18, 19, 20]
    expect(filter(arr, testFunction)).toStrictEqual(result) 
  })
  test("should filter out all bananas", () => {
    const products = ["banana", "banana", "apple", "strawberry", "banana", "orange"]
    const result = ["apple", "strawberry", "orange"]
    expect(filter(products, (n) => n != "banana")).toStrictEqual(result) 
  })

  // returns [[]] when no matches, no mention in documentation
  // empty array would be logical return value here
  test("should return with empty array", () => {
    const products = ["banana", "banana", "apple", "strawberry", "banana", "orange"]
    const result = []
    expect(filter(products, (n) => n == null)).toStrictEqual(result) 
  })

  // bad inputs
  test("bad input should should throw error", () => {
    expect(() => 
      filter(null, testFunction)).toThrowError() // returns [ [] ] instead
  })
  test("bad input should should throw error", () => {
    expect(() => 
      filter([null], testFunction)).toThrowError() // returns [ [] ] instead
  })
  test("bad input should should throw error", () => {
    expect(() => 
      filter("testString", testFunction)).toThrowError() // returns [ [] ] instead
  })
})