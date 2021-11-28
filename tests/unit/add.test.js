import add from '../../src/add'

const first1 = -1
const first2 = 0
const first3 = 1
const second1 = -1
const second2 = 0
const second3 = 1

const badInput = 'I am not a number'

//pairWise tests
describe('add.js pairWise tests', () => {
  test('-1 + -1 should be -2', () => {
    expect(add(first1, second1)).toBe(-2)
  })
  test('-1 + 0 should be -1', () => {
    expect(add(first1, second2)).toBe(-1)
  })
  test('-1 + 1 should be 0', () => {
    expect(add(first1, second3)).toBe(0)
  })
  test('0 + -1 should be -1', () => {
    expect(add(first2, second1)).toBe(-1)
  })
  test('0 + 0 should be 0', () => {
    expect(add(first2, second2)).toBe(0)
  })
  test('0 + 1 should be 1', () => {
    expect(add(first2, second3)).toBe(1)
  })
  test('1 + -1 should be 0', () => {
    expect(add(first3, second1)).toBe(0)
  })
  test('1 + 0 should be 1', () => {
    expect(add(first3, second2)).toBe(1)
  })
  test('1 + 1 should be 2', () => {
    expect(add(first3, second3)).toBe(2)
  })
})

// tests with something other than numbers as parameters
describe('add.js bad input tests', () => {
  test("bad input should throw error", () => {
    expect(() => 
      add(badInput, second1)).toThrowError()
  })
  test("bad input should throw error", () => {
    expect(() => 
      add(first1, badInput)).toThrowError()
  })
  test("bad input should throw error", () => {
    expect(() => 
      add(badInput, badInput)).toThrowError()
  })
})