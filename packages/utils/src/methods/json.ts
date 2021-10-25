// 转化成json
export function JSONDecode(string: string) {
  try {
    return JSON.parse(string)
  } catch (error) {
    return {}
  }
}

// json转化为string
export function JSONEncode(json: any) {
  try {
    return JSON.stringify(json)
  } catch (error) {
    return ''
  }
}
