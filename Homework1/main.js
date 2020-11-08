$(document).ready(function($)
{ 
$('.menu_icon').click(function(e){
e.preventDefault();
$('.main-nav').toggleClass('show');
$('.menu_icon') .toggleClass('active');
});


});