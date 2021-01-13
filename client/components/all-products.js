import React from 'react'
import {connect} from '../../server/api/products'
import {Link} from 'react-router-dom'

export class AllProducts extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    try {
      this.props.loadAllProducts(this.props.match.params.products)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {products} = this.props
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageURL} alt={`${product.name}`} />
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  loadAllProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
