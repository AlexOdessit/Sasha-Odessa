$(document).ready(function () {
  let counter = $('.get_cart p');
  let prdCount = localStorage.getItem('cartCount');
  if (prdCount) {
    counter.text(prdCount);
  }
  $('button').on('click', function () {
    let my_storage = localStorage.getItem('products');
    let name = $(this).parent('.product').find('h1').text();
    let img = $(this).parent('.product').find('img').attr('src');
    let old = $(this).parent('.product').find('.price p span').text();
    let sale = $(this).parent('.product').find('.price h3 span').text();
    let color = $(this).parent('.product').find('input').val();
    for (i = 0; i < color.length; i++) {
      color[i] = colorz;
    }
    //  localStorage
    let my_product = {
      title: name,
      image: img,
      oldprice: old,
      saleprice: parseInt(sale),
      count: 1,
      colors: colorz,
    };
    if (my_storage === null) {
      let my_products = {
        products: [my_product],
      };

      let myJSON = JSON.stringify(my_products);
      localStorage.setItem('products', myJSON);
    } else {
      my_storage = JSON.parse(my_storage);
      my_products = my_storage.products;
      let iter = 0;
      for (let i = 0; i < my_products.length; i++) {
        if (my_products[i].title == name) {
          let counts = my_products[i].count;
          counts++;
          my_products[i].count = counts;
          iter = 1;
        }
      }

      if (iter == 0) {
        my_products.push(my_product);
      }
      my_storage = JSON.stringify(my_storage);
      localStorage.setItem('products', my_storage);
    }
    //  Сумма товара
    function totalCost() {
      let cartCost = localStorage.getItem('totalCost');
      if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + my_product.saleprice);
      } else {
        localStorage.setItem('totalCost', my_product.saleprice);
      }
    }
    totalCost();
    // Счетчик товаров в корзине
    let counter = $('.get_cart p');
    let prdCount = localStorage.getItem('cartCount');
    function cartCount() {
      prdCount = parseInt(prdCount);
      if (prdCount) {
        localStorage.setItem('cartCount', prdCount + 1);
        counter.text(prdCount + 1);
      } else {
        localStorage.setItem('cartCount', 1);
        counter.text((prdcount = 1));
      }
    }
    cartCount();
  });

  let cart = $('.cart_box');
  let closebtn = $('.close_btn');
  $('.get_cart').on('click', function () {
    cart.addClass('active');
    let cartItems = localStorage.getItem('products');
    let cartContent = $('.product_content');
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    cartItems = cartItems.products;
    cartItems.map(function (p) {
      cartContent.append(
        '<div class="product_content"><h3>' +
          p.title +
          '</h3> <img src = "' +
          p.image +
          '"><span>Price:' +
          p.saleprice +
          '$</span><span>' +
          p.colors +
          '</span><span>quantity:' +
          p.count +
          '</span></div>'
      );
    });
    $('.cart_box').append('<h2 class ="total"> Total  ' + cartCost + '$</h2>');
  });

  closebtn.on('click', function () {
    cart.removeClass('active');
    $('.product_content *').remove();
    $('.total').remove();
  });
});
