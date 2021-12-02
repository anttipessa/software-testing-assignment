import words from '../../src/words'

const string = 'fred, barney & pebbles'
const string2 = 'ä ö ää aa öö'

describe("words.js", () => {
  test("should return an array of the words excluding the ampersand", () => {
    const result = ['fred', 'barney', 'pebbles']
    expect(words(string)).toStrictEqual(result)
  })
  test("should return an array of the words including the ampersand", () => {
    const result = ['fred', 'barney', '&', 'pebbles']
    expect(words(string, /[^, ]+/g)).toStrictEqual(result)
  })
  test("using scandinavian characters should not affect the function", () => {
    const result = ['ä', 'ö', 'ää', 'aa', 'öö']
    expect(words(string2)).toStrictEqual(result)
  })
  
  test("null as second parameter should return an empty array", () => {
    expect(words(string2, null)).toStrictEqual([])
  })
  test("undefined as second parameter shouldn't affect the output array", () => {
    const result = ['ä', 'ö', 'ää', 'aa', 'öö']
    expect(words(string2, undefined)).toStrictEqual(result)
  })

  // tests with bad inputs
  test("passing a number as the first parameter should throw error", () => { // throws TypeError
    expect(() => 
      words(1)).toThrowError()
  })
  test("passing a boolean as the first parameter should throw error", () => { // throws TypeError
    expect(() => 
      words(true)).toThrowError()
  })
  test("passing an object as the first parameter should throw error", () => { // throws TypeError
    expect(() => 
      words({name: 'fred'})).toThrowError()
  })
  test("passing null as the first parameter should throw error", () => { // throws TypeError
    expect(() => 
      words(null)).toThrowError()
  })
  test("passing undefined as the first parameter should throw error", () => { // throws TypeError
    expect(() => 
      words(undefined)).toThrowError()
  })
  test("passing no parameters should throw error", () => { // throws TypeError
    expect(() => 
      words()).toThrowError()
  })
})