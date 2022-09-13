function isArray (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]'
}

export default isArray
