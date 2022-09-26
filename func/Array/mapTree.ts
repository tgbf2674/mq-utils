import eachTree from './eachTree';
import isArray from '../Base/isArray';
// children 子节点名称

type optionsType = {
  children?: string,
  mapChildren?: string
}

function mapTreeItem (parentAllow: boolean, parent: any ,obj: any, iterate: any, options?: optionsType): any[] {
  let isAllow = false
  let hasChild = false
  const opts = options || {}
  const res: any = []
  const children = options?.children || 'children'
  const mapChildren = options?.mapChildren || children
  if (isArray(obj)) {
    for (let i = 0;i<obj.length;i++) {
      hasChild = !!children && Boolean(obj[i][children])
      isAllow = parentAllow || iterate(obj[i])
      res.push(iterate(obj[i]))
      if ((isAllow || hasChild) && res && obj[i][children]) {
        res[i][mapChildren] = mapTreeItem(isAllow, obj[i], obj[i][children], iterate, opts)
      }
    }
  }
  return res
}

function mapTree (obj: any, iterate: any, options?: optionsType): any [] {
  return mapTreeItem(false, null, obj, iterate, options)
}


export default mapTree
