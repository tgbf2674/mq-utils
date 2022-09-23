import isArray from '../Base/isArray';
import isString from '../Base/isString';

function uniq (arr?: any): any[] {
  const res: any[] = []
  if (isString(arr)) arr = arr.split('')
  if (isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])) {
        res.push(arr[i])
      }
    }
  }
  return res
}

export default uniq
