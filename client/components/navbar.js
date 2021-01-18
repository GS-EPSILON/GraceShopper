import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100)
    })
  }, [])

  return (
    <nav className={scroll ? 'scroll' : ''}>
      <div>
        <Link to="/products">
          <h1>SPACE PLACE</h1>
        </Link>
        <span>
          <Link className="nav-link" to="/products">
            Shop
          </Link>
          <Link className="nav-link" to="/user">
            User
          </Link>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
