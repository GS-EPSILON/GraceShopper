import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {pushToCart} from '../store/cart'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../css/SingleProduct.css'

class SingleProduct extends Component {
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
      <div id="single-product-container">
        <div id="single-product">
          <img src={product.imageURL} />
          <div id="product-details">
            <h2 id="product-h2">{product.name}</h2>
            <div id="product-p">{product.description}</div>
            <div id="purchase">
              <div id="price">
                <div>BTC: {product.price}</div>
                {product.quantity ? (
                  <div>
                    <div>Available: {product.quantity}</div>
                  </div>
                ) : (
                  <div>
                    <div>Out of Stock!</div>
                  </div>
                )}
              </div>
              {product.quantity ? (
                <div id="add-to-cart">
                  <div id="qty">
                    <span>Qty:</span>
                    <select id="qtyValue">
                      {qtyArray.map(qty => {
                        return <option key={qty}>{qty + 1}</option>
                      })}
                    </select>
                  </div>
                  <button
                    type="button"
                    id="cart-button"
                    onClick={() => {
                      toast(`Added ${product.name} to Cart`, {
                        position: toast.POSITION.BOTTOM_RIGHT
                      })
                      const selectQty = document.getElementById('qtyValue')
                      let qty = selectQty ? selectQty.value : 1
                      this.props.pushToCart(product.id, qty)
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              ) : (
                <button type="button" id="cart-button" disabled>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
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
