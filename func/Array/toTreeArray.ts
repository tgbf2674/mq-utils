import treeDefault from './arrDefault';
import isArray from '../Base/isArray';

type optionsType = {
  children?: string,
  data?: string,
  clear?: boolean
}

function unTreeList (res: any[], array: any[], opts: optionsType) {
  const optChildren = opts.children
  const optData = opts.data
  const optClear = opts.clear
  for (let i = 0;i<array.length;i++) {
    const children = array[i][optChildren!]
    if (optData) {
      array[i] = array[i][optData]
    }
    res.push(array[i])
    if (children && children.length) {
      unTreeList(res, children, opts)
    }
    if (optClear) delete array[i][optChildren!]
  }
  return res
}

function toTreeArray (array?: any, options?: optionsType) {
  if (isArray(array)) {
    return unTreeList([], array, Object.assign({}, treeDefault, options))
  } else {
    return []
  }
}

export default toTreeArray
