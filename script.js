let cartQuantity = 0;

  function updateCartQuantity(change) {
    if (cartQuantity + change > 10) {
      alert('The cart is full');
      return;
    }

    if (cartQuantity + change < 0) {
      alert('Not enough items in the cart');
      return;
    }

    cartQuantity += change;
    console.log(`Cart quantity: ${cartQuantity}`);
  }