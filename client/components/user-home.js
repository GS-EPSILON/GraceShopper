import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect, useDispatch} from 'react-redux'
import {Login, Signup} from './auth-form'
import {logout} from '../store/user'

export const UserHome = props => {
  const [status, setStatus] = useState('logged out')
  const dispatch = useDispatch()
  const {email, isLoggedIn} = props

  return isLoggedIn === true ? (
    <div>
      <h3>Welcome, {email}</h3>
      <a onClick={() => dispatch(logout())}>Log Out</a>
    </div>
  ) : status === 'logged out' ? (
    <div>
      <h1>Log In</h1>
      <Login />
      <a onClick={() => setStatus('sign up')}>Sign Up</a>
    </div>
  ) : (
    <div>
      <h1>Sign Up</h1>
      <Signup />
      <div>
        <a onClick={() => setStatus('logged out')}>Log in</a>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
