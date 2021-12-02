import filter from "../../src/filter";

const testArray1 = [
  {name: 'Mauri', 'liar': true},
  {name: 'Lauri', 'liar': false}
]
const testArray2 = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20]

const resultArray1 = [{name: 'Mauri', 'liar': true}]
const resultArray2 = [{name: 'Lauri', 'liar': false}]
const resultArray3 = [16, 17, 18, 19, 20]

const testFunction = (n) => n >= 10
const testFunction2 = (n) => n.name === 'Mauri'

describe("filter.js", () => {
  test("should return an array without specified booleans", () => {
    expect(filter(testArray1, ({ liar }) => liar)).toStrictEqual(resultArray1),
    expect(filter(testArray1, ({ liar }) => !liar)).toStrictEqual(resultArray2)
  })
  test("should return an array without specified names", () => {
    expect(filter(testArray1, testFunction2)).toStrictEqual(resultArray1)
  })
  test("should return array without smaller numbers than 10", () => {
    expect(filter(testArray2, testFunction)).toStrictEqual(resultArray3) 
  })
  test("should filter out all bananas", () => {
    const products = ["banana", "banana", "apple", "strawberry", "banana", "orange"]
    const result = ["apple", "strawberry", "orange"]
    expect(filter(products, (n) => n != "banana")).toStrictEqual(result) 
  })
  test("should return with empty array", () => {
    const products = ["banana", "banana", "apple", "strawberry", "banana", "orange"]
    const result = [[]]
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