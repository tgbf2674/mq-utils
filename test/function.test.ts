import mmqUtils from '../func';

describe('function function', () => {
  test('noop()', () => {
    expect([11,22,33].map(mmqUtils.noop)).toEqual([undefined,undefined,undefined])
  })
})

