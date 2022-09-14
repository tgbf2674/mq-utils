import isString from './isString';
import isArray from './isArray';

function getSize (val?: any): number {
  let res = 0
  if (isString(val) || isArray(val)) return val.length
  for (const key in val) {
    res++
  }
  return res
}

export default getSize
