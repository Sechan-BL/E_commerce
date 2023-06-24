// Script for updating the cart count
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.product-card button');

let count = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
  });
});
