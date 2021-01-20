import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addProduct} from '../store/products'
import {toast} from 'react-toastify'
import '../css/add-product.css'

class AddProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      category: '',
      price: 0.0,
      description: '',
      imageURL: '',
      quantity: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.addProduct({...this.state})
    toast.success(`Added ${this.state.name}`, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
    this.setState({
      name: '',
      category: '',
      price: 0.0,
      description: '',
      imageURL: '',
      quantity: 0
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {name, category, price, description, imageURL, quantity} = this.state
    const {handleSubmit, handleChange} = this
    console.log('State ==> ', this.state)
    return (
      <>
        <div className="product-header">
          <div className="headerCell">
            <label htmlFor="name">Product Name:</label>
          </div>

          <div className="headerCell">
            <label htmlFor="category">Product Category:</label>
          </div>

          <div className="headerCell">
            <label htmlFor="price">Product Price:</label>
          </div>

          <div className="headerCell">
            <label htmlFor="description">Product Description:</label>
          </div>

          <div className="headerCell">
            <label htmlFor="imageURL">Product Image:</label>
          </div>

          <div className="headerCell">
            <label htmlFor="quantity">Product Quantity:</label>
          </div>
        </div>
        <div className="productRow">
          <form onSubmit={handleSubmit}>
            <div className="inputCell">
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={name}
                placeholder="Name"
                required
              />
            </div>

            <div className="inputCell">
              <input
                name="category"
                type="text"
                onChange={handleChange}
                value={category}
                placeholder="Category"
                required
              />
            </div>

            <div className="inputCell">
              <input
                name="price"
                type="decimal"
                onChange={handleChange}
                value={price}
                placeholder="Price"
                required
              />
            </div>

            <div className="inputCell">
              <input
                name="description"
                type="text"
                onChange={handleChange}
                value={description}
                placeholder="Description"
                required
              />
            </div>

            <div className="inputCell">
              <input
                name="imageURL"
                type="url"
                onChange={handleChange}
                value={imageURL}
                placeholder="Image URL"
                required
              />
            </div>

            <div className="inputCell">
              <input
                name="quantity"
                type="number"
                min="0"
                onChange={handleChange}
                value={quantity}
                placeholder="Quantity"
                required
              />
            </div>

            <div className="submitCell">
              <button type="submit" className="green">
                Add
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  product: state.addProduct
})

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
