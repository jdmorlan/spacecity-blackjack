import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import SpaceCityLogo from './spaceCityLogo'

const Header = React.createClass({
  render () {
    return (
      <header>

        <div className="logo">
          <SpaceCityLogo />
          <h1>Spacecity Blackjack</h1>
        </div>
        <div className="links">
          <a href="http://www.spacecityjs.com/">
            <SpaceCityLogo />
          </a>
          <a href="http://www.github.com/jdmorlan/spacecity-blackjack">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    )
  }
})

export default Header
