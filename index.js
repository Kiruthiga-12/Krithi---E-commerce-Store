import products from './Products/Product.js';

let cart_icon = document.getElementById('cart_icon');
let search_item = document.getElementById('search_item');
let banner_button = document.getElementById('banner_button');
let add_to_cart = document.getElementsByClassName('add_to_cart');
cart_icon.addEventListener('click', () => alert('Cart page is coming soon!!'));
search_item.addEventListener('input', (e) => console.log(e.target.value));

//Initial Cart count
let cart_count = 0;
let cart_count_ele = document.getElementById('cart_count');
cart_count_ele.innerHTML = cart_count;

//display product lists
let product_container = document.getElementById('product_container');

  if (products?.length > 0) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].qty > 0) {
      let product_item = document.createElement('div');
      product_item.className = 'product_item';
      let fig = document.createElement('figure');
      let img = document.createElement('img');
      img.src = products[i]?.image;
      img.width = 200;
      img.height = 200;
      let prod_name = document.createElement('p');
      prod_name.innerHTML = products[i]?.product_name;
      let prod_price = document.createElement('p');
      prod_price.innerHTML = `$ ${products[i]?.price}`;
      let add_prod_btn = document.createElement('button');
      add_prod_btn.className = 'add_to_cart';
      add_prod_btn.innerHTML = 'Add to Cart';
      fig.appendChild(img);
      product_item.appendChild(fig);
      product_item.appendChild(prod_name);
      product_item.appendChild(prod_price);
      product_item.appendChild(add_prod_btn);
      product_container?.appendChild(product_item);
      }
    }
  }

for (let i = 0; i < add_to_cart?.length; i++) {
  add_to_cart[i]?.addEventListener('click', () => {
    ++cart_count;
    cart_count_ele.innerHTML = cart_count;
    alert('product added to cart');
    add_to_cart[i].innerHTML = 'Added';
  });
}
