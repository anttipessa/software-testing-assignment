import map from '../../src/map'
import capitalize from '../../src/capitalize'

const testFunctionSquare = (n) => n*n
const testFunctionRound = (n) => Math.round(n)

const testArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testArr2 = ["hei", "olen", "testaustaulukko"]
const testArr3 = [1, 2.6, true, 3.14159265359, 2.718281828459]
const mixedTestArr = [1, "moi", 2.4567, true, false, {firstName: "Mauri", lastName: "Perälä"}]

const resultArr1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
const resultArr2 = ["Hei", "Olen", "Testaustaulukko"]
const resultArr3 = [1, 3, 1, 3, 3]
const resultArr4 = ["1", "Moi", "2.4567", "True", "False", '{firstName: "Mauri", lastName: "Perälä"}']


describe("map.js", () => {
  test("should square all integers", () => {
    expect(map(testArr1, testFunctionSquare)).toStrictEqual(resultArr1)
  })
  test("should capitalize first letters", () => {
    expect(map(testArr2, capitalize)).toStrictEqual(resultArr2)
  })
  test("should round the floats and turn the boolean 'true' into 1", () => {
    expect(map(testArr3, testFunctionRound)).toStrictEqual(resultArr3)
  })
  test("should convert non-strings into strings and capitalize strings", () => {
    expect(map(mixedTestArr, capitalize)).toStrictEqual(resultArr4)
  })
})