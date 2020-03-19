import { randomBytes } from 'crypto'

export function getRandomString() {
  return randomBytes(10).toString('hex')
}
