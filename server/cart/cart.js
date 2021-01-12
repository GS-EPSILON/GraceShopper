class Cart {
  static addToCart(item, qty, cart) {
    //the this context refers to the class Cart itself, we're calling its own function
    if (!this.inCart(item, cart)) {
      let cartItem = {
        id: item.itemId,
        price: item.price,
        qty: qty,
        imageUrl: item.imageUrl
      }
      cart.items.push(cartItem)
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

  static removeCartItem(id, cart) {
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].id === id) {
        cart.items.splice(i, 1)
      }
    }
  }

  static clearCart(cart) {
    cart.items = []
    cart.totalPrice = 0.0
  }
}

module.exports = Cart
