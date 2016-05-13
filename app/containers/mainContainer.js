import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { drawPlayerCard, calculatePlayerCardCount } from '../redux/modules/game'
import { calculatePlayerBust, createDeck } from '../redux/modules/game'

import Header from '../components/header'

const MainContainer = React.createClass({
  propTypes: {
    children: PropTypes.object.isRequired
  },

  render () {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    )
  }
})

export default connect()(MainContainer)
