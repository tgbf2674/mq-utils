function repeat (str: string, count?: any): string {
  return typeof count === 'number' ? str.repeat(count) : ''
}

export default repeat
