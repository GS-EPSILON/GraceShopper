import axios from 'axios'

// ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
// const ADD_PRODUCT = 'ADD_PRODUCT'
// const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// ACTION CREATORS
export const getProducts = products => ({type: GET_PRODUCTS, products})
// const addProduct = (product) => ({type: ADD_PRODUCT, product})
// const updateProduct = (product) => ({type: UPDATE_PRODUCT, product})
// const removeProduct = () => ({type: REMOVE_PRODUCT})

// THUNK CREATORS
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      console.log('INSIDE THUNK: -------> ', products)
      dispatch(getProducts(products))
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
