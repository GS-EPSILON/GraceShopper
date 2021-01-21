import axios from 'axios'

//action types
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

//action creators
export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

export const _updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
})

//thunks
export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const updateProduct = (id, newProduct) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/products/${id}`, newProduct)
      dispatch(_updateProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {}

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return {...action.product}
    default:
      return state
  }
}

export default singleProductReducer
