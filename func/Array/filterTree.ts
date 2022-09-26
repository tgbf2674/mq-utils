import eachTree from './eachTree';
// children 子节点名称

type optionsType = {
  children?: string,
}

function filterTree (obj: any, iterate: any, options?: optionsType): any [] {
  const opts = options || {}
  const res: any[] = []
  eachTree(obj, function (item: any) {
    if (iterate(item)) res.push(item)
  }, opts)
  return res
}


export default filterTree
