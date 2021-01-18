import React from 'react'
import AddProduct from './add-product'
import ProductTable from './productTable'
import '../css/admin.css'

const Admin = () => {
  return (
    <div className="admin-page">
      {/* <AddProduct /> */}
      <ProductTable />
    </div>
  )
}

export default Admin
