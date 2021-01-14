import React from 'react'
import {connect} from 'react-redux'
import {deleteCartItem} from '../store/cart'

const SingleCartItem = props => {
  const {item, handleDelete} = props
  console.log('item in single-cart-item component -->', item)
  return (
    <div className="single-cart-item">
      <h1>{item.name}</h1>
      <h3>{item.price}</h3>
      <img src={item.imageUrl} />
      <button type="button" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  )
}

const mapDispatch = dispatch => ({
  handleDelete: itemId => dispatch(deleteCartItem(itemId))
})

export default connect(null, mapDispatch)(SingleCartItem)
