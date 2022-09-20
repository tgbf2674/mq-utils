import mmqUtils from '../func';

describe('Number functions', () => {
  test('random()', () => {
    let rest
    rest = mmqUtils.random(3, 6)
    expect(
      rest >= 3 && rest <= 6
    ).toEqual(true)
    rest = mmqUtils.random(0, 5)
    expect(
      rest >= 0 && rest <= 5
    ).toEqual(true)
    rest = mmqUtils.random(10, 100)
    expect(
      rest >= 10 && rest <= 100
    ).toEqual(true)
    rest = mmqUtils.random(500, 50000)
    expect(
      rest >= 500 && rest <= 50000
    ).toEqual(true)
    rest = mmqUtils.random(-5, 5)
    expect(
      rest >= -5 && rest <= 5
    ).toEqual(true)
  })
  test('min()', () => {
    expect(mmqUtils.min([11,33,22,2,44])).toEqual(2)
    expect(
      mmqUtils.min([22, null, 77, 11])
    ).toEqual(11)
    expect(
      mmqUtils.min([0, 1, null, -1, undefined])
    ).toEqual(-1)
  })
  test('max()', () => {
    expect(mmqUtils.max([11,33,22,2,44])).toEqual(44)
    expect(
      mmqUtils.max([22, null, 77, 11])
    ).toEqual(77)
    expect(
      mmqUtils.max([0, 1, null, -1, undefined])
    ).toEqual(1)
    expect(
      mmqUtils.max([null, 'a', null, 'b', undefined])
    ).toEqual(NaN)
  })
  test('round()', () => {
    expect(
      mmqUtils.round(123)
    ).toEqual(123)
    expect(
      mmqUtils.round(-123)
    ).toEqual(-123)
    expect(
      mmqUtils.round('1.00', 0)
    ).toEqual(1)
    expect(
      mmqUtils.round('0', 2)
    ).toEqual(0)
    expect(
      mmqUtils.round('4.555', 2)
    ).toEqual(4.56)
    expect(
      mmqUtils.round('8.3339', 3)
    ).toEqual(8.334)
    expect(
      mmqUtils.round(0.999, 4)
    ).toEqual(0.999)
    expect(
      mmqUtils.round(-0.999, 4)
    ).toEqual(-0.999)
    expect(
      mmqUtils.round(1.33, 3)
    ).toEqual(1.33)
    expect(
      mmqUtils.round(33, 2)
    ).toEqual(33)
    expect(
      mmqUtils.round(33.3, 2)
    ).toEqual(33.3)
    expect(
      mmqUtils.round(52.636, 2)
    ).toEqual(52.64)
    expect(
      mmqUtils.round(52.635, 2)
    ).toEqual(52.64)
    expect(
      mmqUtils.round(52.634, 2)
    ).toEqual(52.63)
    expect(
      mmqUtils.round(-52.636, 2)
    ).toEqual(-52.64)
    expect(
      mmqUtils.round(-52.635, 2)
    ).toEqual(-52.63)
    expect(
      mmqUtils.round(-52.634, 2)
    ).toEqual(-52.63)
    expect(
      mmqUtils.round(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      mmqUtils.round(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      mmqUtils.round(-3333.99, 2)
    ).toEqual(-3333.99)
    expect(
      mmqUtils.round(3.00099, 2)
    ).toEqual(3)
    expect(
      mmqUtils.round(-3.00099, 2)
    ).toEqual(-3)
    expect(
      mmqUtils.round(12.3999, 2)
    ).toEqual(12.4)
    expect(
      mmqUtils.round(158335.645, 2)
    ).toEqual(158335.65)
    expect(
      mmqUtils.round('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      mmqUtils.round('1452349847.3979', 2)
    ).toEqual(1452349847.4)
    expect(
      mmqUtils.round('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      mmqUtils.round('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      mmqUtils.round(1e-8)
    ).toEqual(0)
    expect(
      mmqUtils.round(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      mmqUtils.round(-9e-12)
    ).toEqual(-0)
    expect(
      mmqUtils.round(-923e-8, 4)
    ).toEqual(-0)
  })
  test('toNumberString()', () => {
    expect(
      mmqUtils.toNumberString('')
    ).toEqual('')
    expect(
      mmqUtils.toNumberString(0)
    ).toEqual('0')
    expect(
      mmqUtils.toNumberString('0')
    ).toEqual('0')
    expect(
      mmqUtils.toNumberString(-0)
    ).toEqual('0')
    expect(
      mmqUtils.toNumberString('-0')
    ).toEqual('-0')
    expect(
      mmqUtils.toNumberString('abc')
    ).toEqual('abc')
    expect(
      mmqUtils.toNumberString(-0.001)
    ).toEqual('-0.001')
    expect(
      mmqUtils.toNumberString('-0.001')
    ).toEqual('-0.001')
    expect(
      mmqUtils.toNumberString('123')
    ).toEqual('123')
    expect(
      mmqUtils.toNumberString(123)
    ).toEqual('123')
    expect(
      mmqUtils.toNumberString(123.33)
    ).toEqual('123.33')
    expect(
      mmqUtils.toNumberString('123.33')
    ).toEqual('123.33')
    expect(
      mmqUtils.toNumberString(1e-9)
    ).toEqual('0.000000001')
    expect(
      mmqUtils.toNumberString('1e-9')
    ).toEqual('0.000000001')
    expect(
      Number(mmqUtils.toNumberString('1e-9'))
    ).toEqual(1e-9)
    expect(
      mmqUtils.toNumberString(1e+22)
    ).toEqual('10000000000000000000000')
    expect(
      mmqUtils.toNumberString('1e+22')
    ).toEqual('10000000000000000000000')
    expect(
      mmqUtils.toNumberString(-1e+24)
    ).toEqual('-1000000000000000000000000')
    expect(
      Number(mmqUtils.toNumberString(-1e+24))
    ).toEqual(-1e+24)
    expect(
      mmqUtils.toNumberString(+1e+24)
    ).toEqual('1000000000000000000000000')
    expect(
      Number(mmqUtils.toNumberString(+1e+24))
    ).toEqual(+1e+24)
    expect(
      mmqUtils.toNumberString(1234e+22)
    ).toEqual('12340000000000000000000000')
    expect(
      mmqUtils.toNumberString(123.4e+22)
    ).toEqual('1234000000000000000000000')
    expect(
      Number(mmqUtils.toNumberString(123.4e+22))
    ).toEqual(123.4e+22)
    expect(
      mmqUtils.toNumberString(2536e-16)
    ).toEqual('0.0000000000002536')
    expect(
      Number(mmqUtils.toNumberString(2536e-16))
    ).toEqual(2536e-16)
    expect(
      mmqUtils.toNumberString(25.36e-16)
    ).toEqual('0.000000000000002536')
    expect(
      Number(mmqUtils.toNumberString(25.36e-16))
    ).toEqual(25.36e-16)
  })
  test('toNumber()', () => {
    expect(
      mmqUtils.toNumber([])
    ).toEqual(0)
    expect(
      mmqUtils.toNumber({})
    ).toEqual(0)
    expect(
      mmqUtils.toNumber(true)
    ).toEqual(0)
    expect(
      mmqUtils.toNumber('abc')
    ).toEqual(0)
    expect(
      mmqUtils.toNumber('$123')
    ).toEqual(0)
    expect(
      mmqUtils.toNumber('123元')
    ).toEqual(123)
    expect(
      mmqUtils.toNumber(123)
    ).toEqual(123)
    expect(
      mmqUtils.toNumber('12.3')
    ).toEqual(12.3)
    expect(
      mmqUtils.toNumber('12456456.66663')
    ).toEqual(12456456.66663)
  })
  test('toInteger()', () => {
    expect(
      mmqUtils.toInteger(0)
    ).toEqual(0)
    expect(
      mmqUtils.toInteger(-1)
    ).toEqual(-1)
    expect(
      mmqUtils.toInteger([])
    ).toEqual(0)
    expect(
      mmqUtils.toInteger({})
    ).toEqual(0)
    expect(
      mmqUtils.toInteger(/\d/)
    ).toEqual(0)
    expect(
      mmqUtils.toInteger(true)
    ).toEqual(0)
    expect(
      mmqUtils.toInteger('abc')
    ).toEqual(NaN)
    expect(
      mmqUtils.toInteger(123)
    ).toEqual(123)
    expect(
      mmqUtils.toInteger(5675.9004)
    ).toEqual(5675)
    expect(
      mmqUtils.toInteger('12.3')
    ).toEqual(12)
    expect(
      mmqUtils.toInteger('16572.3657567')
    ).toEqual(16572)
  })
})
