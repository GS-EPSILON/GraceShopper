import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../store/products'

export class AllProducts extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchProducts()
    } catch (error) {
      console.error()
    }
  }

  render() {
    console.log('Props: ', this.props)
    const {products} = this.props
    console.log('State: ', this.state)
    return (
      <div>
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageURL} alt={`${product.name}`} />
            <h2>{product.price}</h2>
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
