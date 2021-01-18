import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../css/navbar.css'

const Navbar = props => {
  const {isAdmin} = props
  return (
    <div>
      <h1>SPACEPLACE</h1>
      <nav>
        <Link to="/products">Products</Link>
        <span>
          {!isAdmin ? <></> : <Link to="/admin">Admin</Link>}
          <Link to="/user">User</Link>
          <Link to="/cart">Cart</Link>
        </span>
      </nav>
      <hr />
    </div>
  )
}

const mapState = state => {
  return {
    isAdmin: !!state.user.isAdmin
  }
}

export default connect(mapState)(Navbar)
