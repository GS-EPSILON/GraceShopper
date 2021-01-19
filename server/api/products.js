const router = require('express').Router()
const {Product} = require('../db/models')
const adminsOnly = require('../utils/adminsOnly')

const checkIfUserIsAdmin = (req, res, next) => {
  if (req.user.isAdmin && req.user) {
    next()
  } else {
    const err = new Error(`DON'T HAVE ADMIN RIGHTS`)
    err.status = 401
    next(err)
  }
  // console.log('REQ.USER.ADMIN > ', req.user.isAdmin)
}

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products.sort((a, b) => a.id - b.id))
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// ADD PRODUCT
router.post('/', adminsOnly, async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

// UPDATE PRODUCT
router.put('/:productId', adminsOnly, async (req, res, next) => {
  console.log('ProductID: => ', req.params.productId)
  console.log('NewProduct: => ', req.body)
  try {
    const product = await Product.findByPk(req.params.productId)
    await product.update(req.body)
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

// DELETE PRODUCT
router.delete('/:productId', adminsOnly, async (req, res, next) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.productId
      }
    })
    res.status(200).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router
