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
    expect(mmqUtils.toStringDate(0).toString()).toEqual('Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)')
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
  test('toDateString()', () => {
    expect(
      mmqUtils.toDateString(undefined)
    ).toEqual('')
    expect(
      mmqUtils.toDateString(null)
    ).toEqual('')
    expect(
      mmqUtils.toDateString('')
    ).toEqual('')
    expect(
      mmqUtils.toDateString(0)
    ).toEqual('')
    expect(
      mmqUtils.toDateString(123)
    ).toEqual('1970-01-01 08:00:00')
    expect(
      mmqUtils.toDateString(-1)
    ).toEqual('1970-01-01 07:59:59')
    expect(
      mmqUtils.toDateString(/\d/)
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString({})
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString([])
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString('null')
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString(new Date(''))
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString(new Date('abc'))
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString('Year:2018 Month:01 Day:26')
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.toDateString('2017')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      mmqUtils.toDateString('2017-01')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      mmqUtils.toDateString('2017-02')
    ).toEqual('2017-02-01 00:00:00')
    expect(
      mmqUtils.toDateString('2017-02-03')
    ).toEqual('2017-02-03 00:00:00')
    expect(
      mmqUtils.toDateString(time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      mmqUtils.toDateString('' + time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      mmqUtils.toDateString(date)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      mmqUtils.toDateString(time, 'MM/dd/yyyy')
    ).toEqual('01/01/2017')
    expect(
      mmqUtils.toDateString('2017-01-01 10:05:30', 'M/d/yyyy')
    ).toEqual('1/1/2017')
    expect(
      mmqUtils.toDateString(date, 'yyyyMMddHHmmssSSS')
    ).toEqual('20170101140530099')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd')
    ).toEqual('2017-01-01')
    expect(
      mmqUtils.toDateString(date, 'yy-M-d')
    ).toEqual('17-1-1')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd 00:00:00')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd 00:00:00.000')
    ).toEqual('2017-01-01 00:00:00.000')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd 23:59:59.999')
    ).toEqual('2017-01-01 23:59:59.999')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-01-01 14:05:30.099')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      mmqUtils.toDateString('2017-01-07 14:05:30', 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-7 2:5:30.0 6 6')
    expect(
      mmqUtils.toDateString(date, 'yyyy-M-d H:m:s.S')
    ).toEqual('2017-1-1 14:5:30.99')
    expect(
      mmqUtils.toDateString(time + 86400000, 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-2 2:5:30.99 1 1')
    expect(
      mmqUtils.toDateString(time, 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
    ).toEqual('2017年01月01日 14时05分30秒99毫秒,星期0 第1季度')
    expect(
      mmqUtils.toDateString(time, 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度')
    ).toEqual('17年1月1日 14时5分30秒99毫秒,星期0 第1季度')
    expect(
      mmqUtils.toDateString(time, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 星期E e 第q季 a A')
    ).toEqual('2017年01月01日 02时05分30秒099毫秒 星期0 0 第1季 pm PM')
    expect(
      mmqUtils.toDateString(date, 'yyyy-MM-dd [yyyy-MM-dd] [yyyy]] [[MM]')
    ).toEqual('2017-01-01 yyyy-MM-dd yyyy] [MM')
    expect(
      mmqUtils.toDateString(date, '[Week] yyyy-MM-dd [[yyyy-MM-dd]]')
    ).toEqual('Week 2017-01-01 [yyyy-MM-dd]')
  })
  test('getWhatMonth()', () => {
    expect(
      mmqUtils.getWhatMonth(0).toString()
    ).toEqual('Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatMonth(-1).toString()
    ).toEqual('Thu Jan 01 1970 07:59:59 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatMonth({}).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth([]).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth(null).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth('null').toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatMonth(date, -1)
    ).toEqual(new Date(2016, 11, 1, 14, 5, 30, 99))
    expect(
      mmqUtils.getWhatMonth(time, 1)
    ).toEqual(new Date(2017, 1, 1, 14, 5, 30, 99))
    expect(
      mmqUtils.getWhatMonth('2017-12-20', -1)
    ).toEqual(new Date(2017, 10, 20))
    expect(
      mmqUtils.getWhatMonth('2017-12-20', 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      mmqUtils.getWhatMonth(new Date(2017, 11, 20), 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      mmqUtils.getWhatMonth('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 10, 1, 0, 0, 0, 0))
    expect(
      mmqUtils.getWhatMonth('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
    expect(
      mmqUtils.getWhatMonth('2021-01-31', -1)
    ).toEqual(new Date(2020, 11, 31))
    expect(
      mmqUtils.getWhatMonth('2021-01-31', -2)
    ).toEqual(new Date(2020, 10, 30))
    expect(
      mmqUtils.getWhatMonth('2021-01-31', 1)
    ).toEqual(new Date(2021, 1, 28))
    expect(
      mmqUtils.getWhatMonth('2021-01-31', 1, 'last')
    ).toEqual(new Date(2021, 1, 28, 23, 59, 59, 999))
    expect(
      mmqUtils.getWhatMonth('2021-01-31', 2)
    ).toEqual(new Date(2021, 2, 31))
    expect(
      mmqUtils.getWhatMonth('2021-01-31', 12)
    ).toEqual(new Date(2022, 0, 31))
  })
  test('getWhatDay()', () => {
    expect(
      mmqUtils.getWhatDay(0).toString()
    ).toEqual('Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatDay(-1).toString()
    ).toEqual('Thu Jan 01 1970 07:59:59 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatDay(123).toString()
    ).toEqual('Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatDay(null).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay({}).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay([]).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay('null').toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatDay(date, -1)
    ).toEqual(new Date(2016, 11, 31, 14, 5, 30, 99))
    expect(
      mmqUtils.getWhatDay(time, 1)
    ).toEqual(new Date(2017, 0, 2, 14, 5, 30, 99))
    expect(
      mmqUtils.getWhatDay('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      mmqUtils.getWhatDay(new Date(2017, 11, 10), -1)
    ).toEqual(new Date(2017, 11, 9))
    expect(
      mmqUtils.getWhatDay('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      mmqUtils.getWhatDay('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 0, 0, 0, 0))
    expect(
      mmqUtils.getWhatDay('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 23, 59, 59, 999))
  })

  test('getWhatYear()', () => {
    expect(
      mmqUtils.getWhatYear(0) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear(-1) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear([]) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear({}) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear(null) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear(undefined) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear([2018, 1, 1]) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear({ time: 2018 }) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear('null') instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear(new Date('')) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear(new Date('abc')) instanceof Date
    ).toEqual(true)
    expect(
      mmqUtils.getWhatYear(0).toString()
    ).toEqual('Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatYear(-1).toString()
    ).toEqual('Thu Jan 01 1970 07:59:59 GMT+0800 (中国标准时间)')
    expect(
      mmqUtils.getWhatYear([]).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear({}).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear(null).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear('null').toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      mmqUtils.getWhatYear(date, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      mmqUtils.getWhatYear(time, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      mmqUtils.getWhatYear('2017-12-20', -1)
    ).toEqual(new Date(2016, 11, 20))
    expect(
      mmqUtils.getWhatYear('2017-12-20', 1)
    ).toEqual(new Date(2018, 11, 20))
    expect(
      mmqUtils.getWhatYear(new Date(2017, 11, 10), 1)
    ).toEqual(new Date(2018, 11, 10))
    expect(
      mmqUtils.getWhatYear('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 0, 1, 0, 0, 0, 0))
    expect(
      mmqUtils.getWhatYear('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 31, 23, 59, 59, 999))
  })
  test('getDayOfYear()', () => {
    expect(
      mmqUtils.getDayOfYear(0).toString()
    ).toEqual('365')
    expect(
      mmqUtils.getDayOfYear(null).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear(undefined).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear({}).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear([]).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear('null').toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getDayOfYear(date)
    ).toEqual(365)
    expect(
      mmqUtils.getDayOfYear(time)
    ).toEqual(365)
    expect(
      mmqUtils.getDayOfYear('2017-12-20')
    ).toEqual(365)
    expect(
      mmqUtils.getDayOfYear(new Date(2017, 11, 20))
    ).toEqual(365)
    expect(
      mmqUtils.getDayOfYear('2017-12-20') === mmqUtils.getDayOfYear(new Date(2017, 11, 20))
    ).toEqual(true)
    expect(
      mmqUtils.getDayOfYear('2019-12-10', 1)
    ).toEqual(366)
    expect(
      mmqUtils.getDayOfYear(new Date(2019, 11, 10), 1)
    ).toEqual(366)
    expect(
      mmqUtils.getDayOfYear('2019-12-10', 1) === mmqUtils.getDayOfYear(new Date(2019, 11, 10), 1)
    ).toEqual(true)
    expect(
      mmqUtils.getDayOfYear('2020-12-10')
    ).toEqual(366)
  })
  test('getYearDay()', () => {
    expect(
      mmqUtils.getYearDay(0).toString()
    ).toEqual('1')
    expect(
      mmqUtils.getYearDay(-1).toString()
    ).toEqual('1')
    expect(
      mmqUtils.getYearDay(null).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay(undefined).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay({}).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay([]).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay('null').toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      mmqUtils.getYearDay(date)
    ).toEqual(1)
    expect(
      mmqUtils.getYearDay('2017-01-20')
    ).toEqual(20)
    expect(
      mmqUtils.getYearDay('2018-05-20')
    ).toEqual(140)
  })
})
