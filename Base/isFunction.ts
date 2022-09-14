function isFunction (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Function]'
}

export default isFunction
