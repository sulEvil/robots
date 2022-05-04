// Подключение функционала
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('click', function(event){
    if(event.target.closest('.icon-menu')){
        document.querySelector('.menu').classList.toggle('menu_active');
    }

})