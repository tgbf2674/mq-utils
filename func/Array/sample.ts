import shuffle from './shuffle';
import isUndefined from '../Base/isUndefined';
import isNaN from '../Base/isNaN';
import mmqUtils from '../index';

function sample (arr: any, count?: number): any {
  const res = shuffle(arr)
  if (isNaN(count) || isUndefined(count)) {
    return res[0]
  }
  if (count && count < res.length) {
    res.length = count || 0
  }
  return res
}

export default sample
