import axios from 'axios'

//action types

const GET_CART = 'GET_CART'
const UPDATE_CART_STATUS = 'UPDATE_CART_STATUS'
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
export const updateStatus = cart => {
  return async dispatch => {
    try {
      console.log('CART INSIDE THUNK!!!', cart)
      await axios.put('/cart/checkout', {cart})
      dispatch(fetchCart())
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

//EDIT CART QTY
export const editCartQty = (item, qty) => {
  return async dispatch => {
    try {
      await axios.put('/cart', {item, qty})
      dispatch(fetchCart())
    } catch (error) {
      console.error(error)
    }
  }
}

//DELETE FROM CART
export const deleteCartItem = itemId => {
  return async dispatch => {
    try {
      await axios.delete(`/cart/${itemId}`)
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
    default:
      return state
  }
}

export default cartReducer
