function isNumberNaN (val?: any): boolean {
  return typeof val === "number" && isNaN(val)
}

export default isNumberNaN
