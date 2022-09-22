function includeArrays (arr1: any[], arr2: any[]) :boolean {
  for (let i = 0; i< arr2.length;i++) {
    if (!arr1.includes(arr2[i])) {
      return false
    }
  }
  return true
}

export default includeArrays
