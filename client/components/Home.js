import React, {useEffect, useState} from 'react'
import Parallax from 'react-rellax'
import {DimStarsTall, StarsTall, Orbit, Moon, Planet} from './SVG'
import AllProducts from './all-products'
import '../css/Home.css'

const Home = props => {
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

  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    // Add a second state variable "height" and default it to the current window height
    const [height, setHeight] = React.useState(window.innerHeight)

    React.useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth)
        // Set the height in state as well as the width
        setHeight(window.innerHeight)
      }

      window.addEventListener('resize', handleWindowResize)
      return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    // Return both the height and width
    return {width, height}
  }

  const {width} = useViewport()

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

      {scroll || width < 1400 ? (
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

      {width < 1400 ? (
        <></>
      ) : (
        <Parallax speed={-1} zIndex={-5}>
          <Planet />
        </Parallax>
      )}

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

export default Home
