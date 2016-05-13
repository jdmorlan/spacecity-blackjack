import React, { PropTypes } from 'react'

import CardFront from './cardFront'
import CardBack from './cardBack'

const Card = React.createClass({
  propTypes: {
    suite: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired,
    shown: PropTypes.bool.isRequired
  },

  getDefaultProps () {
    return {
      shown: true
    }
  },

  renderCard () {
    let { face, suite } = this.props

    if (this.props.shown) {
      return (<CardFront suite={ suite } face={ face } />)
    } else {
      return (<CardBack />)
    }
  },

  render () {
    return this.renderCard()
  }
})

export default Card
