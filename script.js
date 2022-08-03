// Onscroll function

window.onscroll = function () {scrollFunction()};

const scrollFunction = function () {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector('#header .profile_picture').style.height = '10rem';
        document.querySelector('#header .profile_picture').style.width = '10rem';
        document.querySelector('.navbar_name').style.opacity = '1';
        document.querySelector('.scroll_picture').style.opacity = '1';
        document.querySelector('#header .name').style.fontSize = '1.5rem';

    } else {
        document.querySelector('#header .profile_picture').style.height = '20rem';
        document.querySelector('#header .profile_picture').style.width = '20rem';
        document.querySelector('.navbar_name').style.opacity = '0';
        document.querySelector('.scroll_picture').style.opacity = '0';
        document.querySelector('#header .name').style.fontSize = '3rem';
    }
}

// Hamburger menu script

const hamburger = document.querySelector('#hamburger_menu');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav_item').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
})
