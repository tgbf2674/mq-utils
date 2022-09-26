import isArray from '../Base/isArray';

// children 子节点名称
// mapChildren 将子节点映射到指定属性

type optionsType = {
  children?: string,
  mapChildren?: string
}

function searchTreeItem (parentAllow: boolean, parent: any ,obj: any, iterate: any, options: optionsType) {
  const res = []
  let temp = []
  let isAllow = false
  let hasChild = false
  const children = options.children || 'children'
  const mapChildren = options.mapChildren || children
  if (isArray(obj)) {
    for (let i =0 ;i< obj.length;i++) {
      hasChild = !!children && Boolean(obj[i][children])
      isAllow = parentAllow || iterate(obj[i])
      if (isAllow || hasChild) {
        temp = Object.assign({}, obj[i])
        temp[mapChildren] = searchTreeItem(isAllow, obj[i], obj[i][children], iterate, options)
        if (isAllow || temp[mapChildren].length) {
          res.push(temp)
        }
      }
    }
    return res
  }
  return []
}

function searchTree (obj: any, iterate: any, options?: optionsType) {
  const opts = options || {}
  return searchTreeItem(false, null, obj, iterate, opts)
}

export default searchTree
