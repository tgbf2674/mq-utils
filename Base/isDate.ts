function isDate (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Date]'
}

export default isDate
