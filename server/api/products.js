const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
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
router.post('/:productId', async (req, res, next) => {
  try {
    const product = await Product.create(req.body.product)
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

// UPDATE PRODUCT
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    await product.update(req.body.newProduct)
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

// DELETE PRODUCT
router.delete('/:productId', async (req, res, next) => {
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
