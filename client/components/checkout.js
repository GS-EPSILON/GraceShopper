import React from 'react'
import {connect} from 'react-redux'
import {ShippingForm} from './shipping-form'
import {fetchCart, updateStatus} from '../store/cart'
import '../css/checkout.css'

export class Checkout extends React.Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    try {
      this.props.fetchCart()
    } catch (error) {
      console.error(error)
    }
  }
  handleSubmit(cart) {
    event.preventDefault()
    this.props.updateStatus(cart)
  }

  render() {
    const {cart} = this.props
    return (
      // <div className="checkout-container mt-4">
      <ShippingForm handleSubmit={this.handleSubmit} cart={cart} />
      // </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(fetchCart()),
  updateStatus: cart => dispatch(updateStatus(cart))
})

export default connect(mapState, mapDispatch)(Checkout)
