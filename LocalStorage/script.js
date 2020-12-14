$(document).ready(function () {
  let counter = $('.get_cart p');
  let prdCount = localStorage.getItem('cartCount');
  if (prdCount != null) {
    counter.text(prdCount);
  }

  $('input').on('change', function () {
    if ($(this).prop('checked')) {
      $('.add-btn').attr('disabled', false);
    } else {
      $('.add-btn').attr('disabled', true);
    }
  });

  $('button').on('click', function () {
    let my_storage = localStorage.getItem('products');
    let name = $(this).parent('.product').find('h1').text();
    let img = $(this).parent('.product').find('img').attr('src');
    let old = $(this).parent('.product').find('.price p span').text();
    let sale = $(this).parent('.product').find('.price h3 span').text();
    let model = $(this).parent('.product').find('.model span');
    let arrm = '';
    let color = $('input[name="color"]:checked').val();
    let size = $(this).parent('.product').find('input[name = "size"]').val();

    for (i = 0; i < model.length; i++) {
      if (i == model.length - 1) {
        arrm += $(model[i]).text();
      } else {
        arrm += $(model[i]).text() + ',';
      }
    }
    // let year = [];
    // for (i = 0; i < model.length; i++) {
    //   year.push($(model[i]).text());
    // }

    //  localStorage
    let my_product = {
      title: name,
      image: img,
      oldprice: old,
      saleprice: parseInt(sale),
      count: 1,
      colorz: color,
      sizes: size,
      models: arrm,
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
    function cartCounter() {
      let prdCount = localStorage.getItem('cartCount');
      if (prdCount != null) {
        prdCount = parseInt(prdCount);
        localStorage.setItem('cartCount', prdCount + 1);
        counter.text(prdCount + 1);
      } else {
        localStorage.setItem('cartCount', 1);
        counter.text((prdCount = 1));
      }
    }
    cartCounter();
  });

  let cart = $('.cart_box');
  $('.get_cart').on('click', function () {
    my_str1 = JSON.parse(localStorage.getItem('products'));
    if (localStorage.getItem('products') === null || my_str1.products.length == 0) {
      $('.pop_up_overlay').addClass('active');
      setTimeout(function () {
        $('.pop_up_overlay').removeClass('active');
      }, 3000);
    } else {
      cart.addClass('active');
    }

    let cartItems = JSON.parse(localStorage.getItem('products'));
    let cartContent = $('.product_content');
    prdCount = localStorage.getItem('cartCount');
    let cartCost = localStorage.getItem('totalCost');
    cartItems = cartItems.products;
    cartItems.map(function (p) {
      cartContent.append(
        `<div class="product_content"><h3 class="name">${p.title}</h3> <img src = "${p.image}"><span>Price:${p.saleprice}$</span><span>color:${p.colorz}</span><span>size:${p.sizes}</span><span>Models:${p.models}</span>
        <div class="count-arrows"><i class="fas fa-chevron-left decrease"></i><span>${p.count}</span><i class="fas fa-chevron-right increase"></i></div><button>remove item</button></div>`
      );
    });
    $('.cart_box').append(`<h3 class ="total"> Total:${cartCost}$</h3> <h3 class="count">Total products:${prdCount}</h3>`);
  });

  $('body').on('click', '.cart_box button', function () {
    let pIndex = $(this).parent('.product_content').index();
    let product_count = parseInt($(this).parent('.product_content').find('.count-arrows span').text());
    console.log(product_count);
    $(this).parent('.product_content').remove();
    let items = JSON.parse(localStorage.getItem('products'));
    let my_item = items.products;
    my_item.splice(pIndex, 1);
    localStorage.setItem('products', JSON.stringify(items));
    let counter = parseInt(localStorage.getItem('cartCount'));
    counter = counter - product_count;
    localStorage.setItem('cartCount', counter);
  });

  $('body ').on('click', '.increase', function () {
    // alert('Hello');
    let cartName = $('product_content h3').text();
    let cartItems = JSON.parse(localStorage.getItem('products'));
    let my_name = cartItems.products;
    my_name = my_name.title;
    let itemcount = parseInt($(this).parent('.product_content').find('.count-arrows span').text());
    for (i = 0; i < my_name; i++) {
      if ($(my_name[i]) === cartName) {
      }
    }
  });

  let closebtn = $('.close_btn');
  closebtn.on('click', function () {
    cart.removeClass('active');
    $('.product_content *').remove();
    $('.cart_box h3').remove();
  });
});
