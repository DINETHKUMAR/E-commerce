let cartQuantity =Number(localStorage.getItem('cartQuantity'))|| 0;
showcart();
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
   
    localStorage.setItem('cartQuantity',String(cartQuantity));
    showcart();
    console.log(`Cart quantity: ${cartQuantity}`);
  }
  function showcart(){
    document.querySelector('.js-cart')
    .innerHTML = `Cart quantity: ${cartQuantity}`;
  }
  function reset(){
    cartQuantity = 0;
    localStorage.removeItem('cartQuantity');
    document.querySelector('.js-cart')
      .innerHTML = `Cart quantity: ${cartQuantity}`;
      console.log(`Cart quantity: ${cartQuantity}`);
  }