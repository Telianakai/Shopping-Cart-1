/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let products = [
  {
    name: 'cherry',
    price: 1.50,
    quantity: 0,
    productId: 1110,
    image: '/main/images/cherry.jpg',
  },

  {
    name: 'orange',
    price: 2,
    quantity: 0,
    productId: 1111,
    image: '/main/images/orange.jpg',
  },

  {
    name: 'strawberry',
    price: 1,
    quantity: 0,
    productId: 1112,
    image:'/main/images/strawberry.jpg',
  }
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

//_______________________________________________________________________________________
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let productToAdd = products.find(product => product.productId === productId);

  if (productToAdd) {
    // Check if the product is already in the cart
    let existingCartItem = cart.find(item => item.productId === productId);

    if (existingCartItem) {
      // If the product is already in the cart, increase its quantity
      existingCartItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it to the cart with quantity 1
      cart.push({
        ...productToAdd,
        quantity: 1,
      });
    }
  } else {
    console.log('Product not found.');
  }
}
//_______________________________________________________________________________________
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  // Find the product in cart by productId
  let productInCart = cart.find(item => item.productId === productId);

  if (productInCart) {
    // Increase the quantity of the product in the cart
    productInCart.quantity += 1;
  } else {
    console.log('Product not found in the cart.');
  }
}

//_______________________________________________________________________________________
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  // Find the index of the product
  let productIndex = cart.findIndex(item => item.productId === productId);

  if (productIndex !== -1) {
    // Decrease the quantity
    cart[productIndex].quantity -= 1;

    // If quantity becomes 0, removefrom the cart
    if (cart[productIndex].quantity === 0) {
      cart.splice(productIndex, 1);
    }
  } else {
    console.log('Product not found in the cart.');
  }
}
//_______________________________________________________________________________________
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let productIndex = cart.findIndex(item => item.productId === productId);
 if (productIndex  !== -1) {
    // remove the product from the cart
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1);
  } else {
    console.log('Product not found in the cart.');
  }
}
//_______________________________________________________________________________________
// CHECKOUT FUNCTIONALITY
let totalPaid = 0;

//_______________________________________________________________________________________
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(products) {
let removeAll = cart.findIndex(items => items.products === products);
 if (removeAll  !== -1) {
    cart[removeAll].quantity = 0;
    cart.splice(0);
  } else {
    console.log('No items in cart. Continue shopping');
  }
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  totalPaid += amount;
  return totalPaid - cartTotal();
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
