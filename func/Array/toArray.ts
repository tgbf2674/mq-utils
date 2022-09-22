import isArray from '../Base/isArray';

function toArray (list: any): any[] {
  const res = []
  if (isArray(list)) {
    return list.map((item: any) => item)
  } else {
    for (const i in list) {
      res.push(list[i])
    }
  }
  return res
}

export default toArray
