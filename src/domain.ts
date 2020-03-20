import * as util from './util'

const HAND = ['rock', 'paper', 'scissors'] as const
type Hand = typeof HAND[number]

interface Strategy {
  rock: number
  paper: number
  scissors: number
}

export class RPS {
  id: string = util.getRandomString()
  playedHands: Hand[] = []
  strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  show(): Hand {
    const hand = this.getHand()
    this.playedHands.push(hand)
    return hand
  }

  getStatistics() {
    return {
      rockCount: this.playedHands.filter(hand => hand === 'rock').length,
      paperCount: this.playedHands.filter(hand => hand === 'paper').length,
      scissorsCount: this.playedHands.filter(hand => hand === 'scissors').length,
      strategy: this.strategy,
    }
  }

  private getHand(): Hand {
    const candidates = HAND.filter(hand => {
      const strategyValue = this.strategy[hand]
      return Math.random() < strategyValue
    })
    if (candidates.length === 1) {
      return candidates[0]
    }
    return this.getHand()
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
