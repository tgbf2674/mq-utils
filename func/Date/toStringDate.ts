import {isDate, isString} from '../index';

function getParseRule (txt: string | number) {
  return '(\\d{' + txt + '})'
}

function toParseMs (num: number) {
  if (num < 10) {
    return num * 100
  } else if (num < 100) {
    return num * 10
  }
  return num
}

function toParseNum (num: number | string) {
  return typeof num === 'number' ? num : parseInt(num)
}

const d2 = getParseRule(2)
const d1or2 = getParseRule('1,2')
const d1or7 = getParseRule('1,7')
const d3or4 = getParseRule('3,4')
const place = '.{1}'
const d1Or2RE = place + d1or2
const dzZ = '(([zZ])|([-+]\\d{2}:?\\d{2}))'

const defaulParseStrs = [d3or4, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, place + d1or7, dzZ]
const defaulParseREs: any[] = []

for (let len = defaulParseStrs.length - 1; len >= 0; len--) {
  let rule = ''
  for (let i = 0; i < len + 1; i++) {
    rule += defaulParseStrs[i]
  }
  defaulParseREs.push(new RegExp('^' + rule + '$'))
}

/**
 * 解析默认格式
 */
function parseDefaultRules (str: string) {
  let matchRest
  const resMaps: any = {}
  for (let i = 0, dfrLen = defaulParseREs.length; i < dfrLen; i++) {
    matchRest = str.match(defaulParseREs[i])
    if (matchRest) {
      resMaps.y = matchRest[1]
      resMaps.M = matchRest[2]
      resMaps.d = matchRest[3]
      resMaps.H = matchRest[4]
      resMaps.m = matchRest[5]
      resMaps.s = matchRest[6]
      resMaps.S = matchRest[7]
      resMaps.Z = matchRest[8]
      break
    }
  }
  return resMaps
}

const customParseStrs = [
  ['yyyy', d3or4],
  ['yy', d2],
  ['MM', d2],
  ['M', d1or2],
  ['dd', d2],
  ['d', d1or2],
  ['HH', d2],
  ['H', d1or2],
  ['mm', d2],
  ['m', d1or2],
  ['ss', d2],
  ['s', d1or2],
  ['SSS', getParseRule(3)],
  ['S', d1or7],
  ['Z', dzZ]
]

const parseRuleMaps: any= {}
const parseRuleKeys = ['\\[([^\\]]+)\\]']

for (let i = 0; i < customParseStrs.length; i++) {
  const itemRule = customParseStrs[i]
  parseRuleMaps[itemRule[0]] = itemRule[1] + '?'
  parseRuleKeys.push(itemRule[0])
}
const customParseRes = new RegExp(parseRuleKeys.join('|'), 'g')
const cacheFormatMaps: any = {}

function parseCustomRules (str:string, format: string) {
  let cacheItem = cacheFormatMaps[format]
  if (!cacheItem) {
    const posIndexs: string[] = []
    const re = format.replace(/([$(){}*+.?\\^|])/g, "\\$1").replace(customParseRes, function (text, val) {
      const firstChar = text.charAt(0)
      // 如果为转义符号:[关键字]
      if (firstChar === '[') {
        return val
      }
      posIndexs.push(firstChar)
      return parseRuleMaps[text]
    })
    cacheItem = cacheFormatMaps[format] = {
      _i: posIndexs,
      _r: new RegExp(re)
    }
  }
  const resMaps:any = {}
  const matchRest = str.match(cacheItem._r)
  if (matchRest) {
    const _i = cacheItem._i
    for (let i = 1, len = matchRest.length; i < len; i++) {
      resMaps[_i[i - 1]] = matchRest[i]
    }
    return resMaps
  }
  return resMaps
}

function helperGetUTCDateTime (resMaps: any) {
  return Date.UTC(resMaps.y, resMaps.M || 0, resMaps.d || 1, resMaps.H || 0, resMaps.m || 0, resMaps.s || 0, resMaps.S || 0)
}

/**
 * 解析时区
 */
function parseTimeZone (resMaps: any) {
  // 如果为UTC 时间
  if (/^[zZ]/.test(resMaps.Z)) {
    return new Date(helperGetUTCDateTime(resMaps))
  } else {
    // 如果指定时区，时区转换
    const matchRest = resMaps.Z.match(/([-+])(\d{2}):?(\d{2})/)
    if (matchRest) {
      return new Date(helperGetUTCDateTime(resMaps) - (matchRest[1] === '-' ? -1 : 1) * parseInt(matchRest[2]) * 3600000 + parseInt(matchRest[3]) * 60000)
    }
  }
  return new Date('')
}

function toStringDate(str?: string | Date | number, format?:string): Date {
  if (str) {
    if (str instanceof Date) {
      return new Date(str.getTime())
    } else if (typeof str === 'string' && !format && /^[0-9]{11,15}$/.test(str)) {
      return new Date (parseInt(str))
    } else if (typeof str === 'number') return new Date(str)
    if (isString(str)) {
      const resMaps = format ? parseCustomRules(str as string, format!) : parseDefaultRules(str as string)
      if (resMaps.y) {
        if (resMaps.M) {
          resMaps.M = toParseNum(resMaps.M) - 1
        }
        if (resMaps.S) {
          // 如果7位则是微秒，只精确到3位毫秒
          resMaps.S = toParseMs(toParseNum(resMaps.S.substring(0, 3)))
        }
        if (resMaps.Z) {
          return parseTimeZone(resMaps)
        } else {
          return new Date(resMaps.y, resMaps.M || 0, resMaps.d || 1, resMaps.H || 0, resMaps.m || 0, resMaps.s || 0, resMaps.S || 0)
        }
      }
    }
  }
  return new Date('')
}

export default toStringDate
