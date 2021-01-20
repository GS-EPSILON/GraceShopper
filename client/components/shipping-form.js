import React, {useState} from 'react'

export const ShippingForm = props => {
  const {handleSubmit, cart} = props
  const [checkout, setCheckout] = useState(false)
  const onCheckout = () => {
    handleSubmit(cart)
    setCheckout(true)
  }
  return !checkout ? (
    <div className="shipping-form">
      <div id="box-container-container">
        <h1>Checkout</h1>
        <div id="box-container">
          <form>
            <div className="box">
              <h4>Shipping Adress:</h4>
              <label htmlFor="email">Email:</label>
              <input
                name="title"
                type="text"
                placeholder="Ex: jsnow@email.com"
              />
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
            <div className="box">
              <h4>Payment Method:</h4>
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
          </form>
          <div id="checkout-container">
            <div className="box">
              <h4>Total</h4>
              <div>${cart.totalPrice} </div>

              <button type="button" className="green" onClick={onCheckout}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Thank you.</h1>
      <h5>YOU'RE ORDER HAS BEEN MADE</h5>
    </div>
  )
}
