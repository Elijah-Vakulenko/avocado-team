'use strict';

const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const navLinks = document.querySelectorAll('.nav-link');

openMenuBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
});
closeMenuBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
})
navLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
    });
});