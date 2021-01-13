import React from 'react'

const SingleCartItem = props => {
  const {item} = props
  return (
    <div className="single-cart-item">
      <h1>{item.name}</h1>
      <h3>{item.price}</h3>
      <img src={item.imageUrl} />
    </div>
  )
}

export default SingleCartItem
