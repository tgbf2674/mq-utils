function unserialize (str: string) {
  let items = []
  const result: any = {}
  if (str) {
    str.split('&').forEach(item => {
      items = item.split('=')
      result[decodeURIComponent(items[0])] = decodeURIComponent(items[1] || '')
    })
  }
  return result
}

export default unserialize
