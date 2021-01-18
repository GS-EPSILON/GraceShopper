import React from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../store/singleProduct'
import '../css/productTable.css'
import {deleteProduct} from '../store/products'

export class ProductRow extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: props.product.name,
      category: props.product.category,
      price: props.product.price,
      description: props.product.description,
      imageURL: props.product.imageURL,
      quantity: props.product.quantity
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateProduct(this.props.product.id, this.state)
  }

  render() {
    return (
      <div className="productRow">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            name="imageURL"
            value={this.state.imageURL}
            onChange={this.handleChange}
          />
          <input
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button type="submit">Update</button>
          <button
            type="button"
            onClick={() => this.props.deleteProduct(this.props.product.id)}
          >
            Delete
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateProduct: (productId, product) =>
    dispatch(updateProduct(productId, product)),
  deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(null, mapDispatchToProps)(ProductRow)
