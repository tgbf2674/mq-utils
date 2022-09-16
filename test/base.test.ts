import mmqUtils from '../func';
describe('Base function', () => {
  test ('isNaN()', () => {
    expect(mmqUtils.isNaN()).toEqual(false)
    expect(mmqUtils.isNaN(0)).toEqual(false)
    expect(mmqUtils.isNaN(-1)).toEqual(false)
    expect(mmqUtils.isNaN(1)).toEqual(false)
    expect(mmqUtils.isNaN(null)).toEqual(false)
    expect(mmqUtils.isNaN('')).toEqual(false)
    expect(mmqUtils.isNaN(true)).toEqual(false)
    expect(mmqUtils.isNaN(false)).toEqual(false)
    expect(mmqUtils.isNaN({})).toEqual(false)
    expect(mmqUtils.isNaN('null')).toEqual(false)
    expect(mmqUtils.isNaN('NAN')).toEqual(false)
    expect(mmqUtils.isNaN(/\d/)).toEqual(false)
    expect(mmqUtils.isNaN(NaN)).toEqual(true)
  })
  test ('isFinite()', () => {
    expect(mmqUtils.isFinite()).toEqual(false)
    expect(mmqUtils.isFinite(null)).toEqual(false)
    expect(mmqUtils.isFinite(undefined)).toEqual(false)
    expect(mmqUtils.isFinite(NaN)).toEqual(false)
    expect(mmqUtils.isFinite({})).toEqual(false)
    expect(mmqUtils.isFinite([])).toEqual(false)
    expect(mmqUtils.isFinite(/\d/)).toEqual(false)
    expect(mmqUtils.isFinite('num')).toEqual(false)
    expect(mmqUtils.isFinite('5')).toEqual(false)
    expect(mmqUtils.isFinite('')).toEqual(false)
    expect(mmqUtils.isFinite(-2)).toEqual(true)
    expect(mmqUtils.isFinite(0)).toEqual(true)
    expect(mmqUtils.isFinite(88)).toEqual(true)
    expect(mmqUtils.isFinite(2e64)).toEqual(true)
  })
  test ('isUndefined()', () => {
    expect(mmqUtils.isUndefined(0)).toEqual(false)
    expect(mmqUtils.isUndefined(-2)).toEqual(false)
    expect(mmqUtils.isUndefined(false)).toEqual(false)
    expect(mmqUtils.isUndefined({})).toEqual(false)
    expect(mmqUtils.isUndefined([])).toEqual(false)
    expect(mmqUtils.isUndefined(/\d/)).toEqual(false)
    expect(mmqUtils.isUndefined(null)).toEqual(false)
    expect(mmqUtils.isUndefined('null')).toEqual(false)
    expect(mmqUtils.isUndefined('undefined')).toEqual(false)
    expect(mmqUtils.isUndefined(undefined)).toEqual(true)
    expect(mmqUtils.isUndefined()).toEqual(true)
  })
  test ('isArray()', () => {
    expect(mmqUtils.isArray(0)).toEqual(false)
    expect(mmqUtils.isArray(-2)).toEqual(false)
    expect(mmqUtils.isArray(false)).toEqual(false)
    expect(mmqUtils.isArray({})).toEqual(false)
    expect(mmqUtils.isArray(/\d/)).toEqual(false)
    expect(mmqUtils.isArray(null)).toEqual(false)
    expect(mmqUtils.isArray('null')).toEqual(false)
    expect(mmqUtils.isArray('undefined')).toEqual(false)
    expect(mmqUtils.isArray(undefined)).toEqual(false)
    expect(mmqUtils.isArray()).toEqual(false)
    expect(mmqUtils.isArray([])).toEqual(true)
    expect(mmqUtils.isArray([4, 2])).toEqual(true)
  })
  test ('isFloat()', () => {
    expect(mmqUtils.isFloat(0)).toEqual(false)
    expect(mmqUtils.isFloat(-2)).toEqual(false)
    expect(mmqUtils.isFloat(false)).toEqual(false)
    expect(mmqUtils.isFloat({})).toEqual(false)
    expect(mmqUtils.isFloat(/\d/)).toEqual(false)
    expect(mmqUtils.isFloat(null)).toEqual(false)
    expect(mmqUtils.isFloat('null')).toEqual(false)
    expect(mmqUtils.isFloat('undefined')).toEqual(false)
    expect(mmqUtils.isFloat(undefined)).toEqual(false)
    expect(mmqUtils.isFloat()).toEqual(false)
    expect(mmqUtils.isFloat('2.111')).toEqual(false)
    expect(mmqUtils.isFloat(2.0)).toEqual(false)
    expect(mmqUtils.isFloat(4.1231313)).toEqual(true)
    expect(mmqUtils.isFloat(-2.2)).toEqual(true)
  })
  test ('isInteger()', () => {
    expect(mmqUtils.isInteger(0)).toEqual(true)
    expect(mmqUtils.isInteger(-2)).toEqual(true)
    expect(mmqUtils.isInteger(false)).toEqual(false)
    expect(mmqUtils.isInteger({})).toEqual(false)
    expect(mmqUtils.isInteger(/\d/)).toEqual(false)
    expect(mmqUtils.isInteger(null)).toEqual(false)
    expect(mmqUtils.isInteger('null')).toEqual(false)
    expect(mmqUtils.isInteger('undefined')).toEqual(false)
    expect(mmqUtils.isInteger(undefined)).toEqual(false)
    expect(mmqUtils.isInteger()).toEqual(false)
    expect(mmqUtils.isInteger('2.111')).toEqual(false)
    expect(mmqUtils.isInteger(2.0)).toEqual(true)
    expect(mmqUtils.isInteger(4.1231313)).toEqual(false)
    expect(mmqUtils.isInteger(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isFunction()', () => {
    expect(mmqUtils.isFunction(false)).toEqual(false)
    expect(mmqUtils.isFunction({})).toEqual(false)
    expect(mmqUtils.isFunction(/\d/)).toEqual(false)
    expect(mmqUtils.isFunction(null)).toEqual(false)
    expect(mmqUtils.isFunction('null')).toEqual(false)
    expect(mmqUtils.isFunction('undefined')).toEqual(false)
    expect(mmqUtils.isFunction(undefined)).toEqual(false)
    expect(mmqUtils.isFunction()).toEqual(false)
    expect(mmqUtils.isFunction('2.111')).toEqual(false)
    expect(mmqUtils.isFunction(2.0)).toEqual(false)
    expect(mmqUtils.isFunction(4.1231313)).toEqual(false)
    expect(mmqUtils.isFunction(-2.2)).toEqual(false)
    const method = () => {
      expect(mmqUtils.isFunction(() => {
        console.log(1)
      })).toEqual(true)
    }
    method()
  })
  test ('mmqUtils.isBoolean()', () => {
    expect(mmqUtils.isBoolean(0)).toEqual(false)
    expect(mmqUtils.isBoolean(-2)).toEqual(false)
    expect(mmqUtils.isBoolean(false)).toEqual(true)
    expect(mmqUtils.isBoolean(true)).toEqual(true)
    expect(mmqUtils.isBoolean({})).toEqual(false)
    expect(mmqUtils.isBoolean(/\d/)).toEqual(false)
    expect(mmqUtils.isBoolean(null)).toEqual(false)
    expect(mmqUtils.isBoolean('null')).toEqual(false)
    expect(mmqUtils.isBoolean('undefined')).toEqual(false)
    expect(mmqUtils.isBoolean(undefined)).toEqual(false)
    expect(mmqUtils.isBoolean()).toEqual(false)
    expect(mmqUtils.isBoolean('2.111')).toEqual(false)
    expect(mmqUtils.isBoolean(2.0)).toEqual(false)
    expect(mmqUtils.isBoolean(4.1231313)).toEqual(false)
    expect(mmqUtils.isBoolean(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isString()', () => {
    expect(mmqUtils.isString(0)).toEqual(false)
    expect(mmqUtils.isString(-2)).toEqual(false)
    expect(mmqUtils.isString(false)).toEqual(false)
    expect(mmqUtils.isString(true)).toEqual(false)
    expect(mmqUtils.isString({})).toEqual(false)
    expect(mmqUtils.isString(/\d/)).toEqual(false)
    expect(mmqUtils.isString(null)).toEqual(false)
    expect(mmqUtils.isString('null')).toEqual(true)
    expect(mmqUtils.isString('undefined')).toEqual(true)
    expect(mmqUtils.isString(undefined)).toEqual(false)
    expect(mmqUtils.isString()).toEqual(false)
    expect(mmqUtils.isString('2.111')).toEqual(true)
    expect(mmqUtils.isString(2.0)).toEqual(false)
    expect(mmqUtils.isString(4.1231313)).toEqual(false)
    expect(mmqUtils.isString(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isNumber()', () => {
    expect(mmqUtils.isNumber(0)).toEqual(true)
    expect(mmqUtils.isNumber(-2)).toEqual(true)
    expect(mmqUtils.isNumber(false)).toEqual(false)
    expect(mmqUtils.isNumber(true)).toEqual(false)
    expect(mmqUtils.isNumber({})).toEqual(false)
    expect(mmqUtils.isNumber(/\d/)).toEqual(false)
    expect(mmqUtils.isNumber(null)).toEqual(false)
    expect(mmqUtils.isNumber('null')).toEqual(false)
    expect(mmqUtils.isNumber('undefined')).toEqual(false)
    expect(mmqUtils.isNumber(undefined)).toEqual(false)
    expect(mmqUtils.isNumber()).toEqual(false)
    expect(mmqUtils.isNumber('2.111')).toEqual(false)
    expect(mmqUtils.isNumber(2.0)).toEqual(true)
    expect(mmqUtils.isNumber(4.1231313)).toEqual(true)
    expect(mmqUtils.isNumber(-2.2)).toEqual(true)
  })
  test ('mmqUtils.isRegExp()', () => {
    expect(mmqUtils.isRegExp(0)).toEqual(false)
    expect(mmqUtils.isRegExp(-2)).toEqual(false)
    expect(mmqUtils.isRegExp(false)).toEqual(false)
    expect(mmqUtils.isRegExp(true)).toEqual(false)
    expect(mmqUtils.isRegExp({})).toEqual(false)
    expect(mmqUtils.isRegExp(/\d/)).toEqual(true)
    expect(mmqUtils.isRegExp(null)).toEqual(false)
    expect(mmqUtils.isRegExp('null')).toEqual(false)
    expect(mmqUtils.isRegExp('undefined')).toEqual(false)
    expect(mmqUtils.isRegExp(undefined)).toEqual(false)
    expect(mmqUtils.isRegExp()).toEqual(false)
    expect(mmqUtils.isRegExp('2.111')).toEqual(false)
    expect(mmqUtils.isRegExp(2.0)).toEqual(false)
    expect(mmqUtils.isRegExp(4.1231313)).toEqual(false)
    expect(mmqUtils.isRegExp(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isObject()', () => {
    expect(mmqUtils.isObject(0)).toEqual(false)
    expect(mmqUtils.isObject(-2)).toEqual(false)
    expect(mmqUtils.isObject(false)).toEqual(false)
    expect(mmqUtils.isObject(true)).toEqual(false)
    expect(mmqUtils.isObject({})).toEqual(true)
    expect(mmqUtils.isObject(/\d/)).toEqual(true)
    expect(mmqUtils.isObject([])).toEqual(true)
    expect(mmqUtils.isObject(null)).toEqual(true)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isObject(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isObject(item)).toEqual(true)
    }
    testDate()
    expect(mmqUtils.isObject('null')).toEqual(false)
    expect(mmqUtils.isObject('undefined')).toEqual(false)
    expect(mmqUtils.isObject(undefined)).toEqual(false)
    expect(mmqUtils.isObject()).toEqual(false)
    expect(mmqUtils.isObject('2.111')).toEqual(false)
    expect(mmqUtils.isObject(2.0)).toEqual(false)
    expect(mmqUtils.isObject(4.1231313)).toEqual(false)
    expect(mmqUtils.isObject(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isRealObject()', () => {
    expect(mmqUtils.isRealObject(0)).toEqual(false)
    expect(mmqUtils.isRealObject(-2)).toEqual(false)
    expect(mmqUtils.isRealObject(false)).toEqual(false)
    expect(mmqUtils.isRealObject(true)).toEqual(false)
    expect(mmqUtils.isRealObject({})).toEqual(true)
    expect(mmqUtils.isRealObject(/\d/)).toEqual(false)
    expect(mmqUtils.isRealObject([])).toEqual(false)
    expect(mmqUtils.isRealObject(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isRealObject(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isRealObject(item)).toEqual(false)
    }
    testDate()
    expect(mmqUtils.isRealObject('null')).toEqual(false)
    expect(mmqUtils.isRealObject('undefined')).toEqual(false)
    expect(mmqUtils.isRealObject(undefined)).toEqual(false)
    expect(mmqUtils.isRealObject()).toEqual(false)
    expect(mmqUtils.isRealObject('2.111')).toEqual(false)
    expect(mmqUtils.isRealObject(2.0)).toEqual(false)
    expect(mmqUtils.isRealObject(4.1231313)).toEqual(false)
    expect(mmqUtils.isRealObject(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isDate()', () => {
    expect(mmqUtils.isDate(0)).toEqual(false)
    expect(mmqUtils.isDate(-2)).toEqual(false)
    expect(mmqUtils.isDate(false)).toEqual(false)
    expect(mmqUtils.isDate(true)).toEqual(false)
    expect(mmqUtils.isDate({})).toEqual(false)
    expect(mmqUtils.isDate(/\d/)).toEqual(false)
    expect(mmqUtils.isDate([])).toEqual(false)
    expect(mmqUtils.isDate(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isDate(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isDate(item)).toEqual(true)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isDate(item)).toEqual(true)
    }
    testDate2()
    expect(mmqUtils.isDate('null')).toEqual(false)
    expect(mmqUtils.isDate('undefined')).toEqual(false)
    expect(mmqUtils.isDate(undefined)).toEqual(false)
    expect(mmqUtils.isDate()).toEqual(false)
    expect(mmqUtils.isDate('2.111')).toEqual(false)
    expect(mmqUtils.isDate(2.0)).toEqual(false)
    expect(mmqUtils.isDate(4.1231313)).toEqual(false)
    expect(mmqUtils.isDate(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isValidDate()', () => {
    expect(mmqUtils.isValidDate(0)).toEqual(false)
    expect(mmqUtils.isValidDate(-2)).toEqual(false)
    expect(mmqUtils.isValidDate(false)).toEqual(false)
    expect(mmqUtils.isValidDate(true)).toEqual(false)
    expect(mmqUtils.isValidDate({})).toEqual(false)
    expect(mmqUtils.isValidDate(/\d/)).toEqual(false)
    expect(mmqUtils.isValidDate([])).toEqual(false)
    expect(mmqUtils.isValidDate(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isValidDate(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isValidDate(item)).toEqual(true)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isValidDate(item)).toEqual(false)
    }
    testDate2()
    expect(mmqUtils.isValidDate('null')).toEqual(false)
    expect(mmqUtils.isValidDate('undefined')).toEqual(false)
    expect(mmqUtils.isValidDate(undefined)).toEqual(false)
    expect(mmqUtils.isValidDate()).toEqual(false)
    expect(mmqUtils.isValidDate('2.111')).toEqual(false)
    expect(mmqUtils.isValidDate(2.0)).toEqual(false)
    expect(mmqUtils.isValidDate(4.1231313)).toEqual(false)
    expect(mmqUtils.isValidDate(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isError()', () => {
    expect(mmqUtils.isError(0)).toEqual(false)
    expect(mmqUtils.isError(-2)).toEqual(false)
    expect(mmqUtils.isError(false)).toEqual(false)
    expect(mmqUtils.isError(true)).toEqual(false)
    expect(mmqUtils.isError({})).toEqual(false)
    expect(mmqUtils.isError(/\d/)).toEqual(false)
    expect(mmqUtils.isError([])).toEqual(false)
    expect(mmqUtils.isError(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isError(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isError(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isError(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (mmqUtils.isError(item)).toEqual(true)
    }
    testDate3()
    expect(mmqUtils.isError('null')).toEqual(false)
    expect(mmqUtils.isError('undefined')).toEqual(false)
    expect(mmqUtils.isError(undefined)).toEqual(false)
    expect(mmqUtils.isError()).toEqual(false)
    expect(mmqUtils.isError('2.111')).toEqual(false)
    expect(mmqUtils.isError(2.0)).toEqual(false)
    expect(mmqUtils.isError(4.1231313)).toEqual(false)
    expect(mmqUtils.isError(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isTypeError()', () => {
    expect(mmqUtils.isTypeError(0)).toEqual(false)
    expect(mmqUtils.isTypeError(-2)).toEqual(false)
    expect(mmqUtils.isTypeError(false)).toEqual(false)
    expect(mmqUtils.isTypeError(true)).toEqual(false)
    expect(mmqUtils.isTypeError({})).toEqual(false)
    expect(mmqUtils.isTypeError(/\d/)).toEqual(false)
    expect(mmqUtils.isTypeError([])).toEqual(false)
    expect(mmqUtils.isTypeError(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isTypeError(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isTypeError(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isTypeError(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (mmqUtils.isTypeError(item)).toEqual(false)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (mmqUtils.isTypeError(item)).toEqual(true)
    }
    testDate4()
    expect(mmqUtils.isTypeError('null')).toEqual(false)
    expect(mmqUtils.isTypeError('undefined')).toEqual(false)
    expect(mmqUtils.isTypeError(undefined)).toEqual(false)
    expect(mmqUtils.isTypeError()).toEqual(false)
    expect(mmqUtils.isTypeError('2.111')).toEqual(false)
    expect(mmqUtils.isTypeError(2.0)).toEqual(false)
    expect(mmqUtils.isTypeError(4.1231313)).toEqual(false)
    expect(mmqUtils.isTypeError(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isEmpty()', () => {
    expect(mmqUtils.isEmpty(0)).toEqual(false)
    expect(mmqUtils.isEmpty(-2)).toEqual(false)
    expect(mmqUtils.isEmpty(false)).toEqual(false)
    expect(mmqUtils.isEmpty(true)).toEqual(false)
    expect(mmqUtils.isEmpty({})).toEqual(true)
    expect(mmqUtils.isEmpty(/\d/)).toEqual(true)
    expect(mmqUtils.isEmpty([])).toEqual(true)
    expect(mmqUtils.isEmpty(null)).toEqual(true)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isEmpty(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isEmpty(item)).toEqual(true)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isEmpty(item)).toEqual(true)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (mmqUtils.isEmpty(item)).toEqual(true)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (mmqUtils.isEmpty(item)).toEqual(true)
    }
    testDate4()
    expect(mmqUtils.isEmpty('null')).toEqual(false)
    expect(mmqUtils.isEmpty('undefined')).toEqual(false)
    expect(mmqUtils.isEmpty(undefined)).toEqual(false)
    expect(mmqUtils.isEmpty()).toEqual(false)
    expect(mmqUtils.isEmpty('2.111')).toEqual(false)
    expect(mmqUtils.isEmpty([1,2,3])).toEqual(false)
    expect(mmqUtils.isEmpty(4.1231313)).toEqual(false)
    expect(mmqUtils.isEmpty(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isNull()', () => {
    expect(mmqUtils.isNull(0)).toEqual(false)
    expect(mmqUtils.isNull(-2)).toEqual(false)
    expect(mmqUtils.isNull(false)).toEqual(false)
    expect(mmqUtils.isNull(true)).toEqual(false)
    expect(mmqUtils.isNull({})).toEqual(false)
    expect(mmqUtils.isNull(/\d/)).toEqual(false)
    expect(mmqUtils.isNull([])).toEqual(false)
    expect(mmqUtils.isNull(null)).toEqual(true)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isNull(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isNull(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isNull(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (mmqUtils.isNull(item)).toEqual(false)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (mmqUtils.isNull(item)).toEqual(false)
    }
    testDate4()
    expect(mmqUtils.isNull('null')).toEqual(false)
    expect(mmqUtils.isNull('undefined')).toEqual(false)
    expect(mmqUtils.isNull(undefined)).toEqual(false)
    expect(mmqUtils.isNull()).toEqual(false)
    expect(mmqUtils.isNull('2.111')).toEqual(false)
    expect(mmqUtils.isNull([1,2,3])).toEqual(false)
    expect(mmqUtils.isNull(4.1231313)).toEqual(false)
    expect(mmqUtils.isNull(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isSymbol()', () => {
    expect(mmqUtils.isSymbol(0)).toEqual(false)
    expect(mmqUtils.isSymbol(-2)).toEqual(false)
    expect(mmqUtils.isSymbol(false)).toEqual(false)
    expect(mmqUtils.isSymbol(true)).toEqual(false)
    expect(mmqUtils.isSymbol({})).toEqual(false)
    expect(mmqUtils.isSymbol(/\d/)).toEqual(false)
    expect(mmqUtils.isSymbol([])).toEqual(false)
    expect(mmqUtils.isSymbol(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isSymbol(item)).toEqual(true)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isSymbol(item)).toEqual(false)
    }
    testDate()
    const testDate2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isSymbol(item)).toEqual(false)
    }
    testDate2()
    const testDate3 = function () {
      const item = new Error()
      expect (mmqUtils.isSymbol(item)).toEqual(false)
    }
    testDate3()
    const testDate4 = function () {
      const item = new TypeError()
      expect (mmqUtils.isSymbol(item)).toEqual(false)
    }
    testDate4()
    expect(mmqUtils.isSymbol('null')).toEqual(false)
    expect(mmqUtils.isSymbol('undefined')).toEqual(false)
    expect(mmqUtils.isSymbol(undefined)).toEqual(false)
    expect(mmqUtils.isSymbol()).toEqual(false)
    expect(mmqUtils.isSymbol('2.111')).toEqual(false)
    expect(mmqUtils.isSymbol([1,2,3])).toEqual(false)
    expect(mmqUtils.isSymbol(4.1231313)).toEqual(false)
    expect(mmqUtils.isSymbol(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isElement()', () => {
    expect(mmqUtils.isElement(0)).toEqual(false)
    expect(mmqUtils.isElement(-2)).toEqual(false)
    expect(mmqUtils.isElement(false)).toEqual(false)
    expect(mmqUtils.isElement(true)).toEqual(false)
    expect(mmqUtils.isElement({})).toEqual(false)
    expect(mmqUtils.isElement(/\d/)).toEqual(false)
    expect(mmqUtils.isElement([])).toEqual(false)
    expect(mmqUtils.isElement(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isElement(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isElement(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isElement(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new Error()
      expect (mmqUtils.isElement(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = new TypeError()
      expect (mmqUtils.isElement(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isElement(item)).toEqual(true)
    }
    test5()
    expect(mmqUtils.isElement('null')).toEqual(false)
    expect(mmqUtils.isElement('undefined')).toEqual(false)
    expect(mmqUtils.isElement(undefined)).toEqual(false)
    expect(mmqUtils.isElement()).toEqual(false)
    expect(mmqUtils.isElement('2.111')).toEqual(false)
    expect(mmqUtils.isElement([1,2,3])).toEqual(false)
    expect(mmqUtils.isElement(4.1231313)).toEqual(false)
    expect(mmqUtils.isElement(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isDocument()', () => {
    expect(mmqUtils.isDocument(0)).toEqual(false)
    expect(mmqUtils.isDocument(-2)).toEqual(false)
    expect(mmqUtils.isDocument(false)).toEqual(false)
    expect(mmqUtils.isDocument(true)).toEqual(false)
    expect(mmqUtils.isDocument({})).toEqual(false)
    expect(mmqUtils.isDocument(/\d/)).toEqual(false)
    expect(mmqUtils.isDocument([])).toEqual(false)
    expect(mmqUtils.isDocument(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isDocument(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isDocument(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isDocument(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new Error()
      expect (mmqUtils.isDocument(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = document
      expect (mmqUtils.isDocument(item)).toEqual(true)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isDocument(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isDocument('null')).toEqual(false)
    expect(mmqUtils.isDocument('undefined')).toEqual(false)
    expect(mmqUtils.isDocument(undefined)).toEqual(false)
    expect(mmqUtils.isDocument()).toEqual(false)
    expect(mmqUtils.isDocument('2.111')).toEqual(false)
    expect(mmqUtils.isDocument([1,2,3])).toEqual(false)
    expect(mmqUtils.isDocument(4.1231313)).toEqual(false)
    expect(mmqUtils.isDocument(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isWindow()', () => {
    expect(mmqUtils.isWindow(0)).toEqual(false)
    expect(mmqUtils.isWindow(-2)).toEqual(false)
    expect(mmqUtils.isWindow(false)).toEqual(false)
    expect(mmqUtils.isWindow(true)).toEqual(false)
    expect(mmqUtils.isWindow({})).toEqual(false)
    expect(mmqUtils.isWindow(/\d/)).toEqual(false)
    expect(mmqUtils.isWindow([])).toEqual(false)
    expect(mmqUtils.isWindow(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isWindow(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isWindow(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isWindow(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new Error()
      expect (mmqUtils.isWindow(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = document
      expect (mmqUtils.isWindow(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isWindow(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isWindow('null')).toEqual(false)
    expect(mmqUtils.isWindow('undefined')).toEqual(false)
    expect(mmqUtils.isWindow(undefined)).toEqual(false)
    expect(mmqUtils.isWindow()).toEqual(false)
    expect(mmqUtils.isWindow('2.111')).toEqual(false)
    expect(mmqUtils.isWindow([1,2,3])).toEqual(false)
    expect(mmqUtils.isWindow(4.1231313)).toEqual(false)
    expect(mmqUtils.isWindow(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isFormData()', () => {
    expect(mmqUtils.isFormData(0)).toEqual(false)
    expect(mmqUtils.isFormData(-2)).toEqual(false)
    expect(mmqUtils.isFormData(false)).toEqual(false)
    expect(mmqUtils.isFormData(true)).toEqual(false)
    expect(mmqUtils.isFormData({})).toEqual(false)
    expect(mmqUtils.isFormData(/\d/)).toEqual(false)
    expect(mmqUtils.isFormData([])).toEqual(false)
    expect(mmqUtils.isFormData(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isFormData(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isFormData(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isFormData(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new FormData()
      expect (mmqUtils.isFormData(item)).toEqual(true)
    }
    test3()
    const test4 = function () {
      const item = document
      expect (mmqUtils.isFormData(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isFormData(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isFormData('null')).toEqual(false)
    expect(mmqUtils.isFormData('undefined')).toEqual(false)
    expect(mmqUtils.isFormData(undefined)).toEqual(false)
    expect(mmqUtils.isFormData()).toEqual(false)
    expect(mmqUtils.isFormData('2.111')).toEqual(false)
    expect(mmqUtils.isFormData([1,2,3])).toEqual(false)
    expect(mmqUtils.isFormData(4.1231313)).toEqual(false)
    expect(mmqUtils.isFormData(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isMap()', () => {
    expect(mmqUtils.isMap(0)).toEqual(false)
    expect(mmqUtils.isMap(-2)).toEqual(false)
    expect(mmqUtils.isMap(false)).toEqual(false)
    expect(mmqUtils.isMap(true)).toEqual(false)
    expect(mmqUtils.isMap({})).toEqual(false)
    expect(mmqUtils.isMap(/\d/)).toEqual(false)
    expect(mmqUtils.isMap([])).toEqual(false)
    expect(mmqUtils.isMap(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isMap(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isMap(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isMap(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new FormData()
      expect (mmqUtils.isMap(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (mmqUtils.isMap(item)).toEqual(true)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isMap(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isMap('null')).toEqual(false)
    expect(mmqUtils.isMap('undefined')).toEqual(false)
    expect(mmqUtils.isMap(undefined)).toEqual(false)
    expect(mmqUtils.isMap()).toEqual(false)
    expect(mmqUtils.isMap('2.111')).toEqual(false)
    expect(mmqUtils.isMap([1,2,3])).toEqual(false)
    expect(mmqUtils.isMap(4.1231313)).toEqual(false)
    expect(mmqUtils.isMap(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isWeakMap()', () => {
    expect(mmqUtils.isWeakMap(0)).toEqual(false)
    expect(mmqUtils.isWeakMap(-2)).toEqual(false)
    expect(mmqUtils.isWeakMap(false)).toEqual(false)
    expect(mmqUtils.isWeakMap(true)).toEqual(false)
    expect(mmqUtils.isWeakMap({})).toEqual(false)
    expect(mmqUtils.isWeakMap(/\d/)).toEqual(false)
    expect(mmqUtils.isWeakMap([])).toEqual(false)
    expect(mmqUtils.isWeakMap(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isWeakMap(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Date()
      expect (mmqUtils.isWeakMap(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isWeakMap(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new WeakMap()
      expect (mmqUtils.isWeakMap(item)).toEqual(true)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (mmqUtils.isWeakMap(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isWeakMap(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isWeakMap('null')).toEqual(false)
    expect(mmqUtils.isWeakMap('undefined')).toEqual(false)
    expect(mmqUtils.isWeakMap(undefined)).toEqual(false)
    expect(mmqUtils.isWeakMap()).toEqual(false)
    expect(mmqUtils.isWeakMap('2.111')).toEqual(false)
    expect(mmqUtils.isWeakMap([1,2,3])).toEqual(false)
    expect(mmqUtils.isWeakMap(4.1231313)).toEqual(false)
    expect(mmqUtils.isWeakMap(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isSet()', () => {
    expect(mmqUtils.isSet(0)).toEqual(false)
    expect(mmqUtils.isSet(-2)).toEqual(false)
    expect(mmqUtils.isSet(false)).toEqual(false)
    expect(mmqUtils.isSet(true)).toEqual(false)
    expect(mmqUtils.isSet({})).toEqual(false)
    expect(mmqUtils.isSet(/\d/)).toEqual(false)
    expect(mmqUtils.isSet([])).toEqual(false)
    expect(mmqUtils.isSet(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isSet(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Set()
      expect (mmqUtils.isSet(item)).toEqual(true)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isSet(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new WeakMap()
      expect (mmqUtils.isSet(item)).toEqual(false)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (mmqUtils.isSet(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isSet(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isSet('null')).toEqual(false)
    expect(mmqUtils.isSet('undefined')).toEqual(false)
    expect(mmqUtils.isSet(undefined)).toEqual(false)
    expect(mmqUtils.isSet()).toEqual(false)
    expect(mmqUtils.isSet('2.111')).toEqual(false)
    expect(mmqUtils.isSet([1,2,3])).toEqual(false)
    expect(mmqUtils.isSet(4.1231313)).toEqual(false)
    expect(mmqUtils.isSet(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isWeakSet()', () => {
    expect(mmqUtils.isWeakSet(0)).toEqual(false)
    expect(mmqUtils.isWeakSet(-2)).toEqual(false)
    expect(mmqUtils.isWeakSet(false)).toEqual(false)
    expect(mmqUtils.isWeakSet(true)).toEqual(false)
    expect(mmqUtils.isWeakSet({})).toEqual(false)
    expect(mmqUtils.isWeakSet(/\d/)).toEqual(false)
    expect(mmqUtils.isWeakSet([])).toEqual(false)
    expect(mmqUtils.isWeakSet(null)).toEqual(false)
    const testSymbol = function () {
      const item = Symbol('123')
      expect (mmqUtils.isWeakSet(item)).toEqual(false)
    }
    testSymbol()
    const testDate = function () {
      const item = new Set()
      expect (mmqUtils.isWeakSet(item)).toEqual(false)
    }
    testDate()
    const test2 = function () {
      const item = new Date('abc')
      expect (mmqUtils.isWeakSet(item)).toEqual(false)
    }
    test2()
    const test3 = function () {
      const item = new WeakSet()
      expect (mmqUtils.isWeakSet(item)).toEqual(true)
    }
    test3()
    const test4 = function () {
      const item = new Map()
      expect (mmqUtils.isWeakSet(item)).toEqual(false)
    }
    test4()
    const test5 = function () {
      const item = document.createElement('div')
      expect (mmqUtils.isWeakSet(item)).toEqual(false)
    }
    test5()
    expect(mmqUtils.isWeakSet('null')).toEqual(false)
    expect(mmqUtils.isWeakSet('undefined')).toEqual(false)
    expect(mmqUtils.isWeakSet(undefined)).toEqual(false)
    expect(mmqUtils.isWeakSet()).toEqual(false)
    expect(mmqUtils.isWeakSet('2.111')).toEqual(false)
    expect(mmqUtils.isWeakSet([1,2,3])).toEqual(false)
    expect(mmqUtils.isWeakSet(4.1231313)).toEqual(false)
    expect(mmqUtils.isWeakSet(-2.2)).toEqual(false)
  })
  test ('mmqUtils.isLeapYear()', () => {
    expect(mmqUtils.isLeapYear('2022-1-20')).toEqual(false)
    expect(mmqUtils.isLeapYear('2020-3-20')).toEqual(true)
    expect(mmqUtils.isLeapYear(1606752000000)).toEqual(true)
    expect(mmqUtils.isLeapYear('2020/12/01')).toEqual(true)
  })
  test('mmqUtils.getType()', () => {
    expect(mmqUtils.getType()).toEqual('Undefined')
    expect(mmqUtils.getType(null)).toEqual('Null')
    expect(mmqUtils.getType('')).toEqual('String')
    expect(mmqUtils.getType(/\d/)).toEqual('RegExp')
    expect(mmqUtils.getType(1)).toEqual('Number')
    expect(mmqUtils.getType([])).toEqual('Array')
    expect(mmqUtils.getType({})).toEqual('Object')
    expect(mmqUtils.getType(new Error)).toEqual('Error')
    expect(mmqUtils.getType(function () {
      console.log(1)
    })).toEqual('Function')
  })
  test ('mmqUtils.getSize()', () => {
    expect(mmqUtils.getSize()).toEqual(0)
    expect(mmqUtils.getSize({})).toEqual(0)
    expect(mmqUtils.getSize([])).toEqual(0)
    expect(mmqUtils.getSize(null)).toEqual(0)
    expect(mmqUtils.getSize(undefined)).toEqual(0)
    expect(mmqUtils.getSize(false)).toEqual(0)
    expect(mmqUtils.getSize(-1)).toEqual(0)
    expect(mmqUtils.getSize(10)).toEqual(0)
    expect(mmqUtils.getSize('123')).toEqual(3)
    expect(mmqUtils.getSize([1,3])).toEqual(2)
    expect(mmqUtils.getSize({a: 1, b: 4})).toEqual(2)
  })
  test ('mmqUtils.stringToJSON()', () => {
    expect(mmqUtils.stringToJSON('123')).toEqual(123)
    expect(mmqUtils.stringToJSON()).toEqual({})
    expect(mmqUtils.stringToJSON('')).toEqual({})
    expect(mmqUtils.stringToJSON('[1,3]')).toEqual([1,3])
    expect(mmqUtils.stringToJSON('{"a": 1, "b": 4}')).toEqual({a: 1, b: 4})
  })
  test ('mmqUtils.JSONtoString()', () => {
    expect(mmqUtils.JSONtoString(123)).toEqual('123')
    expect(mmqUtils.JSONtoString(null)).toEqual('')
    expect(mmqUtils.JSONtoString(undefined)).toEqual('')
    expect(mmqUtils.JSONtoString()).toEqual('')
    expect(mmqUtils.JSONtoString(-1)).toEqual('-1')
    expect(mmqUtils.JSONtoString([])).toEqual('[]')
    expect(mmqUtils.JSONtoString({})).toEqual('{}')
  })
  test ('mmqUtils.keys()', () => {
    expect(mmqUtils.keys(123)).toEqual([])
    expect(mmqUtils.keys('123')).toEqual(['0','1','2'])
    expect(mmqUtils.keys(null)).toEqual([])
    expect(mmqUtils.keys(undefined)).toEqual([])
    expect(mmqUtils.keys()).toEqual([])
    expect(mmqUtils.keys([3,4,5])).toEqual(['0','1','2'])
    expect(mmqUtils.keys({a:1,b:2,c:3})).toEqual(['a','b','c'])
  })
  test ('mmqUtils.values()', () => {
    expect(mmqUtils.values(123)).toEqual([])
    expect(mmqUtils.values('123')).toEqual(['1','2','3'])
    expect(mmqUtils.values(null)).toEqual([])
    expect(mmqUtils.values(undefined)).toEqual([])
    expect(mmqUtils.values()).toEqual([])
    expect(mmqUtils.values([3,4,5])).toEqual([3,4,5])
    expect(mmqUtils.values({a:1,b:2,c:3})).toEqual([1,2,3])
  })
  test ('mmqUtils.entries()', () => {
    expect(mmqUtils.entries(123)).toEqual({})
    expect(mmqUtils.entries(null)).toEqual({})
    expect(mmqUtils.entries(undefined)).toEqual({})
    expect(mmqUtils.entries()).toEqual({})
    expect(mmqUtils.entries([3,4,5])).toEqual([[0,3],[1,4],[2,5]])
    expect(mmqUtils.entries({a:1,b:2,c:3})).toEqual([['a',1], ['b',2], ['c',3]])
  })
  test ('mmqUtils.first()', () => {
    expect(mmqUtils.first(123)).toEqual(123)
    expect(mmqUtils.first(null)).toEqual(null)
    expect(mmqUtils.first(undefined)).toEqual(undefined)
    expect(mmqUtils.first()).toEqual(undefined)
    expect(mmqUtils.first([3,4,5])).toEqual(3)
    expect(mmqUtils.first({a:1,b:2,c:3})).toEqual(1)
  })
  test ('mmqUtils.last()', () => {
    expect(mmqUtils.last(123)).toEqual(123)
    expect(mmqUtils.last(null)).toEqual(null)
    expect(mmqUtils.last(undefined)).toEqual(undefined)
    expect(mmqUtils.last()).toEqual(undefined)
    expect(mmqUtils.last([3,4,5])).toEqual(5)
    expect(mmqUtils.last({a:1,b:2,c:3})).toEqual(3)
  })
})
