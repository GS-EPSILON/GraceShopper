import React from 'react'
import {connect} from 'react-redux'
import '../css/productTable.css'

export class UserRow extends React.Component {
  render() {
    return (
      <div className="productRow">
        <table>
          <tbody>
            <tr>
              <td>{this.props.user.email}</td>
              <td>{this.props.user.imageURL}</td>
              <td>{this.props.user.isAdmin.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserRow
