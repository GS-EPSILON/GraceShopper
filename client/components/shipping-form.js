import React, {useState} from 'react'

export const ShippingForm = props => {
  const {handleSubmit, cart} = props
  const [checkout, setCheckout] = useState(false)
  const onCheckout = () => {
    handleSubmit(cart)
    setCheckout(true)
  }
  console.log('CHECKOUT!!!!', checkout)
  return !checkout ? (
    <div className="shipping-form">
      <div className="totalPrice">
        <h1>Total Price:{cart.totalPrice} </h1>
      </div>
      <h2>Checkout</h2>
      <form>
        <div className="address">
          <h2>Shipping Adress:</h2>
          <label htmlFor="email">Email:</label>
          <input name="title" type="text" placeholder="Ex: jsnow@email.com" />
          <label htmlFor="fullName">Full Name:</label>
          <input name="fullName" type="text" placeholder="Ex: John Snow" />
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            name="streetAddress"
            type="text"
            placeholder="Ex: 123 Snow Moutain"
          />
          <label htmlFor="city">City:</label>
          <input name="city" type="text" placeholder="Ex: Snow City" />
          <label htmlFor="state">State/Province:</label>
          <input name="state" type="text" placeholder="Ex: Snow State" />
          <label htmlFor="zipcode">Zipcode:</label>
          <input name="zipcode" type="text" placeholder="Ex: 123456" />
        </div>
        <div className="payment">
          <h2>Payment Method:</h2>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            name="cardNumber"
            type="text"
            placeholder="1111 1111 1111 1111"
          />
          <label htmlFor="expiration">Expiration Date:</label>
          <input name="expiration" type="text" placeholder="MM/YY" />
          <label htmlFor="securityCode">Security Code:</label>
          <input name="securityCode" type="text" placeholder="CVC" />
        </div>
        <p>Billing address same as shipping</p>
        <button type="button" onClick={onCheckout}>
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div>
      <h1>Thank you.</h1>
      <h5>YOU'RE ORDER HAS BEEN MADE</h5>
    </div>
  )
}
