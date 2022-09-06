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


// Plantleaf

const plantHidden = document.getElementById('plantleaf');
const plantleafArrow = document.getElementById('plantleafArrow');

// Knights Game

const knightsHidden = document.getElementById('knightBattle');
const knightsArrow = document.getElementById('knightBattleArrow');


function expand(var1, var2) {
    var1.classList.toggle('active');
    var2.classList.toggle('active');
}

plantleafArrow.onclick = function() {expand(plantHidden, plantleafArrow)};
knightsArrow.onclick = function() {expand(knightsHidden, knightsArrow)};

