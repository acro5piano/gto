import { randomBytes } from 'crypto'

function getRandomString() {
  return randomBytes(10).toString('hex')
}

type Action = 'rock' | 'paper' | 'scissors'

class RPS {
  id: string = getRandomString()

  show(): Action {
    const rand = Math.random()

    if (rand < 0.33) {
      return 'rock'
    } else if (rand < 0.66) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }
}

function buttle(p1: RPS, p2: RPS): RPS {
  const p1Hand = p1.show()
  const p2Hand = p2.show()
  if (p1Hand === p2Hand) {
    return buttle(p1, p2)
  }
  if (p1Hand === 'rock' && p2Hand === 'paper') {
    return p2
  }
  if (p1Hand === 'rock' && p2Hand === 'scissors') {
    return p1
  }
  if (p1Hand === 'paper' && p2Hand === 'scissors') {
    return p2
  }
  if (p1Hand === 'paper' && p2Hand === 'rock') {
    return p1
  }
  if (p1Hand === 'scissors' && p2Hand === 'rock') {
    return p2
  }
  if (p1Hand === 'scissors' && p2Hand === 'paper') {
    return p1
  }
  throw new Error('not here')
}

function main() {
  const p1 = new RPS()
  const p2 = new RPS()
  const result = buttle(p1, p2)
  console.log({ p1: p1.id, p2: p2.id, result })
}

main()
