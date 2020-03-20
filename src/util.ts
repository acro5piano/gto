import { randomBytes } from 'crypto'

export function getRandomString() {
  return randomBytes(10).toString('hex')
}

export function sigmoid(x: number) {
  return (Math.tanh(x / 2) + 1) / 2
}

export function getNextEvaluation(x: number, isPlus: boolean) {
  const direction = isPlus ? 1 : -1
  // return x + 0.01 * direction * x
  return x + 0.001 * direction
  // return Math.tanh(x + (direction * 0.1) / (1 - x))
}
