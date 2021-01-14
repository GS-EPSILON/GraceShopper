import React from 'react'
import {connect} from 'react-redux'
import {deleteCartItem, editCartQty} from '../store/cart'

const SingleCartItem = props => {
  const {item, handleDelete, handleQtyChange} = props
  return (
    <div className="single-cart-item">
      <h1>{item.name}</h1>
      <h3>{item.price}</h3>
      <img src={item.imageUrl} />
      <button type="button" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
      <label htmlFor="qty" />
      <input
        type="number"
        name="qty"
        value={`${item.qty}`}
        onChange={event => handleQtyChange(event, item)}
      />
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
