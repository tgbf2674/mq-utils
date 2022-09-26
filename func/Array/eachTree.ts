import isArray from '../Base/isArray';

type optionsType = {
  children?: string,
  mapChildren?: string
}

function eachTreeItem (parentAllow: boolean, parent: any ,obj: any, iterate: any, options?: optionsType): void {
  let isAllow = false
  let hasChild = false
  const children = options?.children || 'children'
  if (isArray(obj)) {
    for (let i =0 ;i< obj.length;i++) {
      hasChild = !!children && Boolean(obj[i][children])
      isAllow = parentAllow || iterate(obj[i])
      if (isAllow || hasChild) {
        eachTreeItem(isAllow, obj[i], obj[i][children], iterate, options)
      }
    }
  }
}

function eachTree (obj: any, iterate: any, options?: optionsType) {
  return eachTreeItem(false, null, obj, iterate, options)
}

export default eachTree
