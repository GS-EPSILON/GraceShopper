import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../css/navbar.css'

const Navbar = props => {
  const [scroll, setScroll] = useState(false)
  const {isAdmin} = props
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 200)
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav className={scroll ? 'scroll' : ''}>
      <div onClick={handleClick}>
        <Link to="/products">
          <h1>SPACE PLACE</h1>
        </Link>
        <span id="nav-span">
          <Link className="nav-link" to="/products">
            <h2>SHOP</h2>
          </Link>
          {!isAdmin ? (
            <></>
          ) : (
            <Link className="nav-link" to="/admin">
              <h2>ADMIN</h2>
            </Link>
          )}
          <Link className="nav-link" to="/user">
            <h2>USER</h2>
          </Link>
          <Link className="nav-link" to="/cart">
            <h2>CART</h2>
          </Link>
        </span>
      </div>
    </nav>
  )
}

const mapState = state => {
  return {
    isAdmin: !!state.user.isAdmin
  }
}

export default connect(mapState)(Navbar)
