let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle(' ')

};

const A = ScrollReveal({
    distance:'40px',
    duration:2500,
    reset: true
});
    A.reveal('.logo',{delay:200, origin:'left'});
    A.reveal('.navbar',{delay:400, origin:'top'});
    A.reveal('.menu-btn',{delay:520, origin:'top'});
    A.reveal('.home-text span',{delay:620, origin:'top'});
    A.reveal('.home-text h1',{delay:680, origin:'left'});
    A.reveal('.main-btn',{delay:820, origin:'left'});
    A.reveal('.share',{delay:720, origin:'bottom'});
    A.reveal('.home-text p',{delay:720, origin:'right'});
    A.reveal('.home-img',{delay:720, origin:'bottom'});
    A.reveal('.home text p',{delay:720, origin:'right'});