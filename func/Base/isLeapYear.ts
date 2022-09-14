function isLeapYear(val?: any):boolean {
  const year = new Date(val).getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else return false
}

export default isLeapYear
