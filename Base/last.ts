import isArray from './isArray';
import isRealObject from './isRealObject';

function last(val?: any) {
  if (isArray(val)) {
    return val[val.length - 1]
  } else if (isRealObject(val)) {
    return Object.values(val)[Object.values(val).length - 1]
  } else return val
}

export default last
