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
})
