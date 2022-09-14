function isSymbol (val?: any): boolean {
  return Object.prototype.toString.call(val) === '[object Symbol]'
}

export default isSymbol
