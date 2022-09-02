import { isNaN } from '../func'
describe('Base function', () => {
  test ('isNaN', () => {
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
})
