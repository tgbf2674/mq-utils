import remove from './remove';
import isArray from '../Base/isArray';

type optionsType = {
  strict?: boolean,
  parentKey?: string,
  key?: string,
  children?: string,
  mapChildren?: string,
  data?: string
}

function strictTree (array: any[], optChildren: string) {
  for (let i = 0;i<array.length;i++) {
    if (array[i].children && !array[i].children.length) {
      remove(array[i], optChildren)
    }
  }
}

function toArrayTree (array?: any, options?: optionsType): any[] {
  const treeOptions = {
    parentKey: 'parentId',
    key: 'id',
    children: 'children'
  }
  const opts = Object.assign({}, treeOptions, options)
  const optStrict = opts.strict
  const optKey = opts.key
  const optParentKey = opts.parentKey
  const optChildren = opts.children
  const optMapChildren = opts.mapChildren
  const optData = opts.data
  const res = []
  const treeMap: any = {}
  let id
  let parentId
  let treeData: any
  if (isArray(array) && array.length) {
    const idList = array.map((item: any) => {
      return item[optKey]
    })
    for (let i = 0; i < array.length; i++) {
      id = array[i][optKey]
      if (optData) {
        treeData = {}
        treeData[optData] = array[i]
      } else {
        treeData = array[i]
      }
      optData ? treeData[optData] = array[i] : treeData = array[i]
      parentId = array[i][optParentKey]
      treeMap[id] = treeMap[id] || []
      treeMap[parentId] = treeMap[parentId] || []
      treeMap[parentId].push(treeData)
      treeData[optKey] = id
      treeData[optParentKey] = parentId
      treeData[optChildren] = treeMap[id]
      if (optMapChildren) {
        treeData[optMapChildren] = treeMap[id]
      }
      if (!optStrict || (optStrict && !parentId)) {
        if (!idList.includes(parentId)) {
          res.push(treeData)
        }
      }
    }
    if (optStrict) {
      strictTree(array, optChildren)
    }
  }
  return res
}


export default toArrayTree
