class Cart {
  //hello
  static addToCart(item, qty, cart) {
    //the this context refers to the class Cart itself, we're calling its own function
    if (!this.inCart(item, cart)) {
      let cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty || 1,
        imageUrl: item.imageURL
      }
      cart.items.push(cartItem)
    } else {
      item.qty++
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

  static removeCartItem(item, cart) {
    let deleted = false
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].id === item.id) {
        cart.items.splice(i, 1)
        deleted = true
      }
    }
    return deleted
  }

  static editCartItemQty(item, qty, cart) {
    let edited = false
    for (let i = 0; i < cart.items.length; i++) {
      if (cart.items[i].qty !== qty) {
        cart.items[i].qty = qty
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
