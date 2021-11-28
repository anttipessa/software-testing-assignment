import words from '../../src/words'
const string = 'fred, barney & pebbles'
const string2 = 'ä ö ää aa öö'

const result = ['fred', 'barney', 'pebbles']
const result2 = ['fred', 'barney', '&', 'pebbles']
const result3 = ['ä', 'ö', 'ää', 'aa', 'öö']

// bad inputs
const int = 1
const bool = true
const object = {'name' : 'fred'}

describe("words.js", () => {
  test("test case 1", () => {
    expect(words(string)).toStrictEqual(result)
  })
  test("test case 2", () => {
    expect(words(string, /[^, ]+/g)).toStrictEqual(result2)
  })
  test("test case 3", () => {
    expect(words(string2)).toStrictEqual(result3)
  })

  // tests with bad inputs
  test("should throw error", () => {
    expect(() => 
      words(int)).toThrowError()
  })
  test("should throw error", () => {
    expect(() => 
      words(bool)).toThrowError()
  })
  test("should throw error", () => {
    expect(() => 
      words(object)).toThrowError()
  })
})