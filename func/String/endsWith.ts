import isString from '../Base/isString';
import isNull from '../Base/isNull';
import isUndefined from '../Base/isUndefined';

function endsWith (str: string, target?: any, index?: number): boolean {
  if (!target || !isString(target)) return false
  return (isNull(index) && isUndefined(index)) ? str.endsWith(target) : str.endsWith(target, index)
}

export default endsWith
