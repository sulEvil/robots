// Подключение функционала
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
const menu = document.querySelector('.menu__container');
function openNav(){
    document.querySelector('.nav').classList.add('nav_active');
    document.querySelector('html').classList.add('lock');
}
function openMenu(){
    document.querySelector('html').classList.add('lock');
    document.querySelector('.menu').classList.add('menu_active');
    menu.style.bottom = '0';
    menu.style.paddingTop = '100px';
    menu.style.paddingBottom = '80px';
}
function reset(){
    document.querySelector('html').classList.remove('lock');
    document.querySelector('.menu').classList.remove('menu_active');
    document.querySelector('.nav').classList.remove('nav_active');
    menu.style.bottom = '100%';
    menu.style.paddingTop = '0';
    menu.style.paddingBottom = '0';
}
function closeNav(){
    document.querySelector('.nav').classList.remove('nav_active');
    document.querySelector('html').classList.remove('lock');
}
document.addEventListener('click', function(event){
    if(event.target.closest('.icon-menu')){
        if(document.querySelector('html').classList.contains('lock')){
            reset();
        } else {
            openMenu();
        }
    }
    if(event.target.closest('.menu__item_inside')){
    }
    if(document.querySelector('.nav').classList.contains('nav_active') && !event.target.closest('.nav__body')){
        document.querySelector('.nav').classList.remove('nav_active');
    }
    if(event.target.closest('.nav__item_callback')){
        if(!document.querySelector('.nav').classList.contains('nav_active')){
            openNav();
        }
    }
    if(!event.target.closest('.nav__body') && !event.target.closest('.menu__body') && !event.target.closest('.nav__item_callback') && !event.target.closest('.icon-menu')){
        document.querySelector('html').classList.remove('lock');
    }
    if(event.target.closest('.nav-body__close')){
        closeNav();
    }
})
document.addEventListener('mousemove', function(event){
    if(event.target.closest('.menu__link_inside[data-id]')){
        console.log('Поймал')
    }
})
document.addEventListener('keydown',function(event) {
    const menu = document.querySelector('.menu__container');
    // ESCAPE key pressed
    if (event.keyCode == 27) {
        document.querySelector('html').classList.remove('lock');
        document.querySelector('.menu').classList.remove('menu_active');
        menu.style.bottom = '100%';
        menu.style.paddingTop = '0';
        menu.style.paddingBottom = '0';
    }
});
document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.input__callback').forEach(function(input){
        input.addEventListener('change', function (e) {
            if(input.value){
                input.parentNode.classList.add('notEmpty');

            } else{
                input.parentNode.classList.remove('notEmpty');
            }
        })
    })
})
