import axios from 'axios'

//action types
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

//action creators
export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

//thunks
export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(product))
    } catch (error) {
      console.error(error)
    }
  }
}

const initalState = {}

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}

export default singleProductReducer
