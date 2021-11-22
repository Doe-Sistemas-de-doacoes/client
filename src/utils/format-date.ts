function formatDate(date: string): string {
  if (date) return ''

  if (date.length > 10) return date.split('-').reverse().join('/')

  return ''
}

export default formatDate
