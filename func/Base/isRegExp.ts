function isRegExp(val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object RegExp]'
}

export default isRegExp
