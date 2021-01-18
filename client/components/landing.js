import React, {useEffect, useState} from 'react'
import Parallax from 'react-rellax'
import {DimStarsTall, StarsTall, Orbit, Moon, Planet} from './SVG'
import AllProducts from './all-products'
import '../css/landing.css'

const Landing = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    // Sets scroll state to true when user has scroll more than 300px. Used to hide the orbit+planet
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 300)
    })
    // Sets the scroll position to top when user reloads
    window.onbeforeunload = function() {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Parallax speed={-6} zIndex={0}>
        <div id="intro">
          <h1>SPACE PLACE</h1>
          <p>Get you some stuff for your place, from space!</p>
          <div id="intro-buttons">
            <button className="button-negative" type="button">
              Log In
            </button>
            <button type="button">Sign Up</button>
          </div>
        </div>
      </Parallax>

      <Parallax speed={-8} zIndex={-4}>
        <StarsTall />
      </Parallax>
      <Parallax speed={-10} zIndex={-4}>
        <DimStarsTall />
      </Parallax>

      {scroll ? (
        <></>
      ) : (
        <>
          <Orbit />
          <div id="orbit-moon">
            <Moon />
            <div id="horizontal-moons">
              <Moon />
              <Moon />
            </div>
            <Moon />
          </div>
        </>
      )}

      <Parallax speed={-1} zIndex={-5}>
        <Planet />
      </Parallax>

      <div id="landing-products">
        <Parallax speed={2}>
          <AllProducts />
        </Parallax>
        <h1
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          Back to top 🚀
        </h1>
      </div>
    </>
  )
}

export default Landing
