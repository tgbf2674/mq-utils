function toNumber (val: any): number {
  if (typeof val === 'number') {
    return val
  } else {
    return isNaN(parseFloat(val)) ? 0 : parseFloat(val)
  }
}

export default toNumber
