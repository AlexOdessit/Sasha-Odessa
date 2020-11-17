// 1.Change p color OnClick
let btn1 = document.getElementById('change_color');
let text1  = document.getElementsByTagName('p')[0];
btn1.onclick = function(e) {
        e.preventDefault();
        text1.classList.toggle('color');};

// 2.Change Title
 let titlebtn= document.getElementById('change_title');
 let title = document.getElementsByTagName('h1')[0];
 titlebtn.addEventListener('click',function(){
     title.innerHTML = 'Troshin Sasha - Odessa Mama';
 });

// 3.Count of words in p 
 let wordscount = document .getElementsByClassName('first')[0].innerText;
 let countbtn = document.getElementsByTagName('button')[2];
//  console.log(countbtn);
 for (i=0;i<=wordscount.length;i++){
 countbtn.addEventListener('click' ,function(){

});
 }

// 4.Show Alert Text
 let alertbtn = document.getElementById('get_text');
 let txt = document.getElementsByTagName('p')[1];
//  console.log(txt);
  alertbtn.addEventListener('click',function(){
  alert(txt.innerText);
  txt.remove();
  });


