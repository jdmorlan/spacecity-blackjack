import React, { PropTypes } from 'react'

const ActionBar = React.createClass({
  render () {
    return (
      <div className="action-bar">
        <div className="actions">
          <span className="card-count">{ this.props.cardCount }</span>
          <button className="btn" disabled={ this.props.canDraw }
                  onClick={ this.props.hit }>Hit</button>

          <button className="btn" disabled={ this.props.canDraw }
                  onClick={ this.props.stay}>Stay</button>
        </div>
      </div>
    )
  }
})

export default ActionBar
