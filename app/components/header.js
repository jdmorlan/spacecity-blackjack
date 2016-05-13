import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import SpaceCityLogo from './spaceCityLogo'

const Header = React.createClass({
  render () {
    return (
      <header>
        <SpaceCityLogo />
        <Link to='/'>
          <h1>Spacecity Blackjack</h1>
        </Link>
      </header>
    )
  }
})

export default Header
