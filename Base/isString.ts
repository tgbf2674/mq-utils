function isString(val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object String]'
}
export default isString
