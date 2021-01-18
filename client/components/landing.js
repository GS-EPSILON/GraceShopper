import React from 'react'
import '../css/landing.css'
import {DimStars, Stars, Orbit, Moon, Planet} from './SVG'

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

      <DimStars />
      <Stars />
      <Orbit />
      <div id="orbit-moon">
        <Moon />
        <div id="horizontal-moons">
          <Moon />
          <Moon />
        </div>
        <Moon />
      </div>
      <Planet />
    </React.Fragment>
  )
}

export default Landing
