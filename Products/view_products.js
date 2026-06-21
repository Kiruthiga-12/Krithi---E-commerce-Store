import config from '../Config/config.js';

let cart_icon = document.getElementById("cart_icon");
let search_item = document.getElementById("search_item");

cart_icon.addEventListener("click", () => alert("Cart page is coming soon!!"));
search_item.addEventListener("input", (e) => console.log(e.target.value));

//Initial Cart count
let cart_count = 0;
let cart_count_ele = document.getElementById("cart_count");
cart_count_ele.innerHTML = cart_count;

//login page
let login_page = document.getElementById("login");
login_page?.addEventListener("click", () =>
  window.open(`${config}/Login/Login.html`, "_self"),
);

//logout
let logout_page = document.getElementById("logout");
logout_page?.addEventListener("click", () => {
  localStorage.removeItem("user_email");
  alert("Logged out successfully!!");
  window.open(`${config}/index.html`, "_self");
});

//checks whether user is logged in or not.
let login_info = localStorage.getItem("user_email");
if (login_info) {
  login_page.innerHTML = `Welcome ${login_info}`;
} else {
  login_page.innerHTML = "Login";
  logout_page.style.display = "none";
}

//add to cart functionality
let add_prod_cart = document.getElementById("add_prod_cart");
add_prod_cart?.addEventListener("click", () => {
  if (!login_info) alert("Please login to add to cart");
  else {
    ++cart_count;
    cart_count_ele.innerHTML = cart_count;
    alert("Product added to cart");
    add_prod_cart.value = "Added";
    //when product added to cart , qty should be reducd by number of qty user selected.
  }
});

//redirectiong to home page
let home_route = document.getElementById("home_route");
home_route?.addEventListener("click", () => {
  window.open(`${config}/index.html`, "_self");
});
