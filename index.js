import products from "./Products/Product.js";
import config from './Config/config.js';

let cart_icon = document.getElementById("cart_icon");
let search_item = document.getElementById("search_item");
let banner_button = document.getElementById("banner_button");
let add_to_cart = document.getElementsByClassName("add_to_cart");
cart_icon.addEventListener("click", () => alert("Cart page is coming soon!!"));
search_item.addEventListener("input", (e) => console.log(e.target.value));

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

//Initial Cart count
let cart_count = 0;
let cart_count_ele = document.getElementById("cart_count");
cart_count_ele.innerHTML = cart_count;

//display product lists
let product_container = document.getElementById("product_container");

if (products?.length > 0) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].qty > 0) {
      let product_item = document.createElement("div");
      product_item.className = "product_item";
      let fig = document.createElement("figure");
      let img = document.createElement("img");
      img.src = products[i]?.image;
      img.width = 120;
      img.height = 120;
      let prod_name = document.createElement("p");
      prod_name.innerHTML = products[i]?.product_name;
      let prod_price = document.createElement("p");
      prod_price.innerHTML = `$ ${products[i]?.price}`;
      let add_prod_btn = document.createElement("input");
      add_prod_btn.type = "button";
      add_prod_btn.className = "banner_button";
      add_prod_btn.value = "Add to Cart";
      fig.appendChild(img);
      product_item.appendChild(fig);
      product_item.appendChild(prod_name);
      product_item.appendChild(prod_price);
      product_item.appendChild(add_prod_btn);
      product_container?.appendChild(product_item);

      //Add to cart button
      add_prod_btn.addEventListener("click", () => {
        if (!login_info) alert("Please login to add to cart");
        else {
          ++cart_count;
          cart_count_ele.innerHTML = cart_count;
          alert("Product added to cart");
          add_prod_btn.value = "Added";
        }
      });

      //View Product Details
      product_item.addEventListener("click", () => {
        window.open(`${config}/Products/Products.html`, "_self");
      });
    }
  }
}

//redirectiong to home page
let home_route = document.getElementById("home_route");
home_route?.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/index.html", "_self");
});
