import {isNaN, isFinite, isUndefined, isArray, isFloat, isInteger, isFunction} from '../func';
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
})
