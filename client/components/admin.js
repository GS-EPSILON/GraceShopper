import React from 'react'
import ProductTable from './productTable'
import UserTable from './userTable'
import '../css/admin.css'

const Admin = () => {
  return (
    <div id="admin-page">
      <div id="table">
        <ProductTable />
        <UserTable />
      </div>
    </div>
  )
}

export default Admin
