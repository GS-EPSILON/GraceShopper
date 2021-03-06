import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect, useDispatch} from 'react-redux'
import {fetchCart} from '../store/cart'
import '../css/navbar.css'

const Navbar = props => {
  const [scroll, setScroll] = useState(false)
  const {isAdmin} = props
  const dispatch = useDispatch()
  let totalQty = 0
  if (props.cart.items) {
    totalQty = props.cart.items.reduce((acc, elem) => {
      if (elem.qty) {
        return acc + elem.qty
      } else if (elem.orders_products)
        return acc + elem.orders_products.quantity
      else {
        return 0
      }
    }, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 200)
    })
    dispatch(fetchCart())
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
        <Link to="/">
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
            <h2>CART{!props.cart.items ? <></> : `(${totalQty})`}</h2>
          </Link>
        </span>
      </div>
    </nav>
  )
}

const mapState = state => {
  return {
    isAdmin: !!state.user.isAdmin,
    cart: state.cart
  }
}

export default connect(mapState)(Navbar)
