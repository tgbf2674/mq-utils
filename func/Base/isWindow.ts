function isWindow (val?: any): boolean {
  return window && window instanceof Window
}

export default isWindow
