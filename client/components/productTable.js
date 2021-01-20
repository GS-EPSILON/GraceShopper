import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {updateProduct} from '../store/singleProduct'
import {fetchProducts} from '../store/products'
import '../css/productTable.css'
import AddProduct from './add-product'
import ProductRow from './product-row'

export class ProductTable extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchProducts()
    } catch (error) {
      console.error()
    }
  }

  render() {
    const {handleSubmit, handleChange} = this
    const {products} = this.props
    return (
      <div className="productTable">
        <AddProduct />

        {products.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  product: state.updateProduct
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  updateProduct: product => dispatch(updateProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)
