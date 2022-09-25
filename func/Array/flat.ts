import isArray from '../Base/isArray';

const help = (arr: any [], deep?: boolean): any [] => {
  let res: any[] = []
  for (let i = 0;i<arr.length;i++) {
    res = res.concat(isArray(arr[i]) ? (deep ? help(arr[i], deep) : arr[i]): [arr[i]])
  }
  return res
}

function flat (arr?: any, deep?: boolean): any[] {
  if (arr && isArray(arr)) {
    return help(arr,deep)
  }
  return []
}

export default flat
