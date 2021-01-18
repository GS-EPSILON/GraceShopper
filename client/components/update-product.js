import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchSingleProduct, updateProduct} from '../store/singleProduct'
import '../css/update-product.css'

class UpdateProduct extends Component {
  constructor() {
    super()
    this.state = {
      defaultState: {
        name: '',
        price: 0.0,
        description: '',
        imageURL: '',
        quantity: 0
      },
      updateProduct: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.productId)
      this.setState({updateProduct: this.state.defaultState})
    } catch (error) {
      console.error(error)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const {defaultState, updateProduct} = this.state
    const {id} = this.props.match.params
    this.props.updateProduct(updateProduct)
    this.setState({updateProduct: defaultState})
  }

  handleChange(event) {
    this.setState({
      updateProduct: {...this.state.updateProduct, [event.target.name]: value}
    })
  }

  render() {
    const {name, price, description, imageURL, quantity} = this.state
    const {handleSubmit, handleChange} = this
    console.log('State ==> ', this.state)
    return (
      <div className="productRow">
        <form onSubmit={handleSubmit}>
          <div className="inputCell">
            <input
              name="name"
              type="text"
              placeholder={name}
              onChange={handleChange}
              value={name}
            />
          </div>

          <div className="inputCell">
            <input
              name="price"
              type="decimal"
              placeholder={price}
              onChange={handleChange}
              value={price}
            />
          </div>

          <div className="inputCell">
            <input
              name="description"
              type="text"
              onChange={handleChange}
              value={description}
            />
          </div>

          <div className="inputCell">
            <input
              name="imageURL"
              type="url"
              onChange={handleChange}
              value={imageURL}
            />
          </div>

          <div className="inputCell">
            <input
              name="quantity"
              type="number"
              min="0"
              onChange={handleChange}
              value={quantity}
            />
          </div>

          <div className="submitCell">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.updateProduct
})

const mapDispatchToProps = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
  updateProduct: product => dispatch(updateProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct)
