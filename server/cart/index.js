const router = require('express').Router()
const {Product} = require('../db/models/')
const Cart = require('./cart')

router.get('/api/', (req, res, next) => {
  const cart = req.session.cart
  res.status(200).send(cart)
})

router.post('/', async (req, res, next) => {
  try {
    const cart = req.session.cart
    const item = await Product.findByPk(req.body.itemId)
    const qty = req.body.qty

    Cart.addToCart(item, qty, cart)
    res.status(201).send(item)
  } catch (error) {
    next(error)
  }
})

router.delete('/remove/:itemId', (req, res, next) => {
  try {
    const cart = req.session.cart
    if (Cart.removeCartItem(req.params.itemId, cart)) {
      res.status(204).redirect('/')
    } else {
      res.status(404).send('No item found')
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
