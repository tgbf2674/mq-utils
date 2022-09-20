import isNumber from '../Base/isNumber';
import isString from '../Base/isString';

function toInteger (val: any): number {
  if (isNumber(val) || isString(val)) {
    return  parseInt(val)
  } else {
    return 0
  }
}

export default toInteger
