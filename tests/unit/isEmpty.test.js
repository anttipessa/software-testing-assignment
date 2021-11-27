import isEmpty from "../../src/isEmpty"

const string = 'jeejee'
const int = 1
const array = [1, 2, 3, 4, 5]
const array2 = [1]
const object = {'name' : 'Mauri'}
const object2 = [{'name' : 'Mauri'}, {'liar' : true}]
const bool = true
const bool2 = false
const nullInput = null
const nanInput = NaN
const inf = Infinity
const negInf = -Infinity

describe("isEmpty.js", () => {
  test("should not be empty", () => {
    expect(isEmpty(string)).toBe(false)
  })
  test("should be empty", () => {
    expect(isEmpty(int)).toBe(true)
  })
  test("should not be empty", () => {
    expect(isEmpty(array)).toBe(false)
  })
  test("should not be empty", () => {
    expect(isEmpty(array2)).toBe(false)
  })
  test("should not be empty", () => {
    expect(isEmpty(object)).toBe(false)
  })
  test("should not be empty", () => {
    expect(isEmpty(object2)).toBe(false)
  })
  test("should be empty", () => {
    expect(isEmpty(bool)).toBe(true)
  })
  test("should be empty", () => {
    expect(isEmpty(bool2)).toBe(true)
  })
  test("should be empty", () => {
    expect(isEmpty(nullInput)).toBe(true) // javascript's own version of isEmpty would return false here
  })
  test("should be empty", () => {
    expect(isEmpty(nanInput)).toBe(true)
  })
  test("should be empty", () => {
    expect(isEmpty(inf)).toBe(true)
  })
  test("should be empty", () => {
    expect(isEmpty(negInf)).toBe(true)
  })
})