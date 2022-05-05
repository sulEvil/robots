// Подключение функционала
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('click', function(event){
    const menu = document.querySelector('.menu__container');
    if(event.target.closest('.icon-menu')){
        document.querySelector('html').classList.toggle('lock');
        document.querySelector('.menu').classList.toggle('menu_active');
        if(getComputedStyle(menu).bottom == '0px'){
            menu.style.bottom = '100%';
            menu.style.paddingTop = '0';
            menu.style.paddingBottom = '0';
        } else {
            menu.style.bottom = '0';
            menu.style.paddingTop = '100px';
            menu.style.paddingBottom = '80px';
        }
    }
    if(event.target.closest('.menu__item_inside')){
    }
    if(event.target.closest('.nav__item_callback')){
        document.querySelector('.nav__body').style.width = '33%';
    }else{
        document.querySelector('.nav__body').style.width = '0';
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
