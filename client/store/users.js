import axios from 'axios'

const GET_USERS = 'GET_USERS'

const getAllUsers = users => ({type: GET_USERS, users})

export const fetchUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(getAllUsers(data))
  } catch (error) {
    console.error(error)
  }
}

const users = []

export default function(state = users, action) {
  switch (action.type) {
    case GET_USERS:
      return [...action.users]
    default:
      return state
  }
}
