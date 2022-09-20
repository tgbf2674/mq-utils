import mmqUtils from '../func';

describe('other function', () => {
  test('unserialize()', () => {
    expect(
      mmqUtils.unserialize('id=123&name=test1')
    ).toEqual({id: '123', name: 'test1'});
    expect(
      mmqUtils.unserialize('id=123&name=false')
    ).toEqual({id: '123', name: 'false'});
    expect(
      mmqUtils.unserialize('id=123&name=0')
    ).toEqual({id: '123', name: '0'});
    expect(
      mmqUtils.unserialize('id=123&name=null')
    ).toEqual({id: '123', name: 'null'});
    expect(
      mmqUtils.unserialize('id=123&name=')
    ).toEqual({id: '123', name: ''});
  });
  test('serialize()', () => {
    expect(
      mmqUtils.serialize(null)
    ).toEqual('')
    expect(
      mmqUtils.serialize(undefined)
    ).toEqual('')
    expect(
      mmqUtils.serialize({})
    ).toEqual('')
    expect(
      mmqUtils.serialize([])
    ).toEqual('')
    expect(
      mmqUtils.serialize(-1)
    ).toEqual('')
    expect(
      mmqUtils.serialize({ id: 123, name: 'test1' })
    ).toEqual('id=123&name=test1')
    expect(
      mmqUtils.serialize({ id: 123, name: -1 })
    ).toEqual('id=123&name=-1')
    expect(
      mmqUtils.serialize({ id: 123, name: 0 })
    ).toEqual('id=123&name=0')
    expect(
      mmqUtils.serialize({ id: 123, name: false })
    ).toEqual('id=123&name=false')
    expect(
      mmqUtils.serialize({ id: 123, name: null })
    ).toEqual('id=123&name=')
    expect(
      mmqUtils.serialize({ id: 123, name: undefined })
    ).toEqual('id=123')
    expect(
      mmqUtils.serialize({ list: [11, 22] })
    ).toEqual('list%5B%5D=11&list%5B%5D=22')
    expect(
      mmqUtils.serialize({ list: [{ id: 11, name: 't1' }, { id: 44, name: 't2' }] })
    ).toEqual('list%5B0%5D%5Bid%5D=11&list%5B0%5D%5Bname%5D=t1&list%5B1%5D%5Bid%5D=44&list%5B1%5D%5Bname%5D=t2')
  })
});
