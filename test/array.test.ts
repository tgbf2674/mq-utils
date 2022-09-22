import mmqUtils from '../func';
import arrayIndexOf from '../func/Array/arrayIndexOf';

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
})
