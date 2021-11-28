import map from '../../src/map'

const testFunctionSquare = (n) => n*n
const testFunctionRound = (n) => Math.round(n)

const testArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testArr2 = [1, 2.6, true, 3.14159265359, 2.718281828459]
const emptyArr = []

const resultArr1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
const resultArr2 = [1, 3, 1, 3, 3]


describe("map.js", () => {
  test("should square all integers", () => {
    expect(map(testArr1, testFunctionSquare)).toStrictEqual(resultArr1)
  })
  test("should round the floats and turn the boolean 'true' into 1", () => {
    expect(map(testArr2, testFunctionRound)).toStrictEqual(resultArr2)
  })
  test("empty array should stay empty", () => {
    expect(map(emptyArr, testFunctionSquare)).toStrictEqual(emptyArr)
  })
})