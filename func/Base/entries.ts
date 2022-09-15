import isRealObject from './isRealObject';
import isArray from './isArray';

function entries(val?: any) {
  if (isRealObject(val)) {
    return Object.entries(val)
  } else if (isArray(val)) {
    return val.map((item: any,index: number) => {
      return [index, item]
    })
  } else return {}
}

export default entries
