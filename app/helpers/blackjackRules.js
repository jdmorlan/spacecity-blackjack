function hasBusted(carrier) {
  return carrier.cardCount > 21
}

function hasBlackjack(carrier) {
  return carrier.cardCount === 21
}

function buildMessage(message, hasWinner = true) {
   return {
     message: message,
     hasWinner: hasWinner
  }
}

function getEvaluationObject(dealer, player) {
  console.log(dealer)
  console.log(player)
  return {
    hs: player.hasStayed,
    phb: hasBlackjack(player),
    dhb: hasBlackjack(dealer),
    pb: hasBusted(player),
    db: hasBusted(dealer),
    pgd: player.cardCount > dealer.cardCount,
    ped: player.cardCount === dealer.cardCount
  }
}

export function determineResult(dealer, player) {
  const eo = getEvaluationObject(dealer, player)
  console.log("evaluation-object", eo)

  // If Player has Blackjack and Dealer does not have Blackjack,
  // then the player wins
  if (eo.phb && !eo.dhb) {
    return buildMessage('Player Wins')
  }

  if (eo.pb && eo.db) {
    return buildMessage('Draw')
  }

  if (eo.phb && eo.dhb) {
    return buildMessage('Draw')
  }

  // If player has stayed, the dealer has not busted, the player has not
  // busted and both the dealer and player have the same card count
  // it is a draw
  if (eo.hs && !eo.db && !eo.pb && eo.ped) {
    return buildMessage('Draw')
  }

  if (eo.hs && !eo.db && !eo.pb && eo.pgd) {
    return buildMessage('Player Wins')
  }

  if (eo.hs && eo.db && !eo.pb) {
    return buildMessage('Player Wins')
  }

  if (eo.hs && !eo.db && !eo.pb && !eo.pgd) {
    return buildMessage('Dealer Wins')
  }

  if (eo.pb && !eo.db) {
    return buildMessage('Dealer Wins')
  }

  return {
    message: null,
    hasWinner: false
  }

}
