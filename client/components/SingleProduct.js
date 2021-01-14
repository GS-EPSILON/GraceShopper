import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchSingleProduct} from '../store/singleProduct'
import {pushToCart} from '../store/cart'

class SingleProduct extends Component {
  constructor() {
    super()

    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.productId)
    } catch (error) {
      console.error(error)
    }
  }

  addToCart() {
    //logic to add the product to cart when 'add to cart' button is clicked
  }

  render() {
    const {product} = this.props
    // const qtyLength = product.quantity++
    const qtyArray = [...Array(product.quantity).keys()]
    return (
      <div>
        <div className="single-product">
          <div>
            <h1>{product.name}</h1>
          </div>
          <img src={product.imageURL} />
          <h4>Bitcoin (use Bitcoin symbol): {product.price}</h4>
          <p>Available: {product.quantity}</p>
          <div>
            <span>Qty:</span>
            <select>
              {qtyArray.map(qty => {
                return <option key={qty.id}> {qty + 1} </option>
              })}
            </select>
          </div>
        </div>
        <button type="button" onClick={() => this.props.pushToCart(product.id)}>
          Add To Cart
        </button>
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
