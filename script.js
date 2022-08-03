// Onscroll function

window.onscroll = function () {scrollFunction()};

const scrollFunction = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('#header .profile_picture').style.height = '10rem';
        document.querySelector('#header .profile_picture').style.width = '10rem';
        document.querySelector('.navbar_name').style.opacity = '1'

    } else {
        document.querySelector('#header .profile_picture').style.height = '20rem';
        document.querySelector('#header .profile_picture').style.width = '20rem';
        document.querySelector('.navbar_name').style.opacity = '0'
    }
}

// Hamburger menu script

const hamburger = document.querySelector('#hamburger_menu');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav_item').forEach( n => {
    n.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    })
    }

)