import { RPS, buttle } from './domain'

function main() {
  const p1 = new RPS({
    rock: 0.5,
    paper: 0.2,
    scissors: 0.2,
  })
  const p2 = new RPS({
    rock: 0.2,
    paper: 0.2,
    scissors: 0.5,
  })
  let p1WinCount = 0
  let p2WinCount = 0

  for (let i = 0; i < 10 ** 6; i++) {
    const result = buttle(p1, p2)
    if (result.id === p1.id) {
      p1.feedback('win')
      p2.feedback('lose')
      p1WinCount += 1
    } else {
      p1.feedback('lose')
      p2.feedback('win')
      p2WinCount += 1
    }
  }

  console.log({
    p1: {
      p1WinCount,
      ...p1.getStatistics(),
    },
    p2: {
      p2WinCount,
      ...p2.getStatistics(),
    },
  })
}

main()
