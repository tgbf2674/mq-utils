import mmqUtils from '../func';

describe('array function', () => {
  test('includeArrays()', () => {
    expect(
      mmqUtils.includeArrays([11, 22, 33], [11, 22, 33, 44])
    ).toEqual(false)
    expect(
      mmqUtils.includeArrays([], [])
    ).toEqual(true)
    expect(
      mmqUtils.includeArrays([11, 22, 33], [])
    ).toEqual(true)
    expect(
      mmqUtils.includeArrays([11, 22, 33], [11])
    ).toEqual(true)
    expect(
      mmqUtils.includeArrays([11, 22, 33], [22, 33])
    ).toEqual(true)
    expect(
      mmqUtils.includeArrays([11, 22, 33], [22, 44])
    ).toEqual(false)
  })
  test('arrayIndexOf()', () => {
    expect(mmqUtils.arrayIndexOf([11,2,4,433], 2)).toEqual(1)
    expect(mmqUtils.arrayIndexOf([11,2,4,433], 3)).toEqual(-1)
  })
  test('includesArray()', () => {
    expect(mmqUtils.includeArrays([11,2,4,433], [433])).toEqual(true)
    expect(mmqUtils.includeArrays([11,2,4,433], [])).toEqual(true)
    expect(mmqUtils.includeArrays([11,2,4,433], [2,4])).toEqual(true)
    expect(mmqUtils.includeArrays([11,2,4,433], [2,3])).toEqual(false)
  })
  test('remove()', () => {
    expect(mmqUtils.remove([11,2,4,433], 2)).toEqual([11,4,433])
    expect(mmqUtils.remove([11,2,4,433], [])).toEqual([11,2,4,433])
    const test = (item: any) => item === 22
    expect(mmqUtils.remove([11,2,4,433], test)).toEqual([])
    const test1 = (item: any) => item !== 2
    expect(mmqUtils.remove([11,2,4,433], test1)).toEqual([11,4,433])
  })
  test('shuffle()', () => {
    expect(
      mmqUtils.shuffle(null)
    ).toEqual([])
    expect(
      mmqUtils.shuffle(undefined)
    ).toEqual([])
    expect(
      mmqUtils.shuffle('')
    ).toEqual([])
    expect(
      mmqUtils.shuffle(/\d/)
    ).toEqual([])
    expect(
      mmqUtils.shuffle(0)
    ).toEqual([])
    expect(
      mmqUtils.shuffle(-1)
    ).toEqual([])
    expect(
      mmqUtils.shuffle(333)
    ).toEqual([])
    expect(
      mmqUtils.shuffle([])
    ).toEqual([])
    expect(
      mmqUtils.shuffle('abc').length
    ).toEqual(3)
    expect(
      mmqUtils.shuffle([11, '22', 33, '44']).length
    ).toEqual(4)
    expect(
      mmqUtils.shuffle([11, 22, 33, 44, 55]).length
    ).toEqual(5)
    expect(
      mmqUtils.shuffle([{ a: 11 }, { b: 22 }, { c: 33 }]).length
    ).toEqual(3)
  })
  test('sample()', () => {
    expect(
      mmqUtils.sample(null)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample(undefined)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample({})
    ).toEqual(undefined)
    expect(
      mmqUtils.sample(-1)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample(0)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample(456)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample([])
    ).toEqual(undefined)
    expect(
      mmqUtils.sample(0)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample(null, 4)
    ).toEqual([])
    expect(
      mmqUtils.sample(undefined, 2)
    ).toEqual([])
    expect(
      mmqUtils.sample([], undefined)
    ).toEqual(undefined)
    expect(
      mmqUtils.sample({}, 2)
    ).toEqual([])
    expect(
      mmqUtils.sample(-1, 3)
    ).toEqual([])
    expect(
      mmqUtils.sample([], 2)
    ).toEqual([])
    expect(
      ['a', 'b', 'c'].includes(mmqUtils.sample('abc'))
    ).toEqual(true)
    expect(
      mmqUtils.sample('abc', 2).length
    ).toEqual(2)
    expect(
      [11, 22, 33, 44, 55].includes(mmqUtils.sample([11, 22, 33, 44, 55]))
    ).toEqual(true)
    expect(
      mmqUtils.sample([11, 22, 33, 44, 55], 2).length
    ).toEqual(2)
    expect(
      mmqUtils.sample([11, 22, 33, 44, 55], 3).length
    ).toEqual(3)
  })
})
