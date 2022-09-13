function isNumberFinite (val?: any): boolean {
  return typeof val === 'number' && isFinite(val)
}

export default isNumberFinite
