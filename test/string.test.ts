import mmqUtils from '../func';

describe('string function', () => {
  test('toValueString()', () => {
    expect(
      mmqUtils.toValueString(null)
    ).toEqual('');
    expect(
      mmqUtils.toValueString(undefined)
    ).toEqual('');
    expect(
      mmqUtils.toValueString('')
    ).toEqual('');
    expect(
      mmqUtils.toValueString(0)
    ).toEqual('0');
    expect(
      mmqUtils.toValueString(-1)
    ).toEqual('-1');
    expect(
      mmqUtils.toValueString(123)
    ).toEqual('123');
    expect(
      mmqUtils.toValueString([])
    ).toEqual('');
    expect(
      mmqUtils.toValueString(/\w/)
    ).toEqual('/\\w/');
    expect(
      mmqUtils.toValueString({})
    ).toEqual('[object Object]');
    expect(
      mmqUtils.toValueString(['3e-9'])
    ).toEqual('3e-9');
    expect(
      mmqUtils.toValueString(1e-8)
    ).toEqual('0.00000001');
    expect(
      mmqUtils.toValueString(-11e-10)
    ).toEqual('-0.0000000011');
    expect(
      mmqUtils.toValueString(-11e+10)
    ).toEqual('-110000000000');
    expect(
      mmqUtils.toValueString(-11e+20)
    ).toEqual('-1100000000000000000000');
    expect(
      Number(mmqUtils.toValueString(-11e+20))
    ).toEqual(-11e+20);
    expect(
      mmqUtils.toValueString(+11e-10)
    ).toEqual('0.0000000011');
    expect(
      mmqUtils.toValueString(+11e+10)
    ).toEqual('110000000000');
    expect(
      Number(mmqUtils.toValueString(+11e+10))
    ).toEqual(+11e+10);
    expect(
      mmqUtils.toValueString(+11e+20)
    ).toEqual('1100000000000000000000');
    expect(
      mmqUtils.toValueString(123456e-3)
    ).toEqual('123.456');
    expect(
      mmqUtils.toValueString(123456e+3)
    ).toEqual('123456000');
    expect(
      mmqUtils.toValueString(4567.890e-4)
    ).toEqual('0.456789');
    expect(
      Number(mmqUtils.toValueString(4567.890e-4))
    ).toEqual(4567.890e-4);
    expect(
      mmqUtils.toValueString(4567.890e+4)
    ).toEqual('45678900');
    expect(
      Number(mmqUtils.toValueString(4567.890e+4))
    ).toEqual(4567.890e+4);
    expect(
      mmqUtils.toValueString(-4567.890e-14)
    ).toEqual('-0.0000000000456789');
    expect(
      mmqUtils.toValueString(+4567.890e+14)
    ).toEqual('456789000000000000');
    expect(
      mmqUtils.toValueString(+4567.890e+18)
    ).toEqual('4567890000000000000000');
    expect(
      mmqUtils.toValueString(3e-9)
    ).toEqual('0.000000003');
    expect(
      Number(mmqUtils.toValueString(3e-9))
    ).toEqual(3e-9);
    expect(
      mmqUtils.toValueString(3e+9)
    ).toEqual('3000000000');
    expect(
      mmqUtils.toValueString(3e+22)
    ).toEqual('30000000000000000000000');
    expect(
      Number(mmqUtils.toValueString(3e+22))
    ).toEqual(3e+22);
    expect(
      mmqUtils.toValueString(123e-25)
    ).toEqual('0.0000000000000000000000123');
    expect(
      mmqUtils.toValueString(123e+25)
    ).toEqual('1230000000000000000000000000');
    expect(
      mmqUtils.toValueString(0.000003)
    ).toEqual('0.000003');
    expect(
      mmqUtils.toValueString([123])
    ).toEqual('123');
    expect(
      mmqUtils.toValueString([123.0000006])
    ).toEqual('123.0000006');
  });
  test('trim()', () => {
    expect(
      mmqUtils.trim()
    ).toEqual('')
    expect(
      mmqUtils.trim(null)
    ).toEqual('')
    expect(
      mmqUtils.trim(undefined)
    ).toEqual('')
    expect(
      mmqUtils.trim('')
    ).toEqual('')
    expect(
      mmqUtils.trim('  ')
    ).toEqual('')
    expect(
      mmqUtils.trim(0)
    ).toEqual('0')
    expect(
      mmqUtils.trim(123456)
    ).toEqual('123456')
    expect(
      mmqUtils.trim(-1)
    ).toEqual('-1')
    expect(
      mmqUtils.trim([])
    ).toEqual('')
    expect(
      mmqUtils.trim('0')
    ).toEqual('0')
    expect(
      mmqUtils.trim(' abc ')
    ).toEqual('abc')
  })
  test('trimLeft()', () => {
    expect(
      mmqUtils.trimLeft()
    ).toEqual('')
    expect(
      mmqUtils.trimLeft(null)
    ).toEqual('')
    expect(
      mmqUtils.trimLeft(undefined)
    ).toEqual('')
    expect(
      mmqUtils.trimLeft('')
    ).toEqual('')
    expect(
      mmqUtils.trimLeft('   ')
    ).toEqual('')
    expect(
      mmqUtils.trimLeft(0)
    ).toEqual('0')
    expect(
      mmqUtils.trimLeft(123456)
    ).toEqual('123456')
    expect(
      mmqUtils.trimLeft(-1)
    ).toEqual('-1')
    expect(
      mmqUtils.trimLeft([])
    ).toEqual('')
    expect(
      mmqUtils.trimLeft('0')
    ).toEqual('0')
    expect(
      mmqUtils.trimLeft(' abc ')
    ).toEqual('abc ')
  })
  test('trimRight()', () => {
    expect(
      mmqUtils.trimRight()
    ).toEqual('')
    expect(
      mmqUtils.trimRight(null)
    ).toEqual('')
    expect(
      mmqUtils.trimRight(undefined)
    ).toEqual('')
    expect(
      mmqUtils.trimRight('')
    ).toEqual('')
    expect(
      mmqUtils.trimRight('   ')
    ).toEqual('')
    expect(
      mmqUtils.trimRight(0)
    ).toEqual('0')
    expect(
      mmqUtils.trimRight(123456)
    ).toEqual('123456')
    expect(
      mmqUtils.trimRight(-1)
    ).toEqual('-1')
    expect(
      mmqUtils.trimRight([])
    ).toEqual('')
    expect(
      mmqUtils.trimRight('0')
    ).toEqual('0')
    expect(
      mmqUtils.trimRight(' abc ')
    ).toEqual(' abc')
  })
  test('repeat()', () => {
    expect(
      mmqUtils.repeat('aaaaa')
    ).toEqual('')
    expect(
      mmqUtils.repeat('aaaaa', 0)
    ).toEqual('')
    expect(
      mmqUtils.repeat('aaaaa', null)
    ).toEqual('')
    expect(
      mmqUtils.repeat('aaaaa', undefined)
    ).toEqual('')
    expect(
      mmqUtils.repeat('a', 5)
    ).toEqual('aaaaa')
    expect(
      mmqUtils.repeat('ab', 3)
    ).toEqual('ababab')
  })
  test('padStart()', () => {
    expect(
      mmqUtils.padStart(0, 2)
    ).toEqual(' 0')
    expect(
      mmqUtils.padStart('', 2)
    ).toEqual('  ')
    expect(
      mmqUtils.padStart('a', 4)
    ).toEqual('   a')
    expect(
      mmqUtils.padStart('a', 6, undefined)
    ).toEqual('     a')
    expect(
      mmqUtils.padStart('a', 6, null)
    ).toEqual('     a')
    expect(
      mmqUtils.padStart('a', 6, false)
    ).toEqual('falsea')
    expect(
      mmqUtils.padStart('a', 5, 'b')
    ).toEqual('bbbba')
    expect(
      mmqUtils.padStart('2', 5, 0)
    ).toEqual('00002')
    expect(
      mmqUtils.padStart('2', 5, '0')
    ).toEqual('00002')
  })
  test('padEnd()', () => {
    expect(
      mmqUtils.padEnd(0, 2)
    ).toEqual('0 ')
    expect(
      mmqUtils.padEnd('', 2)
    ).toEqual('  ')
    expect(
      mmqUtils.padEnd('a', 4)
    ).toEqual('a   ')
    expect(
      mmqUtils.padEnd('a', 6, undefined)
    ).toEqual('a     ')
    expect(
      mmqUtils.padEnd('a', 6, null)
    ).toEqual('a     ')
    expect(
      mmqUtils.padEnd('a', 6, false)
    ).toEqual('afalse')
    expect(
      mmqUtils.padEnd('a', 5, 'b')
    ).toEqual('abbbb')
    expect(
      mmqUtils.padEnd('2', 5, 0)
    ).toEqual('20000')
    expect(
      mmqUtils.padEnd('2', 5, '0')
    ).toEqual('20000')
  })
});
