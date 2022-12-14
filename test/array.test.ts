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
  test('toArray()', () => {
    expect(
      mmqUtils.toArray(null)
    ).toEqual([])
    expect(
      mmqUtils.toArray(undefined)
    ).toEqual([])
    expect(
      mmqUtils.toArray(0)
    ).toEqual([])
    expect(
      mmqUtils.toArray('')
    ).toEqual([])
    expect(
      mmqUtils.toArray(true)
    ).toEqual([])
    expect(
      mmqUtils.toArray(/1,2,3/)
    ).toEqual([])
    expect(
      mmqUtils.toArray([])
    ).toEqual([])
    expect(
      mmqUtils.toArray({})
    ).toEqual([])
    expect(
      mmqUtils.toArray(10)
    ).toEqual([])
    expect(
      mmqUtils.toArray({ name: 'test1', age: 25 })
    ).toEqual(['test1', 25])
  })
  test('sum()', () => {
    expect(
      mmqUtils.sum(undefined)
    ).toEqual(0)
    expect(
      mmqUtils.sum(0)
    ).toEqual(0)
    expect(
      mmqUtils.sum(-1)
    ).toEqual(0)
    expect(
      mmqUtils.sum(10)
    ).toEqual(0)
    expect(
      mmqUtils.sum(null)
    ).toEqual(0)
    expect(
      mmqUtils.sum('')
    ).toEqual(0)
    expect(
      mmqUtils.sum(/\w/)
    ).toEqual(0)
    expect(
      mmqUtils.sum({})
    ).toEqual(0)
    expect(
      mmqUtils.sum([])
    ).toEqual(0)
    expect(
      mmqUtils.sum([22, 66, 88])
    ).toEqual(176)
    expect(
      mmqUtils.sum([{ value: 11 }, { value: 22 }, { value: 66 }], 'value')
    ).toEqual(99)
    expect(
      mmqUtils.sum([{ value: 11 }, { value: 22 }, { value: 66 }, 44], 'value')
    ).toEqual(99)
    expect(
      mmqUtils.sum({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(102)
  })
  test('uniq()', () => {
    expect(
      mmqUtils.uniq()
    ).toEqual([])
    expect(
      mmqUtils.uniq(null)
    ).toEqual([])
    expect(
      mmqUtils.uniq(undefined)
    ).toEqual([])
    expect(
      mmqUtils.uniq(-1)
    ).toEqual([])
    expect(
      mmqUtils.uniq(123)
    ).toEqual([])
    expect(
      mmqUtils.uniq('')
    ).toEqual([])
    expect(
      mmqUtils.uniq(/\d/)
    ).toEqual([])
    expect(
      mmqUtils.uniq([])
    ).toEqual([])
    expect(
      mmqUtils.uniq({})
    ).toEqual([])
    expect(
      mmqUtils.uniq('abcb')
    ).toEqual(['a', 'b', 'c'])
    expect(
      mmqUtils.uniq([11, 22, 33, 33, 22, '22'])
    ).toEqual([11, 22, 33, '22'])
    expect(
      mmqUtils.uniq([11, 22, 33, 33, 22, 55])
    ).toEqual([11, 22, 33, 55])
    expect(
      mmqUtils.uniq([11, 33, 33, { a: 11 }, { a: 11 }])
    ).toEqual([11, 33, { a: 11 }, { a: 11 }])
    const a1 = { a: 11 }
    expect(
      mmqUtils.uniq([11, 33, 33, a1, a1])
    ).toEqual([11, 33, { a: 11 }])
  })
  test('flat()', () => {
    expect(
      mmqUtils.flat()
    ).toEqual([])
    expect(
      mmqUtils.flat(null)
    ).toEqual([])
    expect(
      mmqUtils.flat(undefined)
    ).toEqual([])
    expect(
      mmqUtils.flat(0)
    ).toEqual([])
    expect(
      mmqUtils.flat('')
    ).toEqual([])
    expect(
      mmqUtils.flat([])
    ).toEqual([])
    expect(
      mmqUtils.flat({})
    ).toEqual([])
    expect(
      mmqUtils.flat(/\d/)
    ).toEqual([])
    expect(
      mmqUtils.flat([[1, 2, 3], [4, 5, 6], [7, 8]])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(
      mmqUtils.flat([1, [2, [3, [4]], 5]])
    ).toEqual([1, 2, [3, [4]], 5])
    expect(
      mmqUtils.flat([1, [2, [3, [4]], 5]], true)
    ).toEqual([1, 2, 3, 4, 5])
    expect(
      mmqUtils.flat([1, [2, [3, [4]], [[[5], [6, [7]]]]]], true)
    ).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
  test('toArrayTree()', () => {
    expect(
      mmqUtils.toArrayTree()
    ).toEqual([])
    expect(
      mmqUtils.toArrayTree(null)
    ).toEqual([])
    expect(
      mmqUtils.toArrayTree(0)
    ).toEqual([])
    expect(
      mmqUtils.toArrayTree(-1)
    ).toEqual([])
    expect(
      mmqUtils.toArrayTree(123)
    ).toEqual([])
    expect(
      mmqUtils.toArrayTree([])
    ).toEqual([])
    expect(
      mmqUtils.toArrayTree({})
    ).toEqual([])
    const list1 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' }
    ]
    expect(
      mmqUtils.toArrayTree(list1)
    ).toEqual([
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ])
    const list4 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      mmqUtils.toArrayTree(list4, { strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      }
    ])
  })
  test('toTreeArray()', () => {
    expect(
      mmqUtils.toTreeArray()
    ).toEqual([])
    expect(
      mmqUtils.toTreeArray(null)
    ).toEqual([])
    expect(
      mmqUtils.toTreeArray(0)
    ).toEqual([])
    expect(
      mmqUtils.toTreeArray(-1)
    ).toEqual([])
    expect(
      mmqUtils.toTreeArray(123)
    ).toEqual([])
    expect(
      mmqUtils.toTreeArray([])
    ).toEqual([])
    expect(
      mmqUtils.toTreeArray({})
    ).toEqual([])
    const list1 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      mmqUtils.toTreeArray(list1)
    ).toEqual([
      list1[0],
      list1[0].children[0],
      list1[0].children[0].children[0],
      list1[1]
    ])
    const list2 = [
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ]
    expect(
      mmqUtils.toTreeArray(list2, { data: 'data' })
    ).toEqual([
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 4, parentId: 2, name: '444' },
      { id: 3, name: '333' },
      { id: 5, parentId: 22, name: '555' }
    ])
    const list3 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      mmqUtils.toTreeArray(list3, { clear: true })
    ).toEqual([
      {
        id: 1,
        name: '111'
      },
      {
        id: 2,
        parentId: 1,
        name: '222'
      },
      {
        id: 4,
        parentId: 2,
        name: '444'
      },
      {
        id: 3,
        name: '333'
      }
    ])
  })
  test('searchTree()', () => {
    expect(
      mmqUtils.searchTree(null, (item: any) => item.a === 33)
    ).toEqual([])
    expect(
      mmqUtils.searchTree([{ a: 11 }, { a: 22 }], (item: any) => item.a === 33)
    ).toEqual([])
    expect(
      mmqUtils.searchTree([{ a: 11 }, { a: 22 }], (item: any) => item.a === 11)
    ).toEqual([{ a: 11, children: [] }])
    expect(
      mmqUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], (item: any) => item.id > 1)
    ).toEqual([{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }])
    expect(
      mmqUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], (item: any) => item.id >= 2, { children: 'childs' })
    ).toEqual([{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }])
  })
  test('filterTree()', () => {
    expect(
      mmqUtils.filterTree(null, (item: any) => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return item.a === 11
      })
    ).toEqual([{ a: 11 }])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return item.a >= 22
      })
    ).toEqual([{ a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    expect(
      mmqUtils.filterTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return item.a >= 22
      }, { children: 'childs' })
    ).toEqual([{ a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })
  test('eachTree()', () => {
    let rest: any[] = []
    mmqUtils.eachTree(null, (item: any) => {
      rest.push(item)
    })
    expect(rest).toEqual([])
    rest = []
    mmqUtils.eachTree([{ a: 11 }, { a: 22 }], (item: any) => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22 }])
    rest = []
    mmqUtils.eachTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    rest = []
    mmqUtils.eachTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
      rest.push(item)
    }, { children: 'childs' })
    expect(rest).toEqual([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })
  test('mapTree()', () => {
    expect(
      mmqUtils.mapTree(null, (item: any) => {
        return item.a * 2
      })
    ).toEqual([])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return item.a * 2
      })
    ).toEqual([22, 44])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22 }], (item: any) => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44 }])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44, children: [{ a: 444 }, { a: 446 }] }])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return { a: item.a * 2 }
      }, { children: 'childs' })
    ).toEqual([{ a: 22 }, { a: 44, childs: [{ a: 444 }, { a: 446 }] }])
    expect(
      mmqUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) => {
        return { a: item.a * 2 }
      }, { children: 'childs', mapChildren: 'childs2' })
    ).toEqual([{ a: 22 }, { a: 44, childs2: [{ a: 444 }, { a: 446 }] }])
  })
})
