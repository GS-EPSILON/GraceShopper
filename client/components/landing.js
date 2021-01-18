import React from 'react'
import Parallax from 'react-rellax'
import {DimStars, Stars, Orbit, Moon, Planet} from './SVG'
import AllProducts from './all-products'
import '../css/landing.css'

const Landing = () => {
  return (
    <>
      <div id="landing-page">
        <div id="landing">
          <h1>SPACE PLACE</h1>
          <p>Get you some stuff for your place, from space!</p>
          <div id="landing-buttons">
            <button className="button-negative" type="button">
              Log In
            </button>
            <button type="button">Sign Up</button>
          </div>
        </div>
        <AllProducts />
      </div>

      <DimStars />
      {/* <Parallax speed={-2} zIndex={-4}> */}
      <Stars />
      {/* </Parallax> */}

      {/* <Parallax speed={2} zIndex={-10}>
        <Orbit />
        <div id="orbit-moon">
        <Moon />
        <div id="horizontal-moons">
          <Moon />
          <Moon />
        </div>
        <Moon />
      </div>
      </Parallax> */}
      <Parallax speed={5} zIndex={5}>
        <Planet />
      </Parallax>
    </>
  )
}

export default Landing
