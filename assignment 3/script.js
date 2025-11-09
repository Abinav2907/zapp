function showPage(page) {
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(page).classList.add("active");
  document
    .querySelectorAll("nav a")
    .forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
}

const products = [
  {
    name: "Running Shoes",
    price: 3499,
    img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Rolex Watch",
    price: 9999,
    img: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {
    name: "Bracelet",
    price: 2299,
    img: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Leather Boots",
    price: 5499,
    img: "https://images.unsplash.com/photo-1534233650908-b471f2350922?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
  },
  {
    name: "Comfy Sandals",
    price: 1999,
    img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    name: "Necklace",
    price: 8999,
    img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {
    name: "Formal Shoes",
    price: 4599,
    img: "https://images.unsplash.com/photo-1668069226492-508742b03147?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    name: "Apple Watch",
    price: 5599,
    img: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=702",
  },
];
let cart = [],
  wishlist = [];

const productContainer = document.getElementById("productList");
products.forEach((p, i) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn" onclick="addToCart(${i})">Add to Cart</button>
        <button class="btn" onclick="addToWishlist(${i})">Add to Wishlist</button>
      `;
  productContainer.appendChild(div);
});

function addToCart(i) {
  cart.push(products[i]);
  renderCart();
  alert(products[i].name + " added to cart!");
}
function addToWishlist(i) {
  wishlist.push(products[i]);
  renderWishlist();
  alert(products[i].name + " added to wishlist!");
}
function renderCart() {
  const c = document.getElementById("cartList");
  c.innerHTML = "";
  if (cart.length === 0) {
    c.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  cart.forEach((item, idx) => {
    const d = document.createElement("div");
    d.className = "list-item";
    d.innerHTML = `<span>${item.name} - ₹${item.price}</span>
                     <button class="remove-btn" onclick="removeCart(${idx})">Remove</button>`;
    c.appendChild(d);
  });
}
function renderWishlist() {
  const w = document.getElementById("wishList");
  w.innerHTML = "";
  if (wishlist.length === 0) {
    w.innerHTML = "<p>No items in wishlist.</p>";
    return;
  }
  wishlist.forEach((item, idx) => {
    const d = document.createElement("div");
    d.className = "list-item";
    d.innerHTML = `<span>${item.name} - ₹${item.price}</span>
                     <button class="remove-btn" onclick="removeWish(${idx})">Remove</button>`;
    w.appendChild(d);
  });
}
function removeCart(i) {
  cart.splice(i, 1);
  renderCart();
}
function removeWish(i) {
  wishlist.splice(i, 1);
  renderWishlist();
}

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("regUser").value;
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;
  localStorage.setItem("user", JSON.stringify({ user, email, pass }));
  alert("✅ Registration Successful!");
  showPage("login");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const loginUser = document.getElementById("loginUser").value;
  const loginPass = document.getElementById("loginPass").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (
    storedUser &&
    storedUser.user === loginUser &&
    storedUser.pass === loginPass
  ) {
    alert("Welcome back, " + loginUser + "!");
    showPage("products");
  } else {
    alert("❌ Invalid credentials");
  }
});
