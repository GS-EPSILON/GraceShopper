import React, {useEffect, useState} from 'react'
import Parallax from 'react-rellax'
import {StarsDimTall, StarsTall, Orbit, Moon, Planet} from './SVG'
import AllProducts from './all-products'
import '../css/Home.css'

const Home = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    // Sets the scroll position to top when user reloads
    window.onbeforeunload = function() {
      window.scrollTo(0, 0)
    }

    // Sets scroll state to true when user has scroll more than 300px. Used to hide the orbit+planet
    const handleScroll = () => {
      setScroll(window.scrollY > 300)
    }
    // Add event listener when component mounts.
    // Remove event listener when component unmounts
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
  console.log('width > ', width)
  return (
    <>
      <Parallax speed={-6} zIndex={0}>
        <div id="welcome-container-container">
          <div id="welcome-container">
            <div id="welcome">
              <h1>SPACE PLACE</h1>
              <p>Get you some stuff for your place, from space!</p>
              <div id="welcome-buttons">
                <button className="button-negative" type="button">
                  Log In
                </button>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {width < 1200 ? (
        <></>
      ) : (
        <>
          <Parallax speed={-8}>
            <StarsTall />
          </Parallax>
          <Parallax speed={-10} zIndex={-4}>
            <StarsDimTall />
          </Parallax>
        </>
      )}

      {/* {scroll || width < 1400 ? (
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
      )} */}

      {width < 1200 ? (
        <></>
      ) : (
        <Parallax speed={-1} zIndex={-5}>
          <Planet />
        </Parallax>
      )}

      <div id="home-products">
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
