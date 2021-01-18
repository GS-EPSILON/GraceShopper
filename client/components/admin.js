import React from 'react'
import ProductTable from './productTable'
import UserTable from './userTable'
import '../css/admin.css'

const Admin = () => {
  return (
    <div className="admin-page">
      <div className="table">
        <ProductTable />
        <UserTable />
      </div>
    </div>
  )
}

export default Admin
