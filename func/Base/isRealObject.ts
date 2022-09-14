function isRealObject (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export default isRealObject
