import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../store/products'
import Landing from './landing'
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
      <React.Fragment>
        <Landing />
        <div id="products-container">
          <div className="product-container">
            <h3>Vehicles</h3>
            <div>
              {products.map(product => {
                if (product.category === 'vehicle')
                  return (
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
                  )
              })}
            </div>
          </div>
          <div className="product-container">
            <h3>Apparel</h3>
            <div>
              {products.map(product => {
                if (product.category === 'apparel')
                  return (
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
                  )
              })}
            </div>
          </div>

          <div className="product-container">
            <h3>Services</h3>
            <div>
              {products.map(product => {
                if (product.category === 'service')
                  return (
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
                  )
              })}
            </div>
          </div>

          <div className="product-container">
            <h3>Swag</h3>
            <div>
              {products.map(product => {
                if (product.category === 'misc')
                  return (
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
                  )
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
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
