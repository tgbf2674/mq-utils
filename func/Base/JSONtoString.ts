import isNull from './isNull';
import isUndefined from './isUndefined';

function JSONtoString (val?: any): string {
  if (isNull(val) || isUndefined(val)) return ''
  return JSON.stringify(val)
}

export default JSONtoString
