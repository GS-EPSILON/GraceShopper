const {Order, OrderProduct} = require('../db/models')

class Cart {
  static async addToCart(item, qty, cart) {
    //the this context refers to the class Cart itself, we're calling its own function
    if (!this.inCart(item, cart)) {
      let cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        qty: qty || 1,
        imageUrl: item.imageURL
      }
      cart.items.push(cartItem)
      if (cart.id) {
        const orderToUpdate = await Order.findOne({where: {id: cart.id}})
        await orderToUpdate.addProduct(item.id, {
          through: {
            quantity: qty,
            priceAtPurchase: item.price
          }
        })
        orderToUpdate.totalPrice += item.price * qty
        await orderToUpdate.save()
      }
    } else {
      item.qty += qty

      if (cart.id) {
        //updates through table
        const orderProductToUpdate = await OrderProduct.findOne({
          where: {orderId: cart.id, productId: item.id}
        })
        orderProductToUpdate.quantity += qty
        orderProductToUpdate.priceAtPurchase += item.price * qty
        await orderProductToUpdate.save()

        //updates Orders table, specifically
        const orderToUpdate = await Order.findOne({where: {id: cart.id}})
        orderToUpdate.totalPrice += item.price * qty
        await orderToUpdate.save()
      }
    }
  }

  static inCart(item, cart) {
    let found = false
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].id === item.id) {
        found = true
      }
    }
    return found
  }

  static async removeCartItem(item, cart) {
    let deleted = false
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].id === item.id) {
        const [deletedItem] = cart.items.splice(i, 1)
        if (cart.id) {
          const orderToUpdate = await Order.findOne({where: {id: cart.id}})
          await orderToUpdate.removeProduct(deletedItem.id)
          orderToUpdate.totalPrice -=
            parseInt(deletedItem.price, 10) *
            deletedItem.orders_products.quantity
          await orderToUpdate.save()
        }
        deleted = true
      }
    }
    return deleted
  }

  static editCartItemQty(item, qty, cart) {
    let edited = false
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].qty !== qty) {
        edited = true
      }
    }
    return edited
  }

  static clearCart(cart) {
    cart.items = []
    cart.totalPrice = 0.0
  }
}

module.exports = Cart
