import * as util from './util'

type Hand = 'rock' | 'paper' | 'scissors'

export class RPS {
  id: string = util.getRandomString()
  hands: Hand[] = []
  seed: number

  constructor(seed: number) {
    this.seed = seed
  }

  show(): Hand {
    const hand = this.getHand()
    this.hands.push(hand)
    return hand
  }

  getStatistics() {
    return {
      rockCount: this.hands.filter(hand => hand === 'rock').length,
      paperCount: this.hands.filter(hand => hand === 'paper').length,
      scissorsCount: this.hands.filter(hand => hand === 'scissors').length,
    }
  }

  private getHand() {
    const rand = Math.random() + this.seed
    if (rand <= 0.333) {
      return 'rock'
    } else if (rand <= 0.666) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }
}

export function buttle(p1: RPS, p2: RPS): RPS {
  const p1Hand = p1.show()
  const p2Hand = p2.show()
  if (p1Hand === p2Hand) {
    return buttle(p1, p2)
  }
  if (
    (p1Hand === 'rock' && p2Hand === 'paper') ||
    (p1Hand === 'paper' && p2Hand === 'scissors') ||
    (p1Hand === 'scissors' && p2Hand === 'rock')
  ) {
    return p2
  } else {
    return p1
  }
}
