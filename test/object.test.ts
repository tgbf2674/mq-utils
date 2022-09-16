import mmqUtils from '../func';

describe('object function', () => {
  test('clear()', () => {
    expect(mmqUtils.clear([11,22,33])).toEqual([])
    expect(mmqUtils.clear([11,22,33],undefined)).toEqual([undefined,undefined,undefined])
    expect(mmqUtils.clear([11,22,33],null)).toEqual([null,null,null])
    expect(mmqUtils.clear({b: 11, c: 22})).toEqual({})
    expect(mmqUtils.clear({b: 11, c: 22}, undefined)).toEqual({b: undefined, c: undefined})
    expect(mmqUtils.clear({b: 11, c: 22}, null)).toEqual({b: null, c: null})
  })
})
