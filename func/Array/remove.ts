import isFunction from '../Base/isFunction';

function removeArray (obj: any[], iterate: any): any[] {
  let res = []
  if (isFunction(iterate)) {
    res = obj.filter(iterate)
  } else {
    res = obj.filter(item => item !== iterate)
  }
  return res
}

export default removeArray
