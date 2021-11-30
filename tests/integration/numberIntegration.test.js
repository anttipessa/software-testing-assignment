import toNumber from '../../src/toNumber'
import add from '../../src/add'
import divide from '../../src/divide'
import toString from '../../src/toString'


describe("integration tests on numbers using chained functions", () => {
  test("test case 1: add + toNumber", () => {
    expect(add(toNumber("3.2"), toNumber(5))).toBe(8.2)
  })
  /* We need to factor in here that divide is bugged and only uses divisor (parameter 2) for both parameters,
  which means the number 6 (first parameter for divide below) is irrelevant. However divide doesn't function
  correctly with just one parameter, so the other parameter has to be included in the function call. 
  The intention here is not to test divide individually, but rather see that the integration between toNumber,
  add and divide isn't causing problems, which is why this little detail is being omitted. */
  test("test case 2: add + toNumber + divide", () => { 
    expect(divide(6, add(toNumber("2"), toNumber(4)))).toBe(1)
  })
  // adding toString in front of everything seems to break it
  test("test case 2: add + toNumber + divide", () => { 
    expect(toString(divide(6, add(toNumber("2"), toNumber(4))))).toBe('1')
  })
  test("test case 3: a chain of toString and toNumber", () => {
    expect(toString(toNumber('3'))).toBeString()
    expect(toString(toNumber('3'))).toBe('3')
  })
})
