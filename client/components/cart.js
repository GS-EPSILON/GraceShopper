import React from 'react'
import {connect} from 'react-redux'
import SingleCartItem from './single-cart-item'
import {fetchCart} from '../store/cart'
import {Link} from 'react-router-dom'

//tiny change
class Cart extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchCart()
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const {cart} = this.props
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        {cart.items ? (
          <div>
            {cart.items.length > 0 ? (
              cart.items.map(item => {
                return <SingleCartItem key={item.id} item={item} />
              })
            ) : (
              <div>
                <h3>There are no items in your space cart!</h3>
              </div>
            )}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        <Link to="/checkout">
          <h3>Checkout</h3>
        </Link>
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(fetchCart())
})

export default connect(mapState, mapDispatch)(Cart)
