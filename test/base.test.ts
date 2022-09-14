import {
  isNaN,
  isFinite,
  isUndefined,
  isArray,
  isFloat,
  isInteger,
  isFunction,
  isBoolean,
  isString,
  isNumber,
  isRegExp, isObject, isRealObject, isDate, isValidDate, isError, isTypeError, isEmpty
} from '../func';
describe('Base function', () => {
  test ('isNaN()', () => {
    expect(isNaN()).toEqual(false)
    expect(isNaN(0)).toEqual(false)
    expect(isNaN(-1)).toEqual(false)
    expect(isNaN(1)).toEqual(false)
    expect(isNaN(null)).toEqual(false)
    expect(isNaN('')).toEqual(false)
    expect(isNaN(true)).toEqual(false)
    expect(isNaN(false)).toEqual(false)
    expect(isNaN({})).toEqual(false)
    expect(isNaN('null')).toEqual(false)
    expect(isNaN('NAN')).toEqual(false)
    expect(isNaN(/\d/)).toEqual(false)
    expect(isNaN(NaN)).toEqual(true)
  })
  test ('isFinite()', () => {
    expect(isFinite()).toEqual(false)
    expect(isFinite(null)).toEqual(false)
    expect(isFinite(undefined)).toEqual(false)
    expect(isFinite(NaN)).toEqual(false)
    expect(isFinite({})).toEqual(false)
    expect(isFinite([])).toEqual(false)
    expect(isFinite(/\d/)).toEqual(false)
    expect(isFinite('num')).toEqual(false)
    expect(isFinite('5')).toEqual(false)
    expect(isFinite('')).toEqual(false)
    expect(isFinite(-2)).toEqual(true)
    expect(isFinite(0)).toEqual(true)
    expect(isFinite(88)).toEqual(true)
    expect(isFinite(2e64)).toEqual(true)
  })
  test ('isUndefined()', () => {
    expect(isUndefined(0)).toEqual(false)
    expect(isUndefined(-2)).toEqual(false)
    expect(isUndefined(false)).toEqual(false)
    expect(isUndefined({})).toEqual(false)
    expect(isUndefined([])).toEqual(false)
    expect(isUndefined(/\d/)).toEqual(false)
    expect(isUndefined(null)).toEqual(false)
    expect(isUndefined('null')).toEqual(false)
    expect(isUndefined('undefined')).toEqual(false)
    expect(isUndefined(undefined)).toEqual(true)
    expect(isUndefined()).toEqual(true)
  })
  test ('isArray()', () => {
    expect(isArray(0)).toEqual(false)
    expect(isArray(-2)).toEqual(false)
    expect(isArray(false)).toEqual(false)
    expect(isArray({})).toEqual(false)
    expect(isArray(/\d/)).toEqual(false)
    expect(isArray(null)).toEqual(false)
    expect(isArray('null')).toEqual(false)
    expect(isArray('undefined')).toEqual(false)
    expect(isArray(undefined)).toEqual(false)
    expect(isArray()).toEqual(false)
    expect(isArray([])).toEqual(true)
    expect(isArray([4, 2])).toEqual(true)
  })
  test ('isFloat()', () => {
    expect(isFloat(0)).toEqual(false)
    expect(isFloat(-2)).toEqual(false)
    expect(isFloat(false)).toEqual(false)
    expect(isFloat({})).toEqual(false)
    expect(isFloat(/\d/)).toEqual(false)
    expect(isFloat(null)).toEqual(false)
    expect(isFloat('null')).toEqual(false)
    expect(isFloat('undefined')).toEqual(false)
    expect(isFloat(undefined)).toEqual(false)
    expect(isFloat()).toEqual(false)
    expect(isFloat('2.111')).toEqual(false)
    expect(isFloat(2.0)).toEqual(false)
    expect(isFloat(4.1231313)).toEqual(true)
    expect(isFloat(-2.2)).toEqual(true)
  })
  test ('isInteger()', () => {
    expect(isInteger(0)).toEqual(true)
    expect(isInteger(-2)).toEqual(true)
    expect(isInteger(false)).toEqual(false)
    expect(isInteger({})).toEqual(false)
    expect(isInteger(/\d/)).toEqual(false)
    expect(isInteger(null)).toEqual(false)
    expect(isInteger('null')).toEqual(false)
    expect(isInteger('undefined')).toEqual(false)
    expect(isInteger(undefined)).toEqual(false)
    expect(isInteger()).toEqual(false)
    expect(isInteger('2.111')).toEqual(false)
    expect(isInteger(2.0)).toEqual(true)
    expect(isInteger(4.1231313)).toEqual(false)
    expect(isInteger(-2.2)).toEqual(false)
  })
  test ('isFunction()', () => {
    expect(isFunction(false)).toEqual(false)
    expect(isFunction({})).toEqual(false)
    expect(isFunction(/\d/)).toEqual(false)
    expect(isFunction(null)).toEqual(false)
    expect(isFunction('null')).toEqual(false)
    expect(isFunction('undefined')).toEqual(false)
    expect(isFunction(undefined)).toEqual(false)
    expect(isFunction()).toEqual(false)
    expect(isFunction('2.111')).toEqual(false)
    expect(isFunction(2.0)).toEqual(false)
    expect(isFunction(4.1231313)).toEqual(false)
    expect(isFunction(-2.2)).toEqual(false)
    const method = () => {
      expect(isFunction(() => {
        console.log(1)
      })).toEqual(true)
    }
    method()
  })
  test ('isBoolean()', () => {
    expect(isBoolean(0)).toEqual(false)
    expect(isBoolean(-2)).toEqual(false)
    expect(isBoolean(false)).toEqual(true)
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean({})).toEqual(false)
    expect(isBoolean(/\d/)).toEqual(false)
    expect(isBoolean(null)).toEqual(false)
    expect(isBoolean('null')).toEqual(false)
    expect(isBoolean('undefined')).toEqual(false)
    expect(isBoolean(undefined)).toEqual(false)
    expect(isBoolean()).toEqual(false)
    expect(isBoolean('2.111')).toEqual(false)
    expect(isBoolean(2.0)).toEqual(false)
    expect(isBoolean(4.1231313)).toEqual(false)
    expect(isBoolean(-2.2)).toEqual(false)
  })
  test ('isString()', () => {
    expect(isString(0)).toEqual(false)
    expect(isString(-2)).toEqual(false)
    expect(isString(false)).toEqual(false)
    expect(isString(true)).toEqual(false)
    expect(isString({})).toEqual(false)
    expect(isString(/\d/)).toEqual(false)
    expect(isString(null)).toEqual(false)
    expect(isString('null')).toEqual(true)
    expect(isString('undefined')).toEqual(true)
    expect(isString(undefined)).toEqual(false)
    expect(isString()).toEqual(false)
    expect(isString('2.111')).toEqual(true)
    expect(isString(2.0)).toEqual(false)
    expect(isString(4.1231313)).toEqual(false)
    expect(isString(-2.2)).toEqual(false)
  })
  test ('isNumber()', () => {
    expect(isNumber(0)).toEqual(true)
    expect(isNumber(-2)).toEqual(true)
    expect(isNumber(false)).toEqual(false)
    expect(isNumber(true)).toEqual(false)
    expect(isNumber({})).toEqual(false)
    expect(isNumber(/\d/)).toEqual(false)
    expect(isNumber(null)).toEqual(false)
    expect(isNumber('null')).toEqual(false)
    expect(isNumber('undefined')).toEqual(false)
    expect(isNumber(undefined)).toEqual(false)
    expect(isNumber()).toEqual(false)
    expect(isNumber('2.111')).toEqual(false)
    expect(isNumber(2.0)).toEqual(true)
    expect(isNumber(4.1231313)).toEqual(true)
    expect(isNumber(-2.2)).toEqual(true)
  })
  test ('isRegExp()', () => {
    expect(isRegExp(0)).toEqual(false)
    expect(isRegExp(-2)).toEqual(false)
    expect(isRegExp(false)).toEqual(false)
    expect(isRegExp(true)).toEqual(false)
    expect(isRegExp({})).toEqual(false)
    expect(isRegExp(/\d/)).toEqual(true)
    expect(isRegExp(null)).toEqual(false)
    expect(isRegExp('null')).toEqual(false)
    expect(isRegExp('undefined')).toEqual(false)
    expect(isRegExp(undefined)).toEqual(false)
    expect(isRegExp()).toEqual(false)
    expect(isRegExp('2.111')).toEqual(false)
    expect(isRegExp(2.0)).toEqual(false)
    expect(isRegExp(4.1231313)).toEqual(false)
    expect(isRegExp(-2.2)).toEqual(false)
  })
  test ('isObject()', () => {
    expect(isObject(0)).toEqual(false)
    expect(isObject(-2)).toEqual(false)
    expect(isObject(false)).toEqual(false)
    expect(isObject(true)).toEqual(false)
    expect(isObject({})).toEqual(true)
    expect(isObject(/\d/)).toEqual(true)
    expect(isObject([])).toEqual(true)
    expect(isObject(null)).toEqual(true)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isObject(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isObject(item)).toEqual(true)
    }
    testDate()
    expect(isObject('null')).toEqual(false)
    expect(isObject('undefined')).toEqual(false)
    expect(isObject(undefined)).toEqual(false)
    expect(isObject()).toEqual(false)
    expect(isObject('2.111')).toEqual(false)
    expect(isObject(2.0)).toEqual(false)
    expect(isObject(4.1231313)).toEqual(false)
    expect(isObject(-2.2)).toEqual(false)
  })
  test ('isRealObject()', () => {
    expect(isRealObject(0)).toEqual(false)
    expect(isRealObject(-2)).toEqual(false)
    expect(isRealObject(false)).toEqual(false)
    expect(isRealObject(true)).toEqual(false)
    expect(isRealObject({})).toEqual(true)
    expect(isRealObject(/\d/)).toEqual(false)
    expect(isRealObject([])).toEqual(false)
    expect(isRealObject(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isRealObject(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isRealObject(item)).toEqual(false)
    }
    testDate()
    expect(isRealObject('null')).toEqual(false)
    expect(isRealObject('undefined')).toEqual(false)
    expect(isRealObject(undefined)).toEqual(false)
    expect(isRealObject()).toEqual(false)
    expect(isRealObject('2.111')).toEqual(false)
    expect(isRealObject(2.0)).toEqual(false)
    expect(isRealObject(4.1231313)).toEqual(false)
    expect(isRealObject(-2.2)).toEqual(false)
  })
  test ('isDate()', () => {
    expect(isDate(0)).toEqual(false)
    expect(isDate(-2)).toEqual(false)
    expect(isDate(false)).toEqual(false)
    expect(isDate(true)).toEqual(false)
    expect(isDate({})).toEqual(false)
    expect(isDate(/\d/)).toEqual(false)
    expect(isDate([])).toEqual(false)
    expect(isDate(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isDate(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isDate(item)).toEqual(true)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isDate(item)).toEqual(true)
    }
    testDate2()
    expect(isDate('null')).toEqual(false)
    expect(isDate('undefined')).toEqual(false)
    expect(isDate(undefined)).toEqual(false)
    expect(isDate()).toEqual(false)
    expect(isDate('2.111')).toEqual(false)
    expect(isDate(2.0)).toEqual(false)
    expect(isDate(4.1231313)).toEqual(false)
    expect(isDate(-2.2)).toEqual(false)
  })
  test ('isValidDate()', () => {
    expect(isValidDate(0)).toEqual(false)
    expect(isValidDate(-2)).toEqual(false)
    expect(isValidDate(false)).toEqual(false)
    expect(isValidDate(true)).toEqual(false)
    expect(isValidDate({})).toEqual(false)
    expect(isValidDate(/\d/)).toEqual(false)
    expect(isValidDate([])).toEqual(false)
    expect(isValidDate(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isValidDate(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isValidDate(item)).toEqual(true)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isValidDate(item)).toEqual(false)
    }
    testDate2()
    expect(isValidDate('null')).toEqual(false)
    expect(isValidDate('undefined')).toEqual(false)
    expect(isValidDate(undefined)).toEqual(false)
    expect(isValidDate()).toEqual(false)
    expect(isValidDate('2.111')).toEqual(false)
    expect(isValidDate(2.0)).toEqual(false)
    expect(isValidDate(4.1231313)).toEqual(false)
    expect(isValidDate(-2.2)).toEqual(false)
  })
  test ('isError()', () => {
    expect(isError(0)).toEqual(false)
    expect(isError(-2)).toEqual(false)
    expect(isError(false)).toEqual(false)
    expect(isError(true)).toEqual(false)
    expect(isError({})).toEqual(false)
    expect(isError(/\d/)).toEqual(false)
    expect(isError([])).toEqual(false)
    expect(isError(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isError(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isError(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isError(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (isError(item)).toEqual(true)
    }
    testDate3()
    expect(isError('null')).toEqual(false)
    expect(isError('undefined')).toEqual(false)
    expect(isError(undefined)).toEqual(false)
    expect(isError()).toEqual(false)
    expect(isError('2.111')).toEqual(false)
    expect(isError(2.0)).toEqual(false)
    expect(isError(4.1231313)).toEqual(false)
    expect(isError(-2.2)).toEqual(false)
  })
  test ('isTypeError()', () => {
    expect(isTypeError(0)).toEqual(false)
    expect(isTypeError(-2)).toEqual(false)
    expect(isTypeError(false)).toEqual(false)
    expect(isTypeError(true)).toEqual(false)
    expect(isTypeError({})).toEqual(false)
    expect(isTypeError(/\d/)).toEqual(false)
    expect(isTypeError([])).toEqual(false)
    expect(isTypeError(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isTypeError(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isTypeError(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isTypeError(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (isTypeError(item)).toEqual(false)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (isTypeError(item)).toEqual(true)
    }
    testDate4()
    expect(isTypeError('null')).toEqual(false)
    expect(isTypeError('undefined')).toEqual(false)
    expect(isTypeError(undefined)).toEqual(false)
    expect(isTypeError()).toEqual(false)
    expect(isTypeError('2.111')).toEqual(false)
    expect(isTypeError(2.0)).toEqual(false)
    expect(isTypeError(4.1231313)).toEqual(false)
    expect(isTypeError(-2.2)).toEqual(false)
  })
  test ('isEmpty()', () => {
    expect(isEmpty(0)).toEqual(false)
    expect(isEmpty(-2)).toEqual(false)
    expect(isEmpty(false)).toEqual(false)
    expect(isEmpty(true)).toEqual(false)
    expect(isEmpty({})).toEqual(true)
    expect(isEmpty(/\d/)).toEqual(true)
    expect(isEmpty([])).toEqual(true)
    expect(isEmpty(null)).toEqual(true)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isEmpty(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isEmpty(item)).toEqual(true)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isEmpty(item)).toEqual(true)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (isEmpty(item)).toEqual(true)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (isEmpty(item)).toEqual(true)
    }
    testDate4()
    expect(isEmpty('null')).toEqual(false)
    expect(isEmpty('undefined')).toEqual(false)
    expect(isEmpty(undefined)).toEqual(false)
    expect(isEmpty()).toEqual(false)
    expect(isEmpty('2.111')).toEqual(false)
    expect(isEmpty([1,2,3])).toEqual(false)
    expect(isEmpty(4.1231313)).toEqual(false)
    expect(isEmpty(-2.2)).toEqual(false)
  })
})
