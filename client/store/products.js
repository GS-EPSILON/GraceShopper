import axios from 'axios'

// ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// ACTION CREATORS
export const getProducts = products => ({type: GET_PRODUCTS, products})

export const _addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

// THUNK CREATORS
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      dispatch(getProducts(products))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addProduct = product => {
  console.log('Product ==> ', product)
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/products/`, product)
      dispatch(fetchProducts())
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteProduct = productId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${productId}`)
      dispatch(fetchProducts())
    } catch (error) {
      console.error(error)
    }
  }
}

// INITIAL STATE
const initialState = []

// REDUCER
const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.products]
    default:
      return state
  }
}

export default allProductsReducer
