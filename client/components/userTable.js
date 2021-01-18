import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import UserRow from './user-row'
import {fetchUsers} from '../store/users'
import '../css/productTable.css'

export class UserTable extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchUsers()
    } catch (error) {
      console.error()
    }
  }

  render() {
    const {users} = this.props
    console.log('Props: ==> ', this.props)
    return (
      <div className="productTable">
        <div className="headerCell">
          <table>
            <tbody>
              <tr>
                <td>User Email:</td>
                <td>User ImageURL:</td>
                <td>Admin:</td>
              </tr>
            </tbody>
          </table>
        </div>
        {users.map(user => <UserRow key={user.id} user={user} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserTable)
