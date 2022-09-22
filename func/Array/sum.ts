import isArray from '../Base/isArray';
import isRealObject from '../Base/isRealObject';
import isNumber from '../Base/isNumber';

function sum (val: any, target?: string): number {
  if (isArray(val)) {
    if (target) {
      return val.map((item: any) => {
        return isRealObject(item) ? item[target] : 0
      }).reduce((prev:number, cur: number) => prev + cur)
    } else {
      return val.length === 0 ? 0 : val.reduce((prev: number, cur: number) => prev + cur)
    }
  } else if (isRealObject(val)) {
    let res = 0
    for (const key in val) {
      if (isNumber(val[key])) {
        res += val[key]
      }
    }
    return res
  } else {
    return 0
  }
}

export default sum
