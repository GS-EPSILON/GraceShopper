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

router.put('/', (req, res, next) => {
  try {
    const cart = req.session.cart
    const item = req.body.item
    const qty = req.body.qty
    if (Cart.editCartItemQty(item, qty, cart)) {
      res.status(200).redirect('/')
    } else {
      res.status(401).send('Invalid quantity')
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:itemId', async (req, res, next) => {
  try {
    const cart = req.session.cart
    const item = await Product.findByPk(req.params.itemId)

    if (Cart.removeCartItem(item, cart)) {
      res.status(204).redirect('/')
    } else {
      res.status(404).send('No item found')
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
