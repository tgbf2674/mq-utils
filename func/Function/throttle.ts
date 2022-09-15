function throttle (fn:() => any, await = 1000) {
    let prevTime = 0
    return (...args: any []) => {
      const now = Date.now()
      if (now - prevTime >= await) {
        fn.apply(args)
        prevTime = now
      }
   }
}

export default throttle
