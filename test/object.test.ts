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
  test('clone()', () => {
    const v1 = {a: 11, b: {b1: 22}}
    const v2 = mmqUtils.clone(v1, false)
    const v3 = mmqUtils.clone(v1, true)
    expect(v2).toEqual({a: 11, b: {b1: 22}})
    expect(v1.a === v2.a).toEqual(true)
    expect(v1 === v3).toEqual(false)
    const a = {
      name: 'sunshine_lin',
      age: 23,
      hobbies: { sports: '篮球', tv: '雍正王朝' },
      works: ['2020', '2021'],
      map: new Map([['haha', 111], ['xixi', 222]]),
      set: new Set([1, 2, 3]),
      func: (name: any, age: any) => `${name}今年${age}岁啦！！！`,
      sym: Symbol(123),
      reg: new RegExp(/haha/g),
    }
    const b = mmqUtils.clone(a, true)
    expect(a.func === b.func).toEqual(false)
  })
})
