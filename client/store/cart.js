import axios from 'axios'

//action types

const GET_CART = 'GET_CART'

//action creator

const getCart = cart => ({
  type: GET_CART,
  cart
})

export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/cart/api')
      console.log('data --> ', data)
      dispatch(getCart(data))
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
