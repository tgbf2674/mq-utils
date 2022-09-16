function debounce (fn: () => any, wait = 1000) {
  let timer: any = null
  return (...args: any []) => {
    if (!timer) fn.apply(args)
    else {
      timer = setTimeout(() => {
        timer = null
      }, wait)
    }
  }
}

export default debounce
