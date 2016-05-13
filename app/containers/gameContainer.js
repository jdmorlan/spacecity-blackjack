import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as gameActions from '../redux/modules/game'
import { determineResult } from '../helpers/blackjackRules'

import Game from '../components/game'

const GameContainer = React.createClass({
  componentDidMount () {
    this.props.dispatch(gameActions.initialDeal())
  },

  canDraw () {
    return this.props.player.busted || this.props.player.hasStayed
  },

  restart() {
    this.props.dispatch(gameActions.createDeck())
    this.props.dispatch(gameActions.initialDeal())
    this.props.dispatch(gameActions.clearWinner())
  },

  hit () {
    this.props.dispatch(gameActions.playerHit())
    this.props.dispatch(gameActions.handleWinner())
  },

  stay () {
    this.props.dispatch(gameActions.showDealerCards())
    this.props.dispatch(gameActions.playerStay())
    this.props.dispatch(gameActions.handleWinner())
  },

  render () {
    return (
      <Game { ...this.props }
            hit={ this.hit } stay={ this.stay }
            canDraw={ this.canDraw() }
            restart={ this.restart } />
    )
  }
})

function mapStateToProps(state) {
  return {
    cards: state.game.cards,
    player: state.game.player,
    dealer: state.game.dealer,
    winner: state.game.winner
  }
}

export default connect(mapStateToProps)(GameContainer)
