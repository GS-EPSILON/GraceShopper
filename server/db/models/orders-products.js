const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orders_products', {
  orderId: {
    type: Sequelize.INTEGER
  },
  productId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  priceAtPurchase: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = OrderProduct
