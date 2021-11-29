import map from '../../src/map'
import capitalize from '../../src/capitalize'
import add from '../../src/add'
import divide from '../../src/divide'
import toNumber from '../../src/toNumber'
import filter from '../../src/filter'
import isEmpty from '../../src/isEmpty'
import toString from '../../src/toString'
import reduce from '../../src/reduce'

const testArr = ["hei", "olen", "testaustaulukko"]
const testArr2 = [1, 3, 3, 2, 5]
const testArr3 = [1, "2", 3, 3.2, "123341", "4.12309"]
const testArr4 = [1, "moi", 2.4567, "a1", "45"]
const testArr5 = [1, null, 32, "abc", [3, 4, 6]]

const resultArr = ["Hei", "Olen", "Testaustaulukko"]
const resultArr2 = ["1", "Moi", "2.4567", "A1", "45"]
const resultArr3 = [3, 4, 5, 6, 7]
const resultArr4 = [1, 2, 3, 3.2, 123341, 4.12309]
const resultArr5 = [1, null, 32]

describe("Integration tests on arrays utilizing differing functions", () => {
  //tests with map
  test("should capitalize first letters", () => {
    expect(map(testArr, capitalize)).toStrictEqual(resultArr)
  })
  test("should convert numbers into strings and capitalize strings", () => {
    expect(map(mixedTestArr, capitalize)).toStrictEqual(resultArr2)
  })
  // does not seem usable with map since parameters can't be passed to add inside map
  test("should add", () => {
    expect(map(testArr2, add)).toStrictEqual(resultArr3)
  })
  // does not seem usable with map since parameters can't be passed to divide inside map
  test("should divide", () => {
    expect(map(testArr2, divide)).toStrictEqual(resultArr3)
  })
  test("should convert all strings of numbers to numbers and leave numbers as is", () => {
    expect(map(testArr3, toNumber)).toStrictEqual(resultArr4)
  })

  // tests with filter
  test("should remove 'abc' and [3, 4, 6] from array", () => {
    expect(filter(testArr5, isEmpty)).toStrictEqual(resultArr5)
  })
  test("should return '1,,32'", () => {
    expect(toString(filter(testArr5, isEmpty))).toBe('1,,32')
  })
  
  test("filter->reduce->map", () => {
    const arr = [1, 2, 3, 4, 5, "word"]
    const mapArr = [5, 10]
    const filtered = filter(arr, (e => typeof e === 'number' && e))
    expect(filtered).toStrictEqual([1, 2, 3, 4, 5])
    const reduced = reduce(filtered, (sum, n) => sum + n, 0)
    expect(reduced).toBe(15)
    expect(map(mapArr, (n) => n * reduced)).toStrictEqual([75, 150])
  })
})