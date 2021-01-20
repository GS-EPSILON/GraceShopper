import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchUsers} from '../store/users'
import '../css/userTable.css'

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
      <div id="userTable">
        <table>
          <tbody>
            <tr id="userTable-header">
              <td>User Email:</td>
              <td>User ImageURL:</td>
              <td>Admin:</td>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.imgUrl}</td>
                <td>{user.isAdmin.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
