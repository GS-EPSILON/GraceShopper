'use strict'

const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')
const {usersSeed, productsSeed, ordersSeed} = require('./seedData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await User.bulkCreate(usersSeed)
  const products = await Product.bulkCreate(productsSeed)
  const orders = await Order.bulkCreate(ordersSeed)

  // Randomly assign products to orders
  for (let j = 0; j < orders.length; j++) {
    for (let i = 1; i < 3 + Math.floor(Math.random() * 10); i++) {
      let rando = Math.floor(Math.random() * products.length)
      await orders[j].addProduct(products[rando])
    }
  }

  console.log(
    `seeded ${users.length} users, ${products.length} products, orders: ${
      orders.length
    }`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
