import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Main from '../components/main'

const MainContainer = React.createClass({
  render () {
    return (
      <Main />
    )
  }
})

export default connect()(MainContainer)
