const SUITES = ['A', 'B', 'C', 'D']
const FACES = ['K', 'Q', 'J']
const NUM_FACES = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function shuffle(array) {
  let internalArray = array

  let m = internalArray.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--)

    t = internalArray[m]
    internalArray[m] = internalArray[i]
    internalArray[i] = t
  }

  return internalArray
}

export function buildDeck() {
  const cards = []

  // Build Aces
  SUITES.forEach((suite) => {
    let card = {
      face: 'A',
      value: 11,
      suite
    }

    cards.push(card)
  })

  // Build Face Cards
  SUITES.forEach((suite) => {
    FACES.forEach((face) => {
      let card = {
        value: 10,
        suite,
        face
      }

      cards.push(card)
    })
  })

  // Build Normal Cards
  SUITES.forEach((suite) => {
    NUM_FACES.forEach((face) => {
      let card = {
        value: face,
        face: face.toString(),
        suite
      }

      cards.push(card)
    })
  })

  return shuffle(cards)
}
