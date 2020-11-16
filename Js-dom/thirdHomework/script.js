// 1.Change p color OnClick
let btn1 = document.getElementById('change_color');
let text1 = document.getElementsByTagName('p')[0];
btn1.onclick = function (e) {
    e.preventDefault();
    text1.classList.toggle('color');
};

// 2.Change Title
let titlebtn = document.getElementById('change_title');
let title = document.getElementsByTagName('h1')[0];
titlebtn.addEventListener('click', function () {
    title.innerHTML = 'Troshin Sasha - Odessa Mama';
});

// 3.Count of words in p 
let countbtn = document.getElementsByTagName('button')[2];
countbtn.addEventListener('click', function () {
    let wordscount = document.getElementsByClassName('first')[0].innerText;
    let myarr = wordscount.split(' ');
    let innerText1 = document.getElementsByClassName('counter')[0];
    innerText1.innerText += myarr.length;
    console.log(myarr.length);
});
//  console.log(countbtn);
//for (i = 0; i <= wordscount.length; i++) {
//    let totalcount = 0;
//    totalcount += wordscount[i];
//    countbtn.addEventListener('click', function () {
//        console.log(totalcount);
//    });
//}

// 4.Show Alert Text
let alertbtn = document.getElementById('get_text');
let txt = document.getElementsByTagName('p')[1];
//  console.log(txt);
alertbtn.addEventListener('click', function () {
    alert(txt.textContent);
    txt.remove();
});
