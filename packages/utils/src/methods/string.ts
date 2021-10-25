export function trim(str: string) {
  if (!str) {
    return
  }
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
