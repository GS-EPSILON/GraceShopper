const {Order, OrderProduct} = require('../db/models')

class Cart {
  static async addToCart(item, qty, cart) {
    //the this context refers to the class Cart itself, we're calling its own function
    try {
      if (!await this.inCart(item, cart)) {
        if (cart.id) {
          //conditional: item is not in the cart, user is logged in
          const orderToUpdate = await Order.findOne({
            where: {id: cart.id, status: 'inProgress'}
          })
          //creates a line in orders_products with
          //quantity and price per item
          const [newProduct] = await orderToUpdate.addProduct(item.id, {
            through: {
              quantity: qty,
              priceAtPurchase: item.price
            }
          })
          const {quantity, priceAtPurchase} = newProduct
          await this.calculateOrderTotalPrice(
            orderToUpdate,
            quantity,
            priceAtPurchase
          )
        } else {
          //conditional: item is not in the cart, no user is logged in
          let cartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            qty: qty || 1,
            imageUrl: item.imageURL
          }
          cart.items.push(cartItem)
          this.calculateOrderTotalPrice(cart, cartItem.qty, cartItem.price)
        }
      } else if (cart.id) {
        //conditional: item is in the cart, user logged in
        const orderProductToUpdate = await OrderProduct.findOne({
          where: {orderId: cart.id, productId: item.id}
        })
        await this.calculateCartItemQtyAndPrice(
          orderProductToUpdate,
          qty,
          item.price
        )
        const orderToUpdate = await Order.findByPk(
          orderProductToUpdate.dataValues.orderId
        )
        await this.calculateOrderTotalPrice(orderToUpdate, qty, item.price)
        this.calculateOrderTotalPrice(cart, qty, item.price)
      } else {
        //conditional: item is already in the cart, no user is logged in
        const itemId = cart.items.findIndex(cartItem => cartItem.id === item.id)
        cart.items[itemId].qty += qty
        this.calculateOrderTotalPrice(cart, qty, item.price)
      }
    } catch (error) {
      return error
    }
  }

  static async inCart(item, cart) {
    let found = false
    try {
      if (cart.id) {
        const itemFound = await OrderProduct.findOne({
          where: {orderId: cart.id, productId: item.id}
        })
        if (itemFound) {
          found = true
        }
      } else {
        for (let i = 0; i < cart.items.length; i++) {
          if (cart.items[i].id === item.id) {
            found = true
          }
        }
      }
      return found
    } catch (error) {
      return error
    }
  }

  static async removeCartItem(item, cart) {
    let deleted = false
    try {
      if (this.inCart(item, cart)) {
        if (cart.id) {
          const orderToUpdate = await Order.findByPk(cart.id)
          const deletedItemDetails = await OrderProduct.findOne({
            where: {orderId: cart.id, productId: item.id}
          })
          const {quantity, priceAtPurchase} = deletedItemDetails
          const subPrice = priceAtPurchase * -1

          await orderToUpdate.removeProduct(item.id)
          await this.calculateOrderTotalPrice(orderToUpdate, quantity, subPrice)

          deleted = true
        }
        for (let i = 0; i < cart.items.length; i++) {
          if (cart.items[i].id === item.id) {
            const qty = cart.items[i].qty
            const price = cart.items[i].price * -1
            this.calculateOrderTotalPrice(cart, qty, price)
            cart.items.splice(i, 1)
            deleted = true
          }
        }
      }
      return deleted
    } catch (error) {
      return error
    }
  }

  static async editCartItemQty(item, newQty, cart) {
    let edited = false
    try {
      if (cart.id) {
        if (newQty === 0) {
          await this.removeCartItem(item, cart)
          edited = true
        } else {
          const orderToUpdate = await Order.findByPk(cart.id)
          const orderProductToUpdate = await OrderProduct.findOne({
            where: {orderId: cart.id, productId: item.id}
          })
          const qtyDifference = newQty - orderProductToUpdate.quantity
          await this.calculateCartItemQtyAndPrice(
            orderProductToUpdate,
            qtyDifference,
            item.price
          )
          orderToUpdate.totalPrice =
            orderProductToUpdate.priceAtPurchase * orderProductToUpdate.quantity
          await orderToUpdate.save()
          edited = true
        }
      } else {
        for (let i = 0; i < cart.items.length; i++) {
          if (cart.items[i].qty !== newQty && cart.items[i].id === item.id) {
            cart.totalPrice -= cart.items[i].qty * cart.items[i].price
            cart.items[i].qty = newQty
            this.calculateOrderTotalPrice(cart, newQty, item.price)
            edited = true
          }
        }
      }
      return edited
    } catch (error) {
      return error
    }
  }

  static async checkoutOrder(cart) {
    if (cart.id) {
      try {
        const order = await Order.findByPk(cart.id)
        order.status = 'complete'
        order.save()
      } catch (error) {
        return error
      }
    } else {
      console.log('HERE AT CLEARCART!!!')
      this.clearCart(cart)
    }
  }

  static async calculateOrderTotalPrice(order, qty, itemPrice) {
    order.totalPrice += itemPrice * qty
    if (order.id) {
      await order.save()
    }
  }

  static async calculateCartItemQtyAndPrice(orderProduct, qty, itemPrice) {
    orderProduct.quantity += qty
    orderProduct.priceAtPurchase = itemPrice
    await orderProduct.save()
  }

  static async clearCart(cart) {
    if (cart.id) {
      try {
        const order = Order.findByPk(cart.id)
        order.totalPrice = 0
        await order.setProducts([])
      } catch (error) {
        return error
      }
    } else {
      cart.items = []
      cart.totalPrice = 0.0
    }
  }
}

module.exports = Cart
