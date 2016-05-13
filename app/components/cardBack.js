import React, { PropTypes } from 'react'

import SpaceCityLogo from './spaceCityLogo'

const CardBack = React.createClass({
  render () {
    return (
      <div className="card back">
        <div className="card-body">
          <SpaceCityLogo />
        </div>
      </div>
    )
  }
})

export default CardBack
