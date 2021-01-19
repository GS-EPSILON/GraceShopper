import React from 'react'
import {connect} from 'react-redux'
import {ShippingForm} from './shipping-form'
import {fetchCart} from '../store/cart'

export class Checkout extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchCart()
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {cart} = this.props
    console.log('CART>>>>>', cart)
    return (
      <div className="checkout-container mt-4">
        <ShippingForm />
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

export default connect(mapState, mapDispatch)(Checkout)
