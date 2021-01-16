import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => (
  <div>
    <nav>
      <Link to="/products">
        <h1>SPACEPLACE</h1>
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
    </nav>
  </div>
)

export default Navbar
