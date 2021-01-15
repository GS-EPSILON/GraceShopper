import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => (
  <div>
    <nav>
      <Link to="/products">
        <h1>SPACEPLACE</h1>
      </Link>
      <Link to="/products">Shop</Link>
      <span>
        <Link to="/user">User</Link>
        <Link to="/cart">Cart</Link>
      </span>
    </nav>
    <hr />
  </div>
)

export default Navbar
