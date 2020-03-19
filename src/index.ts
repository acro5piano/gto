import { RPS, buttle } from './domain'

function main() {
  const p1 = new RPS(0.4)
  const p2 = new RPS(-0.4)
  let p1WinCount = 0
  let p2WinCount = 0

  for (let i = 0; i < 100000; i++) {
    const result = buttle(p1, p2)
    if (result.id === p1.id) {
      p1WinCount += 1
    } else {
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
