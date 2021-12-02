import add from '../../src/add'

describe('add.js', () => {

//pairWise tests
describe('add.js pairWise tests', () => {
  test('-1 + -1 should be -2', () => {
    expect(add(-1, -1)).toBe(-2)
  })
  test('-1 + 0 should be -1', () => {
    expect(add(-1, 0)).toBe(-1)
  })
  test('-1 + 1 should be 0', () => {
    expect(add(-1, 1)).toBe(0)
  })
  test('0 + -1 should be -1', () => {
    expect(add(0, -1)).toBe(-1)
  })
  test('0 + 0 should be 0', () => {
    expect(add(0, 0)).toBe(0)
  })
  test('0 + 1 should be 1', () => {
    expect(add(0, 1)).toBe(1)
  })
  test('1 + -1 should be 0', () => {
    expect(add(1, -1)).toBe(0)
  })
  test('1 + 0 should be 1', () => {
    expect(add(1, 0)).toBe(1)
  })
  test('1 + 1 should be 2', () => {
    expect(add(1, 1)).toBe(2)
  })
})

// tests with number-like parameters
describe("add.js additional tests", () => {
  test("infinity + 1 should equal infinity", () => {
    expect(add(1, Infinity)).toBe(Infinity)
  })
  test("infinity + infinity should equal infinity", () => {
    expect(add(Infinity, Infinity)).toBe(Infinity)
  })
})

const badInput = 'I am not a number'

// tests with something other than numbers as parameters
describe('add.js bad input tests', () => {
  test("string as one parameter should throw error", () => {
    expect(() => 
      add(badInput, -1)).toThrowError() //returns a string instead
  })
  test("string as one parameter should throw error", () => {
    expect(() => 
      add(-1, badInput)).toThrowError() //returns a string instead
  })
  test("both parameters as strings should throw error", () => {
    expect(() => 
      add(badInput, badInput)).toThrowError() //returns a string instead
  })
  test("too few parameters should throw error", () => {
    expect(() =>
      add(-1)).toThrowError() //returns the only parameter instead
  })
  test("no parameters passed should throw error", () => {
    expect(() =>
      add()).toThrowError() //returns 0
  })
  console.log(add())
  test("null as a parameter should throw error", () => {
    expect(() =>
      add(-1, null)).toThrowError() //returns the only good parameter instead
  })
  test("undefined as a parameter should throw error", () => {
    expect(() =>
      add(-1, undefined)).toThrowError() //returns the only good parameter instead
  })
})

})