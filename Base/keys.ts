import isRealObject from './isRealObject';
import isArray from './isArray';
import isString from './isString';

function keys (val?: any) {
  if (isRealObject(val)) {
    return Object.keys(val)
  } else if (isArray(val) || isString(val)) {
    const arr = []
    for (const key in val) {
      arr.push(key)
    }
    return arr
  } else {
    return []
  }
}

export default keys
