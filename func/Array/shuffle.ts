import random from '../Number/random';
import isArray from '../Base/isArray';

function shuffle (arr: any): any[] {
  const res = []
  let index = 0
  if (isArray(arr)) {
    const list: any [] = arr.slice()
    const len = list.length - 1
    for (let i = 0; i <= len; i++) {
      index = len > 0 ? random(0, len) : 0
      res.push(list[index])
      list.splice(index, 1)
    }
  }
  return res
}

export default shuffle
