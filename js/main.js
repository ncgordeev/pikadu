let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.aside');


menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('active');
})