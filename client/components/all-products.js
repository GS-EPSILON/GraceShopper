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
      <React.Fragment>
        <div id="products-container-container">
          <div id="products-container">
            <div className="product-container">
              <h2>Vehicles</h2>
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
              <h2>Apparel</h2>
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
              <h2>Services</h2>
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
              <h2>Swag</h2>
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
