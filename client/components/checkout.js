import React from 'react'
import {connect} from 'react-redux'
import {ShippingForm} from './shipping-form'

export const Checkout = () => {
  return (
    <div className="checkout-container mt-4">
      <ShippingForm />
    </div>
  )
}

export default Checkout
