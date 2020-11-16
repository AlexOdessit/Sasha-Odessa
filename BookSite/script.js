let burger = document.getElementsByClassName('burger')[0];
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    let menu = document.getElementsByTagName('header')[0].getElementsByTagName('ul')[0];
    menu.classList.toggle('active');
});


window.addEventListener('scroll', function(){
let small = document.getElementsByClassName('logo')[0];
let top = window.scrollY;
  if (top>150){
     small.classList .add('change');
   }
   else{
    small.classList.remove('change'); 
   }
   
  });

// Animate items
let item = document.getElementsByClassName('item');
for (i=0;i<item.length;i++){
 let itemanimate = item[i];
 item[i].addEventListener('mouseover', function () {
itemanimate .classList.add('animate');
});
item[i] .addEventListener('mouseout', function () {
itemanimate .classList.remove('animate');
});
}


// let orderitem = document.querySelectorAll('.order_item').forEach(function (e) {
//   e.addEventListener('mouseover', function() {
//     e.classList.add('active');
//   });
// });

