import mmqUtils from '../func';

describe('date function', () => {
  const date = new Date(2017, 0, 1, 14, 5, 30, 99)
  const time = date.getTime()
  test('now()', () => {
    expect(mmqUtils.now() >= time).toEqual(true)
  })
  test('mmqUtils.toStringDate()', () => {
    expect(mmqUtils.toStringDate() instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate(undefined) instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate('') instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate(0) instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate('2') instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate('20') instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate('Year:2018 Month:01 Day:26') instanceof Date).toEqual(true)
    expect(mmqUtils.toStringDate().toString()).toEqual('Invalid Date')
    expect(mmqUtils.toStringDate(undefined).toString()).toEqual('Invalid Date')
    expect(mmqUtils.toStringDate('').toString()).toEqual('Invalid Date')
    expect(mmqUtils.toStringDate(0).toString()).toEqual('Invalid Date')
    expect(mmqUtils.toStringDate('2').toString()).toEqual('Invalid Date')
    expect(mmqUtils.toStringDate('Year:2018 Month:01 Day:26').toString()).toEqual('Invalid Date')
    expect(mmqUtils.toStringDate('201')).toEqual(new Date(201, 0, 1))
    expect(mmqUtils.toStringDate('Year:2018 Month:01 Day:26', 'Year:yyyy [M]onth:MM Day:dd')).toEqual(new Date(2018, 0, 26))
    expect(
      mmqUtils.toStringDate('2020')
    ).toEqual(new Date(2020, 0, 1))
    expect(
      mmqUtils.toStringDate('2020-02')
    ).toEqual(new Date(2020, 1, 1))
    expect(
      mmqUtils.toStringDate('2020-3')
    ).toEqual(new Date(2020, 2, 1))
    expect(
      mmqUtils.toStringDate('2020-02-02')
    ).toEqual(new Date(2020, 1, 2))
    expect(
      mmqUtils.toStringDate('2017-12-20')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      mmqUtils.toStringDate('2017-5-2')
    ).toEqual(new Date(2017, 4, 2))
    expect(
      mmqUtils.toStringDate('20|2018/12', 'dd|yyyy/MM')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      mmqUtils.toStringDate('20|2018/12', 'd|yyyy/M')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      mmqUtils.toStringDate('2018/12', 'yyyy/MM')
    ).toEqual(new Date(2018, 11))
    expect(
      mmqUtils.toStringDate('2017-12-20 10:10:30')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      mmqUtils.toStringDate('2017-8-2 9:1:3')
    ).toEqual(new Date(2017, 7, 2, 9, 1, 3))
    expect(
      mmqUtils.toStringDate('2017-12-20 10:10:30.9')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 900))
    expect(
      mmqUtils.toStringDate('2017-12-20 10:10:30.99')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 990))
    expect(
      mmqUtils.toStringDate('2017-12-20 10:10:30.999')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 999))
    expect(
      mmqUtils.toStringDate('2017-12-20 10:10:30.2880929')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 288))
    expect(
      mmqUtils.toStringDate('2017-12-20 10:10:30.9999999')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 999))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.4+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.400+08:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.42+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.420+08:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.423+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.423+08:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.423+00:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+00:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.423+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+10:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.42+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.420+10:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.42+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.420+10:00'))
    expect(
      mmqUtils.toStringDate('2017-12-2T10:2:30.42+10:00')
    ).toEqual(new Date('2017-12-02T10:02:30.420+10:00'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.4Z')
    ).toEqual(new Date('2017-12-20T10:10:30.4Z'))
    expect(
      mmqUtils.toStringDate('2017/12/20 10:10:30.4Z')
    ).toEqual(new Date('2017-12-20T10:10:30.400Z'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.43Z')
    ).toEqual(new Date('2017-12-20T10:10:30.43Z'))
    expect(
      mmqUtils.toStringDate('2017-12-20T10:10:30.43Z')
    ).toEqual(new Date('2017-12-20T10:10:30.430Z'))
    expect(
      mmqUtils.toStringDate('2017/12/20T10:10:30.423Z')
    ).toEqual(new Date('2017-12-20T10:10:30.423Z'))
    expect(
      mmqUtils.toStringDate('2017/1/3T10:10:30.423Z')
    ).toEqual(new Date('2017-01-03T10:10:30.423Z'))
    expect(
      mmqUtils.toStringDate('2018/1/2T2:9:8.423Z')
    ).toEqual(new Date('2018-01-02T02:09:08.423Z'))
    expect(
      mmqUtils.toStringDate('2018/1/2T2:9:8.4Z')
    ).toEqual(new Date('2018-01-02T02:09:08.400Z'))
    expect(
      mmqUtils.toStringDate(1513735830000)
    ).toEqual(new Date(1513735830000))
    expect(
      mmqUtils.toStringDate(20171220101030)
    ).toEqual(new Date(20171220101030))
    expect(
      mmqUtils.toStringDate('1513735830000')
    ).toEqual(new Date(1513735830000))
    expect(
      mmqUtils.toStringDate('20171220101030')
    ).toEqual(new Date(20171220101030))
    expect(
      mmqUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      mmqUtils.toStringDate('12/20/2017', 'M/d/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      mmqUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      mmqUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      mmqUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/M/d H:m:s')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      mmqUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      mmqUtils.toStringDate('12/20/2017 10:10:30.1', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      mmqUtils.toStringDate('12/20/2017 10:10:30.10', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      mmqUtils.toStringDate('12/20/2017 10:10:30.100', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      mmqUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:MM [dd]:dd')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      mmqUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:M [dd]:d')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      mmqUtils.toStringDate('oo MM:01 dd:20 yyyy:2017 oo', 'oo [MM]:M [dd]:d [yyyy]:yyyy oo')
    ).toEqual(new Date(2017, 0, 20))
  })
  test('mmqUtils.timestamp()', () => {
    expect(
      mmqUtils.timestamp(-1).toString()
    ).toEqual('-1')
    expect(
      mmqUtils.timestamp(123456).toString()
    ).toEqual('123456')
    expect(
      mmqUtils.timestamp('abc').toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.timestamp() >= time
    ).toEqual(true)
    expect(
      mmqUtils.timestamp(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99).getTime())
    expect(
      mmqUtils.timestamp(date)
    ).toEqual(time)
    expect(
      mmqUtils.timestamp('2018-12-01')
    ).toEqual(new Date(2018, 11, 1).getTime())
    expect(
      mmqUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 459).getTime())
  })
})