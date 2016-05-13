import { buildDeck } from '../../helpers/deck'
import * as gameHelpers from '../../helpers/gameHelpers'
import { determineResult } from '../../helpers/blackjackRules'

const CREATE_DECK = 'CREATE_DECK'
const INITIAL_DEAL = 'INITIAL_DEAL'
const DETERMINE_WINNER = 'DETERMINE_WINNER'
const CLEAR_WINNER = 'CLEAR_WINNER'


const DRAW_PLAYER_CARD = 'DRAW_PLAYER_CARD'
const SET_PLAYER_STAY = 'SET_PLAYER_STAY'
const CALCULATE_CARD_COUNT = 'CALCULATE_PLAYER_CARD_COUNT'

const DRAW_DEALER_CARD = 'DRAW_DEALER_CARD'
const SHOW_DEALER_CARDS = 'SHOW_DEALER_CARDS'

export function initialDeal() {
  return function(dispatch) {
    dispatch(drawPlayerCard())
    dispatch(drawDealerCard())
    dispatch(drawPlayerCard())
    dispatch(drawDealerCard(false))
    dispatch(calculateCardCount())
  }
}

export function playerHit() {
  return function(dispatch) {
    dispatch(drawPlayerCard())
    dispatch(calculateCardCount())
  }
}

export function playerStay() {
  return function(dispatch, getState) {
    const state = getState()
    let dealerCardCount = state.game.dealer.cardCount
    dispatch(setPlayerStay())

    while (dealerCardCount <= 16) {
      dispatch(drawDealerCard())
      dispatch(calculateCardCount())
      dealerCardCount = getState().game.dealer.cardCount
    }
  }
}

export function setPlayerStay() {
  return {
    type: SET_PLAYER_STAY
  }
}

export function determineWinner(message, hasWinner) {
  return {
    type: DETERMINE_WINNER,
    message,
    hasWinner
  }
}

export function clearWinner() {
  return {
    type: CLEAR_WINNER
  }
}

export function handleWinner() {
  return function(dispatch, getState) {
    const { dealer, player } = getState().game

    const result = determineResult(dealer, player)
    dispatch(determineWinner(result.message, result.hasWinner))

    const state = getState()
    if (state.game.winner.hasWinner) {
      dispatch(showDealerCards())
    }
  }
}

export function createDeck() {
  return {
    type: CREATE_DECK
  }
}

export function drawPlayerCard() {
  return {
    type: DRAW_PLAYER_CARD
  }
}

export function drawDealerCard(shown = true) {
  return {
    type: DRAW_DEALER_CARD,
    shown
  }
}

export function calculateCardCount() {
  return {
    type: CALCULATE_CARD_COUNT
  }
}

export function showDealerCards() {
  return {
    type: SHOW_DEALER_CARDS
  }
}

const initialState = {
  cards: buildDeck(),
  winner: false,
  player: {
    busted: false,
    cards: [],
    cardCount: 0
  },
  dealer: {
    busted: false,
    cards: [],
    cardCount: 0
  },
  winner: {
    hasWinner: false,
    message: ''
  }
}


export default function game (state = initialState, action) {
  switch (action.type) {
    case CREATE_DECK: {
      return Object.assign({}, state, {
        cards: buildDeck(),
        player: {
          cards: [],
          cardCount: 0
        },
        dealer: {
          cards: [],
          cardCount: 0
        }
      })
    }

    case DRAW_PLAYER_CARD: {
      let card = state.cards[0]
      return Object.assign({}, state, {
        cards: state.cards.splice(1),
        player: {
          ...state.player,
          cards: state.player.cards.concat([card])
        }
      })
    }

    case DRAW_DEALER_CARD: {
      let card = state.cards[0]
      card.shown = action.shown
      return Object.assign({}, state, {
        cards: state.cards.splice(1),
        dealer: {
          ...state.dealer,
          cards: state.dealer.cards.concat([card])
        }
      })
    }

    case CALCULATE_CARD_COUNT: {
      let playerCardCount = gameHelpers.calculateCardCount(state.player.cards)
      let dealerCardCount = gameHelpers.calculateCardCount(state.dealer.cards)

      return Object.assign({}, state, {
        player: {
          ...state.player,
          cardCount: playerCardCount
        },
        dealer: {
          ...state.dealer,
          cardCount: dealerCardCount
        }
      })
    }

    case SHOW_DEALER_CARDS: {
      return Object.assign({}, state, {
        dealer: {
          ...state.dealer,
          cards: state.dealer.cards.map((card) => {
            return Object.assign({}, card, {
              shown: true
            })
          })
        }
      })
    }

    case SET_PLAYER_STAY: {
      return Object.assign({}, state, {
        player: {
          ...state.player,
          hasStayed: true
        }
      })
    }

    case DETERMINE_WINNER: {
      return Object.assign({}, state, {
        winner: {
          hasWinner: action.hasWinner,
          message: action.message
        }
      })
    }

    case CLEAR_WINNER: {
      return Object.assign({}, state, {
        winner: {
          hasWinner: false,
          message: null
        }
      })
    }

    default:
      return state
  }
}
