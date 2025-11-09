const products = [
  {
    name: "Rolex Watch",
    price: "₹19,499",
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Leather Boots",
    price: "₹8,299",
    image:
      "https://images.unsplash.com/photo-1710632609125-da337a1e1ddd?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Bracelet",
    price: "₹2,599",
    image:
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Sneakers",
    price: "₹3,799",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Apple Watch",
    price: "₹4,499",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Comfy Sandals",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1715525295763-a423d6dda172?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Necklace",
    price: "₹8,899",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Hat",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=60&w=600",
  },
];

let cart = [];
let wishlist = [];
let orders = [];

function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
      <button onclick="addToWishlist('${p.name}')">Wishlist</button>
      <button onclick="buyNow('${p.name}')">Buy Now</button>
    `;
    grid.appendChild(div);
  });
}

function addToCart(name) {
  const item = products.find((p) => p.name === name);
  cart.push(item);
  alert(`${name} added to cart!`);
  renderCart();
}

function addToWishlist(name) {
  const item = products.find((p) => p.name === name);
  wishlist.push(item);
  alert(`${name} added to wishlist!`);
  renderWishlist();
}

function buyNow(name) {
  const item = products.find((p) => p.name === name);
  orders.push(item);
  alert(`Order placed for ${name}!`);
  renderOrders();
}

function renderCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  cart.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${p.image}" alt=""> <span>${p.name} - ${p.price}</span>
      <button onclick="buyNow('${p.name}')">Buy Now</button>`;
    list.appendChild(li);
  });
}

function renderWishlist() {
  const list = document.getElementById("wishlistList");
  list.innerHTML = "";
  wishlist.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${p.image}" alt=""> <span>${p.name} - ${p.price}</span>`;
    list.appendChild(li);
  });
}

function renderOrders() {
  const list = document.getElementById("ordersList");
  list.innerHTML = "";
  orders.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${p.image}" alt=""> <span>${p.name} - ${p.price}</span>`;
    list.appendChild(li);
  });
}

function addReview() {
  const input = document.getElementById("reviewInput");
  const list = document.getElementById("reviewList");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<strong>You:</strong> ${input.value}`;
    list.appendChild(li);
    input.value = "";
  }
}

function toggleAuthForm() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const title = document.getElementById("formTitle");

  if (loginForm.classList.contains("hidden")) {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    title.textContent = "Login";
  } else {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    title.textContent = "Sign Up";
  }
}

window.onload = renderProducts;
