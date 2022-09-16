import now from '../func/Date/Date';
import {toStringDate} from '../func';
describe('date function', () => {
  const date = new Date()
  const time = date.getTime()
  test('now()', () => {
    expect(now() >= date).toEqual(true)
  })
  test('toStringDate()', () => {
    expect(toStringDate() instanceof Date).toEqual(true)
    expect(toStringDate('201')).toEqual(new Date(201, 0, 1))
  })
})
