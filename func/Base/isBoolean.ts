function isBoolean(val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Boolean]'
}

export default isBoolean
