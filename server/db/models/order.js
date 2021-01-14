const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  userId: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true
    }
  },
  status: {
    type: Sequelize.ENUM,
    values: ['complete', 'inProgress']
  },
  totalPrice: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Order
