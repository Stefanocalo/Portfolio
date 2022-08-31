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



let today = new Date();
let dB = 7;
let mB = 5;
let yyyyB = 1992;
let age = document.getElementById('age');
let currentAge

currentAge = today.getFullYear()-yyyyB
if ((today.getMonth()-mB) < 0) {
    currentAge -= 1
} else if ((today.getMonth()-mB) === 0) {
    if ((today.getDate()-dB) < 0) {
        currentAge -= 1;
    }
}

age.innerHTML = currentAge

// Project preview hidden

const hidden = document.querySelector('.hide');
const plantleaf = document.querySelector('#plantleaf');
const arrow = document.querySelector('.arrow');
//const preview = document.querySelector('.project_preview');

plantleaf.addEventListener('click', () => {
    hidden.classList.toggle('active');
    arrow.classList.toggle('active');
    //preview.classList.toggle('active');
})

// Night Mode

const toggle = document.getElementById('nightMode');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    document.body.style.backgroundColor = 'rgb(30,29,29)';
    document.body.style.color = 'rgb(255,255,255)';
    document.querySelector('#navbar').style.backgroundColor = 'rgb(10,24,59)'
    document.querySelector('footer').style.backgroundColor = 'rgb(10,24,59)';
    document.querySelector('.language_container').style.color = 'rgb(255,255,255)'
})

