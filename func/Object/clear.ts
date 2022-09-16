import mmqUtils from '../index';

function clear (obj: any, defs?:any, assigns?: any): object {
  if (obj) {
    let len = 0
    const isDefs: boolean = arguments.length > 0 && (mmqUtils.isNull(defs) || !mmqUtils.isObject(defs))
    const extds = isDefs ? assigns : defs
    if (mmqUtils.isRealObject(obj)) {
      for (const key in obj) {
        isDefs ? obj[key] = defs : delete obj[key]
      }
      if (extds) {
        assigns(obj, extds)
      }
    } else if (mmqUtils.isArray(obj)) {
      if (isDefs) {
        len = obj.length
        while (len> 0) {
          len--
          obj[len] = defs
        }
      } else {
        obj.length = 0
      }
      if (extds) {
        obj.push(obj, extds)
      }
    }
  }
  return obj
}

export default clear
