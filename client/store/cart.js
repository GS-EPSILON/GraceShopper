import axios from 'axios'

//action types

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

//action creator

//GET CART
const getCart = cart => ({
  type: GET_CART,
  cart
})

export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/cart/api')
      dispatch(getCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//POST TO CART

export const pushToCart = (itemId, qty) => {
  return async dispatch => {
    try {
      await axios.post('/cart', {itemId, qty})
      dispatch(fetchCart())
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {}

//reducer

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {...action.cart}
    case ADD_TO_CART:
      return {...action.cart, items: {...action.item}}
    default:
      return state
  }
}

export default cartReducer
