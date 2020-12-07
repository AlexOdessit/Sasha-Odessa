$(document).ready(function () {
  $('button').on('click', function () {
    let my_storage = localStorage.getItem('products');
    let name = $(this).parent('.product').find('h1').text();
    let img = $(this).parent('.product').find('img').attr('src');
    let old = $(this).parent('.product').find('.price p span').text();
    let sale = $(this).parent('.product').find('.price h3 span').text();
    // let color = $('input')
    //   .map(function () {
    //     return $(this).val();
    //   })
    //   .get();

    //  localStorage
    let my_product = {
      title: name,
      image: img,
      oldprice: old,
      saleprice: parseInt(sale),
      color: ['black', 'white', 'red'],
      size: ['42', '43', '45'],
      count: 1,
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
    function totalCost(sum) {
      let cartCost = localStorage.getItem('totalCost');
      if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + my_product.saleprice);
      } else {
        localStorage.setItem('totalCost', my_product.saleprice);
      }
      // console.log(cartCost);
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
        counter.text((prdCount = 1));
      }
    }

    function onloadCartNum() {
      let prdCount = localStorage.getItem('cartCount');
      if (prdCount) {
        counter.innerHTML = prdCount;
        // console.log(prdCount);
      }
    }
    cartCount();
    onloadCartNum();
  });

  let cart = $('.cart_box');
  let closebtn = $('.close_btn');
  $('.get_cart').on('click', function () {
    cart.addClass('active');
    let cartContent = $('.cart');
    let cartItems = localStorage.getItem('products');
    cartItems = JSON.parse(cartItems);
    let newarr = cartItems
      .map(function (items) {
        return cartContent.append(
          '<div class="product_content"><h3>Hello</h3></div>'
        );
      })
      .get();
  });

  closebtn.on('click', function () {
    cart.removeClass('active');
  });
});
