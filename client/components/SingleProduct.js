import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchSingleProduct} from '../store/singleProduct'
import {pushToCart} from '../store/cart'

class SingleProduct extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.productId)
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const {product} = this.props
    const qtyArray = [...Array(product.quantity).keys()]

    return (
      <div>
        <div className="single-product">
          <div>
            <h1>{product.name}</h1>
          </div>
          <img src={product.imageURL} />
          <h4>Bitcoin (use Bitcoin symbol): {product.price}</h4>

          {product.quantity ? (
            <div>
              <p>Available: {product.quantity}</p>
              <div>
                <span>Qty:</span>
                <select id="qtyValue">
                  {qtyArray.map(qty => {
                    return <option key={qty}>{qty + 1}</option>
                  })}
                </select>
              </div>
              <button
                type="button"
                onClick={() => {
                  const selectQty = document.getElementById('qtyValue')
                  let qty = selectQty ? selectQty.value : 1
                  this.props.pushToCart(product.id, qty)
                }}
              >
                Add To Cart
              </button>
            </div>
          ) : (
            <div>
              <h1>Out of Stock!</h1>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.singleProduct
})

const mapDispatchToProps = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
  pushToCart: (id, qty) => dispatch(pushToCart(id, qty))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
