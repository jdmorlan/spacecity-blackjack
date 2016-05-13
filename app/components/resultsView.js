import React, { PropTypes } from 'react'

const ResultsView = React.createClass({
  render () {
    return (
      <div className="results-view">
        <div className="message">
          { this.props.message }
        </div>
        <div className="scores">
          <div className="dealer">
            { this.props.dealerScore }
            <div className="identifier">D</div>
          </div>
          <div className="player">
            { this.props.playerScore }
            <div className="identifier">P</div>
          </div>
        </div>
        <button className="btn" onClick={ this.props.restart }>New Game</button>
      </div>
    )
  }
})

export default ResultsView
