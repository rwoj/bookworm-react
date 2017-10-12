import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'

const DashbordPage = ({isConfirmed})=>(
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
  </div>
)

DashbordPage.propTypes={
  isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return{
    isConfirmed: state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashbordPage)
