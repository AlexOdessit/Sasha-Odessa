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

$('#words_counter').on('click', function () {
    let wordscount = $('.first').text();
    let myarr = wordscount.split(' ');
    let innerText1 = $('.counter');
    innerText1.text(myarr.length);
    console.log(myarr.length);
});

// 4.Show Alert Text
let textcontent = $('.first');
$('#get_text').on('click', function () {
    alert(textcontent.text());
    textcontent.remove();
});