import {noop} from '../func';

describe('function function', () => {
  test('noop()', () => {
    expect([11,22,33].map(noop)).toEqual([undefined,undefined,undefined])
  })
})

