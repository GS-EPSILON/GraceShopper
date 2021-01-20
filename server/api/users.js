const router = require('express').Router()
const {User, Order, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: {exclude: ['password', 'salt']}
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// Get information of a specific user. Include eager loaded orders and products!
router.get('/:userId', async (req, res, next) => {
  try {
    // const user = await User.findOne({
    //   // explicitly select only the id and email fields - even though
    //   // users' passwords are encrypted, it won't help if we just
    //   // send everything to anyone who asks!
    //   attributes: {exclude: ['password', 'salt']},
    //   where: {id: req.params.userId},
    //   include: [
    //     {
    //       model: Order,
    //       include: [
    //         {
    //           model: Product
    //         }
    //       ]
    //     }
    //   ]
    // })
    let orders = await Order.findAll({
      where: {userId: req.params.userId, status: 'complete'},
      include: [{model: Product}]
    })

    res.json(orders)
  } catch (err) {
    next(err)
  }
})
