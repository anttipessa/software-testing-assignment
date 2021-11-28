import map from '../../src/map'
import capitalize from '../../src/capitalize'
import add from '../../src/add'
import divide from '../../src/divide'
import toNumber from '../../src/toNumber'

const testArr = ["hei", "olen", "testaustaulukko"]
const testArr2 = [1, 3, 3, 2, 5]
const testArr3 = [1, "2", 3, 3.2, "123341", "4.12309"]
const mixedTestArr = [1, "moi", 2.4567, "a1", "45"]

const resultArr = ["Hei", "Olen", "Testaustaulukko"]
const resultArr2 = ["1", "Moi", "2.4567", "A1", "45"]
const resultArr3 = [3, 4, 5, 6, 7]
const resultArr4 = [1, 2, 3, 3.2, 123341, 4.12309]

describe("Integration tests on map-function", () => {
  test("should capitalize first letters", () => {
    expect(map(testArr, capitalize)).toStrictEqual(resultArr)
  })
  test("should convert numbers into strings and capitalize strings", () => {
    expect(map(mixedTestArr, capitalize)).toStrictEqual(resultArr2)
  })
  // not usable with map
  test("should add", () => {
    expect(map(testArr2, add)).toStrictEqual(resultArr3)
  })
  // not usable with map
  test("should divide", () => {
    expect(map(testArr2, divide)).toStrictEqual(resultArr3)
  })
  test("should convert all strings of numbers to numbers and leave numbers as is", () => {
    expect(map(testArr3, toNumber)).toStrictEqual(resultArr4)
  })
})