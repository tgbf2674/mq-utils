function isNull (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Null]'
}

export default isNull
