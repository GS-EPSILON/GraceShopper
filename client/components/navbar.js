import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => (
  <div>
    <h1>SPACEPLACE</h1>
    <nav>
      <Link to="/products">Products</Link>
      <span>
        <Link to="/user">User</Link>
        <Link to="/cart">Cart</Link>
      </span>
    </nav>
    <hr />
  </div>
)

export default Navbar
