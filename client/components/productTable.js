import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {updateProduct} from '../store/singleProduct'
import {fetchProducts} from '../store/products'
import '../css/productTable.css'
import AddProduct from './add-product'
import ProductRow from './product-row'

export class ProductTable extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   defaultState: {
    //     id: 0,
    //     name: '',
    //     price: 0.0,
    //     description: '',
    //     imageURL: '',
    //     quantity: 0,
    //   },
    //   updateProduct: {},
    // }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   console.log('Event.target: => ', event.target)
  //   this.props.updateProduct(this.state)
  // }

  // handleChange(event) {
  //   this.setState({[event.target.name]: event.target.value})
  // }

  componentDidMount() {
    try {
      this.props.fetchProducts()
    } catch (error) {
      console.error()
    }
  }

  render() {
    // const {name, price, description, imageURL, quantity} = this.state
    const {handleSubmit, handleChange} = this
    const {products} = this.props
    return (
      <div className="productTable">
        <div className="addProductRow">
          <AddProduct />
        </div>

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
