function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function addToCart(item) {
  let li = document.createElement("li");
  li.textContent = item;
  document.getElementById("cartList").appendChild(li);
  alert(item + " added to cart!");
}

function addToWishlist(item) {
  let li = document.createElement("li");
  li.textContent = item;
  document.getElementById("wishlistList").appendChild(li);
  alert(item + " added to wishlist!");
}

function addReview() {
  const input = document.getElementById("reviewInput");
  const list = document.getElementById("reviewList");
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.innerHTML = `<strong>You:</strong> ${input.value}`;
    list.appendChild(li);
    input.value = "";
  }
}

// Toggle between login and signup form
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
