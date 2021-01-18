import React from 'react'
import '../css/landing.css'

const Landing = () => {
  return (
    <React.Fragment>
      <div id="landing">
        <div id="landing-container">
          <h1>Space Place</h1>
          <p>Get you some stuff for your place, from space!</p>
          <div id="landing-buttons">
            <button className="button-negative" type="button">
              Log In
            </button>
            <button type="button">Sign Up</button>
          </div>
        </div>
      </div>
      <img
        id="orbit1"
        src="https://assets.website-files.com/5c6c5d537c647f619adce5fc/5c6d09d207ffea248fd4dbb9_Orbit%20path-01.png"
      />
      <img
        id="orbit2"
        src="https://assets.website-files.com/5c6c5d537c647f619adce5fc/5c6d09d207ffea248fd4dbb9_Orbit%20path-01.png"
      />
      <img
        id="planets"
        src="https://assets.website-files.com/5c6c5d537c647f619adce5fc/5c6d0a64d51c77998e87c7de_far%20planets-01.png"
      />
      <img
        id="planets2"
        src="https://assets.website-files.com/5c6c5d537c647f619adce5fc/5c6d0a58af4da33ed7be0cce_close%20planets-01.png"
      />
    </React.Fragment>
  )
}

export default Landing
