import isUndefined from '../Base/isUndefined';
import isNull from '../Base/isNull';

function padStart(str: string | number, targetLength: number, target: any = ' '): string {
  str = str.toString()
  if (str.length >= targetLength) return str
  while (str.length <targetLength) {
    if (!isUndefined(target) && !isNull(target)) {
      str = target.toString() + str
    } else {
      str = ' ' + str
    }
  }
  return str
}

export default padStart
