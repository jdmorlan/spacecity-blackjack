import React, { PropTypes } from 'react'

const CardFront = React.createClass({
  propTypes: {
    suite: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired
  },

  renderLogo() {
    const logoNames = {
      A: 'devicon-angularjs-plain',
      B: 'devicon-react-plain',
      C: 'devicon-meteor-plain',
      D: 'devicon-javascript-plain'
    }

    let logoName = logoNames[this.props.suite]
    return (<i className={ logoName }></i>)
  },

  render () {
    const { suit, face } = this.props

    return (
      <div className="card front">
        <div className="card-header">{ face }</div>
        <div className="card-body">
          { this.renderLogo() }
        </div>
        <div className="card-footer">{ face }</div>
      </div>
    )
  }
})

export default CardFront
