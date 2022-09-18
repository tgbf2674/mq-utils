const helper = (num1:number, num2: number): number => {
  const str1 = num1.toString()
  const str2 = num2.toString()
  return parseInt(str1.replace('.', '')) * parseInt(str2.replace('.', '')) / Math.pow(10, (str1.split('.')[1] || '').length + (str2.split('.')[1] || '').length )
}

function round (val: number | string, digits?: number | undefined): number {
  const num = typeof val === 'string' ? Number(val) : val
  let rest = num
  if (num) {
    const numStr = num.toString()
    const nums = numStr.split('.')
    const intStr = nums[0]
    const floatStr = nums[1] || ''
    if (digits) {
      digits = digits >> 0
      const subFs = floatStr.substring(0, digits + 1)
      let subRest: string | number = intStr + (subFs ? ('.' + subFs) : '')
      if (digits >= floatStr.length) {
        return Number(subRest)
      }
      subRest = num
      if (digits > 0) {
        const ratio = Math.pow(10, digits)
        rest = Math.round(helper(subRest, ratio)) / ratio
      } else {
        rest = Math.round(subRest)
      }
    } else {
      return Math.round(Number(intStr))
    }
  }
  return rest
}

export default round
