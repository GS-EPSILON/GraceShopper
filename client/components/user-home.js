import React, {useState} from 'react'
import {Login, Signup} from './auth-form'
import UserCard from './UserCard'
import '../css/user-home.css'

export const UserHome = props => {
  const [status, setStatus] = useState('logged out')
  const {isLoggedIn} = props

  return (
    <div id="user-home">
      <div id="user-container">
        {isLoggedIn === true ? (
          <UserCard />
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
