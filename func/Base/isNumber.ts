function isNumber (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Number]'
}

export default isNumber
