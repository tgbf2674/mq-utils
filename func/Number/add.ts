import toNumberString from './toNumberString';
import multiply from './multiply';

function add(val1: any, val2:any): number {
  const str1 = toNumberString(val1)
  const str2 = toNumberString(val2)
  const ratio = Math.pow(10, Math.max((str1.split('.')[1] || '').length, (str2.split('.')[1] || '').length))
  return (multiply(val1, ratio) + multiply(val2, ratio)) / ratio
}

export default add
