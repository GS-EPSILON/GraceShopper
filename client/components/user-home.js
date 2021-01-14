import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect, useDispatch} from 'react-redux'
import {Login, Signup} from './auth-form'
import {logout} from '../store/user'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const [status, setStatus] = useState('logged out')
  const dispatch = useDispatch()
  const {email, isLoggedIn} = props
  // if (email) setStatus('logged in')

  useEffect(
    () => {
      if (email) setStatus('logged in')
    },
    [email]
  )

  console.log(`status: ${status}, email: ${email}`)
  console.log('props > ', props)
  console.log('isLoggedIn: >', isLoggedIn)
  // console.log('props > ', props)

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
      <a onClick={() => setStatus('logged out')}>Log In</a>
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
