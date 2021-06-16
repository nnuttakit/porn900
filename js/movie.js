/* Movie Navbar Start */

const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const movie_card = document.querySelector('.movie-card');
const video = document.querySelector('.video');


open_btn.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.add('visible'));
    movie_card.classList.add('slide-left');
    video.classList.add('slide-left');
    
})

close_btn.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
    movie_card.classList.remove('slide-left');
    video.classList.remove('slide-left');
})
/* Movie Navbar End */