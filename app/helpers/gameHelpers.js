export function calculateCardCount(cards) {
  let cardValues = cards.map((card) => card.value)
  return cardValues.reduce((prev, curr) => prev + curr)
}
