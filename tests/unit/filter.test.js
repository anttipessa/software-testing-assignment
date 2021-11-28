import filter from "../../src/filter";

const testArray1 = [
  {'name': 'Mauri', 'liar': true},
  {'name': 'Lauri', 'liar': false}
]

const resultArray1 = [{'name': 'Mauri', 'liar': true}]
const resultArray2 = [{'name': 'Lauri', 'liar': false}]

describe("filter.js", () => {
  test("should return an array without specified booleans", () => {
    expect(filter(testArray1, ({ liar }) => liar)).toStrictEqual(resultArray1),
    expect(filter(testArray1, ({ liar }) => !liar)).toStrictEqual(resultArray2)
  })
  test("should return an array without specified names", () => {  // returns [] instead
    expect(filter(testArray1, ({ name }) => Object.keys(name).includes('Mauri'))).toStrictEqual(resultArray2)
  })
})