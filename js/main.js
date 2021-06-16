const burger = document.querySelector('.burger');
const second_nav = document.querySelector('.second-nav');
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const right_container = document.querySelector('.right-container')

    burger.addEventListener('click', () => {
        if(!second_nav.classList.contains('active')){
            second_nav.classList.add('active');
            line1.style.transform = "rotate(400deg)";
            line2.style.opacity = "0";
            line3.style.transform = "rotate(320deg)";
            line3.style.transition = "300ms ease-out";

            line1.style.position = "absolute";
            line2.style.position = "absolute";
            line3.style.position = "absolute";


        }else{
            second_nav.classList.remove('active');
            line1.style.transform = "rotate(0deg)";
            line2.style.opacity = "1";
            line3.style.transform = "rotate(0deg)";
            line3.style.transition = "300ms ease-out";
            right_container.style.opacity = "1";

            line1.style.position = "relative";
            line2.style.position = "relative";
            line3.style.position = "relative";
            
        }
    })