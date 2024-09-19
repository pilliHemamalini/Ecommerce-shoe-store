
// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var item = items[itemIndex];

  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // Item does not exist in the cart, add it with a quantity of 1
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  // Update the cart count
  updateCartCount();

  // Update the cart items display
  updateCartItems();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    // Item found in the cart, remove it
    cartItems.splice(itemIndex, 1);

    // Update the cart count
    updateCartCount();

    // Update the cart items display
    updateCartItems();
  }
}

// Function to update the cart count
function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}

// Function to update the cart items display
function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = '$' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.style.backgroundColor="violet";
    removeBtnElement.style.color="black";
    removeBtnElement.style.border="none";
    removeBtnElement.style.margin="5px";
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);
    cartItemsElement.appendChild(cartItemElement);
  });
}

// Sample data for items
var items = [
  {
    id: 1,
    name: 'Shoe 1:  ',
    price: 49.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1201A789_001_SR_RT_GLB.jpg',
  },
  {
    id: 2,
    name: 'Shoe 2:  ',
    price: 159.09 ,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A380_700_SR_RT_GLBNSW.jpg',
  },
  // Add more items as needed
  {
    id: 3,
    name: 'Shoe 3:  ',
    price: 69.99 ,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 4,
    name: 'Shoe 4:   ',
    price: 79.99,
    image: 'https://example.com/shoe4.jpg',
  },
  {
    id: 5,
    name: 'Shoe 5:   ',
    price: 89.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 6,
    name: 'Shoe 6:  ',
    price: 99.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 7,
    name: 'Shoe 7:   ',
    price: 95.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 8,
    name: 'Shoe 8:   ',
    price: 197.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 9,
    name: 'Shoe 9:   ',
    price: 69.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1201A789_001_SR_RT_GLB.jpg',
  },
  {
    id: 10,
    name: 'Shoe 10:   ',
    price: 59.09,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A380_700_SR_RT_GLBNSW.jpg',
  },
  // Add more items as needed
  {
    id: 11,
    name: 'Shoe 11:   ',
    price: 109.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 12,
    name: 'Shoe 12:   ',
    price: 66,
    image: 'https://example.com/shoe4.jpg',
  },
  {
    id: 13,
    name: 'Shoe 13:   ',
    price: 89.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 14,
    name: 'Shoe 14:   ',
    price: 99.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 15,
    name: 'Shoe 15:   ',
    price: 95.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 16,
    name: 'Shoe 16:   ',
    price: 97.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 17,
    name: 'Shoe 17:   ',
    price: 49.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1201A789_001_SR_RT_GLB.jpg',
  },
  {
    id: 18,
    name: 'Shoe 18:   ',
    price: 59.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A380_700_SR_RT_GLBNSW.jpg',
  },
  // Add more items as needed
  {
    id: 19,
    name: 'Shoe 19:   ',
    price: 69.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 20,
    name: 'Shoe 20:   ',
    price: 79.99,
    image: 'https://example.com/shoe4.jpg',
  },
  {
    id: 21,
    name: 'Shoe 21:   ',
    price: 89.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 22,
    name: 'Shoe 22:   ',
    price: 99.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 23,
    name: 'Shoe 23:   ',
    price: 95.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 24,
    name: 'Shoe 24:   ',
    price: 97.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 25,
    name: 'Shoe 25:   ',
    price: 49.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1201A789_001_SR_RT_GLB.jpg',
  },
  {
    id: 26,
    name: 'Shoe 26:   ',
    price: 59.78,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A380_700_SR_RT_GLBNSW.jpg',
  },
  // Add more items as needed
  {
    id: 27,
    name: 'Shoe 27:   ',
    price: 601.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 28,
    name: 'Shoe 28:   ',
    price: 79.89,
    image: 'https://example.com/shoe4.jpg',
  },
  {
    id: 29,
    name: 'Shoe 29:   ',
    price: 89.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 30,
    name: 'Shoe 30:   ',
    price: 129.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 31,
    name: 'Shoe 31:   ',
    price: 95.89,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 32,
    name: 'Shoe 32:   ',
    price: 87.99,
    image: 'https://example.com/shoe3.jpg',
  },
];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});

// for navigating to other html pages
// 1.running section
document.getElementById('run').addEventListener('click', function() {
  window.location.href = 'running.html';
});
document.getElementById('appear').addEventListener('click', function() {
    window.location.href = 'apperal.html';
  });
// // 2.SPORTSTYLE section
document.getElementById('sport').addEventListener('click', function() {
  window.location.href = 'sports.html';
});

// // 3.apparel section


// // 4.performance section
document.getElementById('perform').addEventListener('click', function() {
  window.location.href = 'performance.html';
});