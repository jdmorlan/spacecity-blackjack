import React, { PropTypes } from 'react'


import ActionBar from './actionBar'
import CardArea from './cardArea'
import ResultsView from './resultsView'

const Game = React.createClass({
  propTypes: {

  },

  determineView() {
    const { winner, dealer, player } = this.props
    console.log(winner)

    if (this.props.winner.hasWinner) {
      return (
        <ResultsView message={ winner.message } restart={ this.props.restart }
                     dealerScore={ dealer.cardCount } playerScore={ player.cardCount }/>
      )
    } else {
      return(
        <ActionBar cardCount={ player.cardCount }
                   hit={ this.props.hit }
                   stay={ this.props.stay }
                   canDraw={ this.props.canDraw }
                   player={ this.props.player }
                   dealer={ this.props.dealer }/>
      )
    }
  },

  render () {
    const actionView = this.determineView()

    return (
      <div className="game">
        <div className="cards-area">
          <CardArea cards={ this.props.dealer.cards } title="Dealer"/>
          <CardArea cards={ this.props.player.cards } title="Player"/>
        </div>

        <div className="player-area">
          { actionView }
        </div>
      </div>
    )
  }
})

export default Game
