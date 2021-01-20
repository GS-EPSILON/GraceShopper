import React from 'react'
import {connect} from 'react-redux'
import {deleteCartItem, editCartQty} from '../store/cart'
import '../css/Cart.css'

const SingleCartItem = props => {
  const {item, handleDelete, handleQtyChange} = props
  return (
    <div key={item.id} id="cart-product">
      <img src={item.imageURL} />
      <div id="cart-product-description">
        <h4>{item.name}</h4>
        <div id="cart-product-description-qty">
          <label htmlFor="qty">
            <input
              type="number"
              name="qty"
              value={
                item.orders_products
                  ? `${item.orders_products.quantity}`
                  : item.qty
              }
              onChange={event => handleQtyChange(event, item)}
            />
          </label>
          <button id="red" type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      </div>
      <div id="cart-product-cost">
        <div>${item.price}</div>
        <div>
          Subtotal $
          {item.price *
            (item.orders_products
              ? `${item.orders_products.quantity}`
              : item.qty)}
        </div>
      </div>
    </div>
  )
}

const mapDispatch = dispatch => ({
  handleDelete: itemId => dispatch(deleteCartItem(itemId)),
  handleQtyChange: (event, item) => {
    event.preventDefault()
    const qty = event.target.value
    dispatch(editCartQty(item, qty))
  }
})

export default connect(null, mapDispatch)(SingleCartItem)
