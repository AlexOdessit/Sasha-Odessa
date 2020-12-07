let next = document.getElementsByClassName('next')[0];
let prev = document.getElementsByClassName('prev')[0];
let slider_width = document.getElementsByClassName('slider_overlay')[0].offsetWidth;
let slides = document.getElementsByClassName('slide');
let slider = document.getElementsByClassName('slider')[0];
for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = slider_width / 3 + 'px';
}
next.addEventListener('click', function () {
    slide_Next();
});
prev.addEventListener('click', function () {
    slide_Prev();
});

function slide_Next() {
    slides = document.getElementsByClassName('slide');
    let slide_width = document.getElementsByClassName('slide')[0].offsetWidth;
    slider.style.transition = "all .4s";
    slider.style.transform = "translateX(" + -slide_width + "px)";
    setTimeout(function () {
        slider.style.transition = "all 0s";
        let my_slide = slides[0];
        slides[0].remove();
        slider.append(my_slide);
        slider.style.transform = "translateX(0)";
    }, 400);
}

function slide_Prev() {
    slides = document.getElementsByClassName('slide');
    let slide_width = document.getElementsByClassName('slide')[0].offsetWidth;
    slider.style.transition = "all 0s";
    let my_slide = slides[slides.length - 1];
    slides[slides.length - 1].remove();
    slider.prepend(my_slide);
    slider.style.transform = "translateX(" + -slide_width + "px)";
    setTimeout(function () {
        slider.style.transition = "all .4s";
        slider.style.transform = "translateX(0)";
    }, 400);
}


