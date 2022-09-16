import clear from '../func/Object/clear';

describe('object function', () => {
  test('clear()', () => {
    expect(clear([11,22,33])).toEqual([])
    expect(clear([11,22,33],undefined)).toEqual([undefined,undefined,undefined])
    expect(clear([11,22,33],null)).toEqual([null,null,null])
    expect(clear({b: 11, c: 22})).toEqual({})
    expect(clear({b: 11, c: 22}, undefined)).toEqual({b: undefined, c: undefined})
    expect(clear({b: 11, c: 22}, null)).toEqual({b: null, c: null})
  })
})
