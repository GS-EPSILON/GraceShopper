import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect, useDispatch} from 'react-redux'
import {Login, Signup} from './auth-form'
import {logout} from '../store/user'
import '../css/user-home.css'

export const UserHome = props => {
  const [status, setStatus] = useState('logged out')
  const dispatch = useDispatch()
  const {email, isLoggedIn} = props

  return (
    <div id="user-home">
      <div id="user-container">
        {isLoggedIn === true ? (
          <>
            <h3>Welcome, {email}</h3>
            <a onClick={() => dispatch(logout())}>Log Out</a>
          </>
        ) : status === 'logged out' ? (
          <>
            <h1>Log In</h1>
            <Login />
            <div className="extra">
              Want some sweet space deals?
              <a onClick={() => setStatus('sign up')}> Sign Up</a>
            </div>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <Signup />
            <>
              <div className="extra">
                Already have an account?
                <a onClick={() => setStatus('logged out')}> Log in</a>
              </div>
            </>
          </>
        )}
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
