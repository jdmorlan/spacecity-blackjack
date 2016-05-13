import React, { PropTypes } from 'react'

import Card from './card'

const CardArea = React.createClass({
  propTypes: {
    cards: PropTypes.array.isRequired
  },

  renderCards () {
    return this.props.cards.map((card) => {
      return (<Card suite={ card.suite } face={ card.face } shown={ card.shown } />)
    })
  },

  render () {
    let cards = this.renderCards()

    return (
      <div className='card-area'>
        <div className="title">
          { this.props.title }
        </div>
        { cards }
      </div>
    )
  }
})

export default CardArea
