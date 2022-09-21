function lastArrayEach(list: any [], iterate: (this: object, item: any, index: number, obj: any) => void, context?: object) {
  if (list) {
    if (list.forEach) {
      list.forEach(iterate, context)
    } else {
      for (let i = list.length - 1;i > 0;i--) {
        iterate.call(context!, list[i], i, list)
      }
    }
  }
}

export default lastArrayEach
