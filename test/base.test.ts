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
  isRegExp,
  isObject,
  isRealObject,
  isDate,
  isValidDate,
  isError,
  isTypeError,
  isEmpty,
  isNull,
  isSymbol,
  isElement,
  isDocument,
  isWindow,
  isFormData,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isLeapYear,
  getType,
  getSize,
  JSONtoString,
  stringToJSON,
  keys,
  values, entries, first, last
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
  test ('isNull()', () => {
    expect(isNull(0)).toEqual(false)
    expect(isNull(-2)).toEqual(false)
    expect(isNull(false)).toEqual(false)
    expect(isNull(true)).toEqual(false)
    expect(isNull({})).toEqual(false)
    expect(isNull(/\d/)).toEqual(false)
    expect(isNull([])).toEqual(false)
    expect(isNull(null)).toEqual(true)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isNull(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isNull(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isNull(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (isNull(item)).toEqual(false)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (isNull(item)).toEqual(false)
    }
    testDate4()
    expect(isNull('null')).toEqual(false)
    expect(isNull('undefined')).toEqual(false)
    expect(isNull(undefined)).toEqual(false)
    expect(isNull()).toEqual(false)
    expect(isNull('2.111')).toEqual(false)
    expect(isNull([1,2,3])).toEqual(false)
    expect(isNull(4.1231313)).toEqual(false)
    expect(isNull(-2.2)).toEqual(false)
  })
  test ('isSymbol()', () => {
    expect(isSymbol(0)).toEqual(false)
    expect(isSymbol(-2)).toEqual(false)
    expect(isSymbol(false)).toEqual(false)
    expect(isSymbol(true)).toEqual(false)
    expect(isSymbol({})).toEqual(false)
    expect(isSymbol(/\d/)).toEqual(false)
    expect(isSymbol([])).toEqual(false)
    expect(isSymbol(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isSymbol(item)).toEqual(true)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isSymbol(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (isSymbol(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (isSymbol(item)).toEqual(false)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (isSymbol(item)).toEqual(false)
    }
    testDate4()
    expect(isSymbol('null')).toEqual(false)
    expect(isSymbol('undefined')).toEqual(false)
    expect(isSymbol(undefined)).toEqual(false)
    expect(isSymbol()).toEqual(false)
    expect(isSymbol('2.111')).toEqual(false)
    expect(isSymbol([1,2,3])).toEqual(false)
    expect(isSymbol(4.1231313)).toEqual(false)
    expect(isSymbol(-2.2)).toEqual(false)
  })
  test ('isElement()', () => {
    expect(isElement(0)).toEqual(false)
    expect(isElement(-2)).toEqual(false)
    expect(isElement(false)).toEqual(false)
    expect(isElement(true)).toEqual(false)
    expect(isElement({})).toEqual(false)
    expect(isElement(/\d/)).toEqual(false)
    expect(isElement([])).toEqual(false)
    expect(isElement(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isElement(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isElement(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isElement(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new Error()
      expect (isElement(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = new TypeError()
      expect (isElement(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isElement(item)).toEqual(true)
    }
    test5()
    expect(isElement('null')).toEqual(false)
    expect(isElement('undefined')).toEqual(false)
    expect(isElement(undefined)).toEqual(false)
    expect(isElement()).toEqual(false)
    expect(isElement('2.111')).toEqual(false)
    expect(isElement([1,2,3])).toEqual(false)
    expect(isElement(4.1231313)).toEqual(false)
    expect(isElement(-2.2)).toEqual(false)
  })
  test ('isDocument()', () => {
    expect(isDocument(0)).toEqual(false)
    expect(isDocument(-2)).toEqual(false)
    expect(isDocument(false)).toEqual(false)
    expect(isDocument(true)).toEqual(false)
    expect(isDocument({})).toEqual(false)
    expect(isDocument(/\d/)).toEqual(false)
    expect(isDocument([])).toEqual(false)
    expect(isDocument(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isDocument(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isDocument(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isDocument(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new Error()
      expect (isDocument(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = document
      expect (isDocument(item)).toEqual(true)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isDocument(item)).toEqual(false)
    }
    test5()
    expect(isDocument('null')).toEqual(false)
    expect(isDocument('undefined')).toEqual(false)
    expect(isDocument(undefined)).toEqual(false)
    expect(isDocument()).toEqual(false)
    expect(isDocument('2.111')).toEqual(false)
    expect(isDocument([1,2,3])).toEqual(false)
    expect(isDocument(4.1231313)).toEqual(false)
    expect(isDocument(-2.2)).toEqual(false)
  })
  test ('isWindow()', () => {
    expect(isWindow(0)).toEqual(false)
    expect(isWindow(-2)).toEqual(false)
    expect(isWindow(false)).toEqual(false)
    expect(isWindow(true)).toEqual(false)
    expect(isWindow({})).toEqual(false)
    expect(isWindow(/\d/)).toEqual(false)
    expect(isWindow([])).toEqual(false)
    expect(isWindow(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isWindow(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isWindow(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isWindow(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new Error()
      expect (isWindow(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = document
      expect (isWindow(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isWindow(item)).toEqual(false)
    }
    test5()
    expect(isWindow('null')).toEqual(false)
    expect(isWindow('undefined')).toEqual(false)
    expect(isWindow(undefined)).toEqual(false)
    expect(isWindow()).toEqual(false)
    expect(isWindow('2.111')).toEqual(false)
    expect(isWindow([1,2,3])).toEqual(false)
    expect(isWindow(4.1231313)).toEqual(false)
    expect(isWindow(-2.2)).toEqual(false)
  })
  test ('isFormData()', () => {
    expect(isFormData(0)).toEqual(false)
    expect(isFormData(-2)).toEqual(false)
    expect(isFormData(false)).toEqual(false)
    expect(isFormData(true)).toEqual(false)
    expect(isFormData({})).toEqual(false)
    expect(isFormData(/\d/)).toEqual(false)
    expect(isFormData([])).toEqual(false)
    expect(isFormData(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isFormData(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isFormData(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isFormData(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new FormData()
      expect (isFormData(item)).toEqual(true)
    }
    test3()
    const test4 = function () {
      const item = document
      expect (isFormData(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isFormData(item)).toEqual(false)
    }
    test5()
    expect(isFormData('null')).toEqual(false)
    expect(isFormData('undefined')).toEqual(false)
    expect(isFormData(undefined)).toEqual(false)
    expect(isFormData()).toEqual(false)
    expect(isFormData('2.111')).toEqual(false)
    expect(isFormData([1,2,3])).toEqual(false)
    expect(isFormData(4.1231313)).toEqual(false)
    expect(isFormData(-2.2)).toEqual(false)
  })
  test ('isMap()', () => {
    expect(isMap(0)).toEqual(false)
    expect(isMap(-2)).toEqual(false)
    expect(isMap(false)).toEqual(false)
    expect(isMap(true)).toEqual(false)
    expect(isMap({})).toEqual(false)
    expect(isMap(/\d/)).toEqual(false)
    expect(isMap([])).toEqual(false)
    expect(isMap(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isMap(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isMap(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isMap(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new FormData()
      expect (isMap(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (isMap(item)).toEqual(true)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isMap(item)).toEqual(false)
    }
    test5()
    expect(isMap('null')).toEqual(false)
    expect(isMap('undefined')).toEqual(false)
    expect(isMap(undefined)).toEqual(false)
    expect(isMap()).toEqual(false)
    expect(isMap('2.111')).toEqual(false)
    expect(isMap([1,2,3])).toEqual(false)
    expect(isMap(4.1231313)).toEqual(false)
    expect(isMap(-2.2)).toEqual(false)
  })
  test ('isWeakMap()', () => {
    expect(isWeakMap(0)).toEqual(false)
    expect(isWeakMap(-2)).toEqual(false)
    expect(isWeakMap(false)).toEqual(false)
    expect(isWeakMap(true)).toEqual(false)
    expect(isWeakMap({})).toEqual(false)
    expect(isWeakMap(/\d/)).toEqual(false)
    expect(isWeakMap([])).toEqual(false)
    expect(isWeakMap(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isWeakMap(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (isWeakMap(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isWeakMap(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new WeakMap()
      expect (isWeakMap(item)).toEqual(true)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (isWeakMap(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isWeakMap(item)).toEqual(false)
    }
    test5()
    expect(isWeakMap('null')).toEqual(false)
    expect(isWeakMap('undefined')).toEqual(false)
    expect(isWeakMap(undefined)).toEqual(false)
    expect(isWeakMap()).toEqual(false)
    expect(isWeakMap('2.111')).toEqual(false)
    expect(isWeakMap([1,2,3])).toEqual(false)
    expect(isWeakMap(4.1231313)).toEqual(false)
    expect(isWeakMap(-2.2)).toEqual(false)
  })
  test ('isSet()', () => {
    expect(isSet(0)).toEqual(false)
    expect(isSet(-2)).toEqual(false)
    expect(isSet(false)).toEqual(false)
    expect(isSet(true)).toEqual(false)
    expect(isSet({})).toEqual(false)
    expect(isSet(/\d/)).toEqual(false)
    expect(isSet([])).toEqual(false)
    expect(isSet(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isSet(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Set()
      expect (isSet(item)).toEqual(true)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isSet(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new WeakMap()
      expect (isSet(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (isSet(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isSet(item)).toEqual(false)
    }
    test5()
    expect(isSet('null')).toEqual(false)
    expect(isSet('undefined')).toEqual(false)
    expect(isSet(undefined)).toEqual(false)
    expect(isSet()).toEqual(false)
    expect(isSet('2.111')).toEqual(false)
    expect(isSet([1,2,3])).toEqual(false)
    expect(isSet(4.1231313)).toEqual(false)
    expect(isSet(-2.2)).toEqual(false)
  })
  test ('isWeakSet()', () => {
    expect(isWeakSet(0)).toEqual(false)
    expect(isWeakSet(-2)).toEqual(false)
    expect(isWeakSet(false)).toEqual(false)
    expect(isWeakSet(true)).toEqual(false)
    expect(isWeakSet({})).toEqual(false)
    expect(isWeakSet(/\d/)).toEqual(false)
    expect(isWeakSet([])).toEqual(false)
    expect(isWeakSet(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (isWeakSet(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Set()
      expect (isWeakSet(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (isWeakSet(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new WeakSet()
      expect (isWeakSet(item)).toEqual(true)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (isWeakSet(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (isWeakSet(item)).toEqual(false)
    }
    test5()
    expect(isWeakSet('null')).toEqual(false)
    expect(isWeakSet('undefined')).toEqual(false)
    expect(isWeakSet(undefined)).toEqual(false)
    expect(isWeakSet()).toEqual(false)
    expect(isWeakSet('2.111')).toEqual(false)
    expect(isWeakSet([1,2,3])).toEqual(false)
    expect(isWeakSet(4.1231313)).toEqual(false)
    expect(isWeakSet(-2.2)).toEqual(false)
  })
  test ('isLeapYear()', () => {
    expect(isLeapYear('2022-1-20')).toEqual(false)
    expect(isLeapYear('2020-3-20')).toEqual(true)
    expect(isLeapYear(1606752000000)).toEqual(true)
    expect(isLeapYear('2020/12/01')).toEqual(true)
  })
  test('getType()', () => {
    expect(getType()).toEqual('Undefined')
    expect(getType(null)).toEqual('Null')
    expect(getType('')).toEqual('String')
    expect(getType(/\d/)).toEqual('RegExp')
    expect(getType(1)).toEqual('Number')
    expect(getType([])).toEqual('Array')
    expect(getType({})).toEqual('Object')
    expect(getType(new Error)).toEqual('Error')
    expect(getType(function () {
      console.log(1)
    })).toEqual('Function')
  })
  test ('getSize()', () => {
    expect(getSize()).toEqual(0)
    expect(getSize({})).toEqual(0)
    expect(getSize([])).toEqual(0)
    expect(getSize(null)).toEqual(0)
    expect(getSize(undefined)).toEqual(0)
    expect(getSize(false)).toEqual(0)
    expect(getSize(-1)).toEqual(0)
    expect(getSize(10)).toEqual(0)
    expect(getSize('123')).toEqual(3)
    expect(getSize([1,3])).toEqual(2)
    expect(getSize({a: 1, b: 4})).toEqual(2)
  })
  test ('stringToJSON()', () => {
    expect(stringToJSON('123')).toEqual(123)
    expect(stringToJSON()).toEqual({})
    expect(stringToJSON('')).toEqual({})
    expect(stringToJSON('[1,3]')).toEqual([1,3])
    expect(stringToJSON('{"a": 1, "b": 4}')).toEqual({a: 1, b: 4})
  })
  test ('JSONToString()', () => {
    expect(JSONtoString(123)).toEqual('123')
    expect(JSONtoString(null)).toEqual('')
    expect(JSONtoString(undefined)).toEqual('')
    expect(JSONtoString()).toEqual('')
    expect(JSONtoString(-1)).toEqual('-1')
    expect(JSONtoString([])).toEqual('[]')
    expect(JSONtoString({})).toEqual('{}')
  })
  test ('keys()', () => {
    expect(keys(123)).toEqual([])
    expect(keys('123')).toEqual(['0','1','2'])
    expect(keys(null)).toEqual([])
    expect(keys(undefined)).toEqual([])
    expect(keys()).toEqual([])
    expect(keys([3,4,5])).toEqual(['0','1','2'])
    expect(keys({a:1,b:2,c:3})).toEqual(['a','b','c'])
  })
  test ('values()', () => {
    expect(values(123)).toEqual([])
    expect(values('123')).toEqual(['1','2','3'])
    expect(values(null)).toEqual([])
    expect(values(undefined)).toEqual([])
    expect(values()).toEqual([])
    expect(values([3,4,5])).toEqual([3,4,5])
    expect(values({a:1,b:2,c:3})).toEqual([1,2,3])
  })
  test ('entries()', () => {
    expect(entries(123)).toEqual({})
    expect(entries(null)).toEqual({})
    expect(entries(undefined)).toEqual({})
    expect(entries()).toEqual({})
    expect(entries([3,4,5])).toEqual([[0,3],[1,4],[2,5]])
    expect(entries({a:1,b:2,c:3})).toEqual([['a',1], ['b',2], ['c',3]])
  })
  test ('first()', () => {
    expect(first(123)).toEqual(123)
    expect(first(null)).toEqual(null)
    expect(first(undefined)).toEqual(undefined)
    expect(first()).toEqual(undefined)
    expect(first([3,4,5])).toEqual(3)
    expect(first({a:1,b:2,c:3})).toEqual(1)
  })
  test ('last()', () => {
    expect(last(123)).toEqual(123)
    expect(last(null)).toEqual(null)
    expect(last(undefined)).toEqual(undefined)
    expect(last()).toEqual(undefined)
    expect(last([3,4,5])).toEqual(5)
    expect(last({a:1,b:2,c:3})).toEqual(3)
  })
})
