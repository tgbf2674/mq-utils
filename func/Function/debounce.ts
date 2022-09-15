function debounce (fn: () => any, await = 1000) {
  let timer: any = null
  return (...args: any []) => {
    if (!timer) fn.apply(args)
    else {
      timer = setTimeout(() => {
        timer = null
      }, await)
    }
  }
}

export default debounce
