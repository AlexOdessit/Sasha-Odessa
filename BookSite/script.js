let burger = document.getElementsByClassName('burger')[0];
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    let menu = document.getElementsByTagName('header')[0].getElementsByTagName('ul')[0];
    menu.classList.toggle('active');
});

  window .onscroll = function(){
    let top = window.ScrollY > 0;
    let small = document.getElementsByClassName('logo')[0];
    small .classList.toggle('change', top);
    
  };



// Homepage order items

 let orderitem = document.getElementById('order_book').getElementsByClassName('item');
 for (i=0;i<orderitem.length;i++){
 let itemanimate = orderitem[i];
  itemanimate .addEventListener('mouseover', function () {
    itemanimate .classList.add('animate');
  });
  itemanimate .addEventListener('mouseout', function () {
    
  itemanimate .classList.remove('animate');

 });

 }
//  orderitem .addEventListener('mouseover', function () {
 
// orderitem .classList.add('animate');
 
//  let number = document.getElementById('order_book').getElementsByTagName('span')[0];
//          number. classList.add('active'); 
//     });

 
//     orderitem .addEventListener('mouseout', function () {
    
//    orderitem .classList.remove('animate');
    
//    let number = document.getElementById('order_book').getElementsByTagName('span')[0];
//             number. classList.remove('active'); 
//        });
   







