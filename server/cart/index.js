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
    const qty = parseInt(req.body.qty, 10)

    await Cart.addToCart(item, qty, cart)
    res.status(201).send(item)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const cart = req.session.cart
    const item = req.body.item
    const qty = parseInt(req.body.qty, 10)
    if (await Cart.editCartItemQty(item, qty, cart)) {
      res.status(200).end()
    } else {
      res.status(401).send('Invalid quantity')
    }
  } catch (error) {
    next(error)
  }
})

router.put('/checkout', async (req, res, next) => {
  try {
    const cart = req.body.cart
    Cart.checkoutOrder(cart)
    req.session.cart = cart
    res.status(200).end()
  } catch (error) {
    next(error)
  }
})

router.delete('/:itemId', async (req, res, next) => {
  try {
    const cart = req.session.cart
    const item = await Product.findByPk(req.params.itemId)

    if (await Cart.removeCartItem(item, cart)) {
      res.status(204).end()
    } else {
      res.status(404).send('No item found')
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
