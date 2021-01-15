import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../store/products'
import '../css/all-products.css'

export class AllProducts extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchProducts()
    } catch (error) {
      console.error()
    }
  }

  render() {
    const {products} = this.props

    return (
      <div id="products-container">
        {products.map(product => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product"
          >
            <img src={product.imageURL} alt={`${product.name}`} />
            <div>
              {product.name} – ${product.price / 100}
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
