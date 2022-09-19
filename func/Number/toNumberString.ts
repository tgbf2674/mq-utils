function helperStringRepeat (str: string, count: number | string) {
  if (str.repeat) {
    return str.repeat(count as number)
  }
  const list = isNaN(count as number) ? [] : new Array(parseInt(count as string))
  return list.join(str) + (list.length > 0 ? str : '')
}

function helperNumberOffsetPoint (str: string, offsetIndex: number) {
  return str.substring(0, offsetIndex) + '.' + str.substring(offsetIndex, str.length)
}

function toNumberString (num: any): string {
  const rest = num.toString()
  const scienceMatchs = rest.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/)
  if (scienceMatchs) {
    const isNegative = num < 0
    const absFlag = isNegative? '-' : ''
    const intNumStr = scienceMatchs[3] || ''
    const dIntNumStr = scienceMatchs[5] || ''
    const dFloatNumStr = scienceMatchs[6] || ''
    const sciencFlag = scienceMatchs[7]
    const scienceNumStr = scienceMatchs[8]
    const floatOffsetIndex = Number(scienceNumStr) - dFloatNumStr.length
    const intOffsetIndex = Number(scienceNumStr) - intNumStr.length
    const dIntOffsetIndex = Number(scienceNumStr) - dIntNumStr.length
    if (sciencFlag === '+') {
      if (intNumStr) {
        return absFlag + intNumStr + helperStringRepeat('0', floatOffsetIndex)
      }
      if (floatOffsetIndex > 0) {
        return absFlag + dIntNumStr + dFloatNumStr + helperStringRepeat('0', floatOffsetIndex)
      }
      return absFlag + dIntNumStr + helperNumberOffsetPoint(dFloatNumStr, Number(scienceNumStr))
    }
    if (intNumStr) {
      if (intOffsetIndex > 0) {
        return absFlag + '0.' + helperStringRepeat('0', Math.abs(intOffsetIndex)) + intNumStr
      }
      return absFlag + helperNumberOffsetPoint(intNumStr, intOffsetIndex)
    }
    if (dIntOffsetIndex > 0) {
      return absFlag + '0.' + helperStringRepeat('0', Math.abs(dIntOffsetIndex)) + dIntNumStr + dFloatNumStr
    }
    return absFlag + helperNumberOffsetPoint(dIntNumStr, dIntOffsetIndex) + dFloatNumStr
  }
  return rest
}

export default toNumberString
