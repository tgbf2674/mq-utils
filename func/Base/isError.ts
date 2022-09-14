function isError (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Error]'
}

export default isError
