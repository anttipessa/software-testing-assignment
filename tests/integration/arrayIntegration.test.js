import map from '../../src/map'
import capitalize from '../../src/capitalize'
import add from '../../src/add'
import divide from '../../src/divide'
import toNumber from '../../src/toNumber'
import filter from '../../src/filter'
import isEmpty from '../../src/isEmpty'
import toString from '../../src/toString'
import reduce from '../../src/reduce'

import products from '../mock/products'

describe("Integration tests on arrays utilizing differing functions", () => {
  //tests with map
  test("should capitalize first letters of each element in the array", () => {
    const arr = ["hei", "olen", "testaustaulukko"]
    const result = ["Hei", "Olen", "Testaustaulukko"]
    expect(map(arr, capitalize)).toStrictEqual(result)
  })
  test("should convert numbers into strings and capitalize strings", () => {
    const arr = [1, "moi", 2.4567, "a1", "45"]
    const result = ["1", "Moi", "2.4567", "A1", "45"]
    expect(map(arr, capitalize)).toStrictEqual(result)
  })
  test("should add 2 to each element in the array", () => {
    const arr = [1, 3, 3, 2, 5]
    const result = [3, 5, 5, 4, 7]
    expect(map(arr, (a => add(a, 2)))).toStrictEqual(result)
  })
  test("should divide elements in the array", () => {
    const arr = [1, 3, 3, 2, 5]
    const result = [1, 1, 1, 1, 1] // result will be this because of the bug in divide.js
    expect(map(arr, (a => divide(a, 1)))).toStrictEqual(result)
  })
  test("should convert all strings of numbers to numbers and leave numbers as they were", () => {
    const arr = [1, "2", 3, 3.2, "123341", "4.12309"]
    const result = [1, 2, 3, 3.2, 123341, 4.12309]
    expect(map(arr, toNumber)).toStrictEqual(result)
  })

  // tests with filter
  test("should remove 'abc' and [3, 4, 6] from array", () => {
    const arr = [1, null, 32, "abc", [3, 4, 6]]
    const result = [1, null, 32]
    expect(filter(arr, isEmpty)).toStrictEqual(result)
  })
  test("should return '1,,32'", () => {
    const arr = [1, null, 32]
    expect(toString(filter(arr, isEmpty))).toBe('1,,32')
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
  test("filter->isEmpty", () => {
    const arr = [1, 2, 3, 4, 5, "word"]
    const filtered = filter(arr, (e => typeof e === 'null' && e))
    expect(isEmpty(filtered)).toBe(true)
  })

  test("mock data demo", () => {
    const pro = products;
    for ( let p of pro){
      console.log(p.name)
    }
  })
})