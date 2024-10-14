export function GenerateUUID() {
  let uuid = ''
  const characters = '0123456789'
  const length = 12

  for (let i = 0; i < length; i++) {
    const randomChar = characters[Math.floor(Math.random() * characters.length)]
    uuid += randomChar
  }

  return uuid
}
