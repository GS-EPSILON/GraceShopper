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
      <div id="cart-container-container">
        <div id="cart-container">
          <h1>Your Cart</h1>
          <div className="cart">
            {cart.items ? (
              <div id="cart-product-container">
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
            <div id="button-container">
              <Link to="/checkout">
                <button type="button">
                  <h3>Checkout</h3>
                </button>
              </Link>
            </div>
          </div>
        </div>
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
