// Подключение функционала
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
document.addEventListener('DOMContentLoaded', function (event) {

}) // DOMContentLoaded EEEEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNDDDDDDDDDDDDDDDDDDDDDD
document.querySelectorAll('.input__callback').forEach(function(input){
    input.addEventListener('change', function (e) {
        if(input.value){
            input.parentNode.classList.add('notEmpty');
        } else{
            input.parentNode.classList.remove('notEmpty');
        }
    })
})
const menu = document.querySelector('.menu__container');
let card = document.querySelector('.present__container');
function smoothJumpUp() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 6);
    }
}
function appearMenu() {
    let menuItems = document.querySelectorAll('.menu__item');
    let worksItems = document.querySelectorAll('.menu__work-item');
    let socials = document.querySelectorAll('.menu__social');
    let infoBlock = document.querySelector('.menu__info-block');
    menuItems.forEach((item, index) => {
        setTimeout(function(){
            item.classList.add('menu__item-vis');
        }, index * 100);
    });
    worksItems.forEach((item, index) => {
        setTimeout(function(){
            item.classList.add('menu__work-vis');
        }, index * 100);
    });
    socials.forEach((item, index) => {
        setTimeout(function(){
            item.classList.add('menu__social-vis');
        }, index * 100);
    });
    setTimeout(function(){
        infoBlock.classList.add('menu__info-block-vis')
    }, 100);
}
function unAppearMenu() {
    let menuItems = document.querySelectorAll('.menu__item');
    let worksItems = document.querySelectorAll('.menu__work-item');
    let socials = document.querySelectorAll('.menu__social');
    let infoBlock = document.querySelector('.menu__info-block');
    menuItems.forEach((item, index) => {
        item.classList.remove('menu__item-vis');
    });
    worksItems.forEach((item, index) => {
        item.classList.remove('menu__work-vis');
    });
    socials.forEach((item, index) => {
        item.classList.remove('menu__social-vis');
    });
    setTimeout(function(){
        infoBlock.classList.remove('menu__info-block-vis')
    }, 100);
}
function openNav(){
    document.querySelector('.nav').classList.add('nav_active');
    document.querySelector('html').classList.add('lock');
}
function openMenuPhone(){
    document.querySelector('html').classList.add('lock');
    document.querySelector('.menu').classList.add('menu_active-phone');
    setTimeout(appearMenu, 500);
}
function openMenu(){
    document.querySelector('html').classList.add('lock');
    document.querySelector('.menu').classList.add('menu_active');
    setTimeout(appearMenu, 500);
}
function reset(){
    document.querySelector('html').classList.remove('lock');
    document.querySelector('.menu').classList.remove('menu_active');
    document.querySelector('.menu').classList.remove('menu_active-phone');
    document.querySelector('.nav').classList.remove('nav_active');
    document.querySelector('.header').classList.remove('header_active');
    unAppearMenu();

}
function closeNav(){
    document.querySelector('.nav').classList.remove('nav_active');
    document.querySelector('html').classList.remove('lock');
}
function nextSlide(className, idName){
    let aboutSlide = document.getElementsByClassName(className);
    for (let i = 0; i < aboutSlide.length; i++) {
        /*Se è la prima immagine, diventa l'ultima*/
        if (aboutSlide[i].id == `${idName}-1`) {
            aboutSlide[i].id = `${idName}-${aboutSlide.length}`;
        } else {
            /*Se non è la prima immagine...*/
            let eid = aboutSlide[i].id;
            let strnum = eid.match(/\d+$/)[0];
            let num = parseInt(strnum);
            /*...scorre indietro di uno*/
            strnum--;
            aboutSlide[i].id = `${idName}-` + strnum;
        }
    }
}
function prevSlide(className, idName){
    let aboutSlide = document.getElementsByClassName(className);
    for (let i = 0; i < aboutSlide.length; i++) {
        /*Se è la prima immagine, diventa l'ultima*/
        if (aboutSlide[i].id == `${idName}-${aboutSlide.length}`) {
            aboutSlide[i].id = `${idName}-1`;
        } else {
            /*Se non è la prima immagine...*/
            let eid = aboutSlide[i].id;
            let strnum = eid.match(/\d+$/)[0];
            let num = parseInt(strnum);
            /*...scorre indietro di uno*/
            strnum++;
            aboutSlide[i].id = `${idName}-` + strnum;
        }
    }
}
function nextText(className, classActive){
    let texts = document.getElementsByClassName(className);
    for (let i = 0; i < texts.length; i++) {
        if(i == texts.length - 1){
            texts[i].classList.remove(classActive);
            texts[0].classList.add(classActive);
            break;
        }
        if(texts[i].classList.contains(classActive)){
            texts[i].classList.remove(classActive);
            texts[i + 1].classList.add(classActive);
            break;
        }
    }
}
function prevText(className, classActive){
    let texts = document.getElementsByClassName(className);
    for (let i =  texts.length - 1; i >= 0; i--) {
        if(i == 0){
            texts[0].classList.remove(classActive);
            texts[texts.length - 1].classList.add(classActive);
            break;
        }
        if(texts[i].classList.contains(classActive)){
            texts[i].classList.remove(classActive);
            texts[i - 1].classList.add(classActive);
            break;
        }
    }
}
document.addEventListener('click', function(event){
    if(event.target.closest('.footer__icon-top')){
        smoothJumpUp();
    }
    if(event.target.closest('.header__burger') && !document.querySelector('.header').classList.contains('header_active')){
        openMenuPhone();
        document.querySelector('.header').classList.add('header_active');
    } else if(event.target.closest('.header__burger') && document.querySelector('.header').classList.contains('header_active')){
        reset();
    }
    if(event.target.closest('.icon-menu')){
        if(document.querySelector('html').classList.contains('lock') && document.querySelector('.nav').classList.contains('nav_active')){
            closeNav();
            openMenu();
        }else if(document.querySelector('html').classList.contains('lock')){
            reset();
        } else {
            closeNav();
            openMenu();
        }
    }
    if(document.querySelector('.nav').classList.contains('nav_active') && !event.target.closest('.nav__body')){
        document.querySelector('.nav').classList.remove('nav_active');
    }
    if(event.target.closest('.nav__item_callback')){
        if(!document.querySelector('.nav').classList.contains('nav_active')){
            openNav();
        }
    }
    // проверка, если не кнопка или body меню, то убирать лок
    if(!event.target.closest('.header') && !event.target.closest('.menu__container') && !event.target.closest('.header__burger') && !event.target.closest('.nav__body') && !event.target.closest('.menu__body') && !event.target.closest('.nav__item_callback') && !event.target.closest('.icon-menu')){
        document.querySelector('html').classList.remove('lock');
    }

    if(event.target.closest('.nav-body__close')){
        closeNav();
    }
    if(event.target.closest('#slide-left')){
        mySlideRight();
    }
    if(event.target.closest('#slide-right')){
        mySlideLeft();
    }

    if(event.target.closest('.case__left')){
        prevSlide("case__card", "case__card");
        prevText('case__desc_text', 'case__desc_active');
    }
    if(event.target.closest('.case__right')){
        nextSlide("case__card", "case__card");
        nextText('case__desc_text', 'case__desc_active');
    }
    if(event.target.closest('.news__left')){
        prevSlide("news__card", "news-card");
        prevText('news__info', 'news__info_active');
    }
    if(event.target.closest('.news__right')){
        nextSlide("news__card", "news-card");
        nextText('news__info', 'news__info_active');
    }
    if(event.target.closest('.header__icon')){
        openNav();
    }
})
document.addEventListener('keydown',function(event) {
    const menu = document.querySelector('.menu__container');
    // ESCAPE key pressed
    if (event.keyCode == 27) {
        document.querySelector('html').classList.remove('lock');
        document.querySelector('.menu').classList.remove('menu_active-phone');
        document.querySelector('.nav').classList.remove('nav_active');
        document.querySelector('.menu').classList.remove('menu_active');
        unAppearMenu();
    }
});
function carousel () {
    (function (d) {
        /*  FUNZIONE EVENTI SWIPE DESTRA SINISTRA SU GIU'*/
        var ce = function (e, n) {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent(n, true, true, e.target);
                e.target.dispatchEvent(a);
                a = null;
                return false;
            },
            nm = true,
            sp = { x: 0, y: 0 },
            ep = { x: 0, y: 0 },
            touch = {
                touchstart: function (e) {
                    sp = { x: e.touches[0].pageX, y: e.touches[0].pageY };
                },
                touchmove: function (e) {
                    nm = false;
                    ep = { x: e.touches[0].pageX, y: e.touches[0].pageY };
                },
                touchend: function (e) {
                    if (nm) {
                        ce(e, "fc");
                    } else {
                        var x = ep.x - sp.x,
                            xr = Math.abs(x),
                            y = ep.y - sp.y,
                            yr = Math.abs(y);
                        if (Math.max(xr, yr) > 20) {
                            ce(e, xr > yr ? (x < 0 ? "swl" : "swr") : y < 0 ? "swu" : "swd");
                        }
                    }
                    nm = true;
                },
                touchcancel: function (e) {
                    nm = false;
                }
            };
        for (var a in touch) {
            d.addEventListener(a, touch[a], false);
        }
    })(document);
    var h = function (e) {
        console.log(e.type, e);
    };
    document.body.addEventListener("fc", h, false); // 0-50ms vs 500ms with normal click
    /*SWIPE A DESTRA*/
    document
        .getElementById("slider-cont")
        .addEventListener("swr", mySlideRight, false);
    /*SWIPE A SINISTRA*/
    document
        .getElementById("slider-cont")
        .addEventListener("swl", mySlideLeft, false);
    /*document.body.addEventListener('swu',h,false);
  document.body.addEventListener('swd',h,false);*/
};
function mySlideRight() {
    /*SE SWIPE SULLA DESTRA*/
    /*Seleziona tutte le immagini della slide*/
    var sli = document.getElementsByClassName("cont-slider");
    for (var i = 0; i < sli.length; i++) {
        /*Se è la prima immagine, diventa l'ultima*/
        if (sli[i].id == "ext-1") {
            sli[i].id = "ext-4";
        } else {
            /*Se non è la prima immagine...*/
            var eid = sli[i].id;
            var strnum = eid.match(/\d+$/)[0];
            var num = parseInt(strnum);
            /*...scorre indietro di uno*/
            strnum--;
            sli[i].id = "ext-" + strnum;
        }
    }
}
function mySlideLeft() {
    /*SE SWIPE SULLA SINISTRA*/
    /*Seleziona tutte le immagini della slide*/
    var sli = document.getElementsByClassName("cont-slider");
    for (var i = 0; i < sli.length; i++) {
        /*Se è l'ultima immagine, diventa la prima*/
        if (sli[i].id == "ext-4") {
            sli[i].id = "ext-1";
        } else {
            /*Se non è l'ultima immagine...*/
            var eid = sli[i].id;
            var strnum = eid.match(/\d+$/)[0];
            var num = parseInt(strnum);
            /*...scorre avanti di unos*/
            strnum++;
            sli[i].id = "ext-" + strnum;
        }
    }
}
function selectSliderElement(e) {
    /*Se viene cliccato un elemento della slider, viene in primo piano*/
    var idd = e.id;
    var numstr = idd.match(/\d+$/)[0];
    var numid = parseInt(numstr);
    var sli = document.getElementsByClassName("cont-slider");
    if (numid == 1) {
    } else {
        var times = 9 - numid;
        for (var z = 0; z < times; z++)
            for (var i = 0; i < sli.length; i++) {
                /*Se è l'ultima immagine, diventa la prima*/
                if (sli[i].id == "ext-4") {
                    sli[i].id = "ext-1";
                } else {
                    /*Se non è l'ultima immagine...*/
                    var eid = sli[i].id;
                    var strnum = eid.match(/\d+$/)[0];
                    var num = parseInt(strnum);
                    /*...scorre avanti di unos*/
                    strnum++;
                    sli[i].id = "ext-" + strnum;
                }
            }
    }
}

document.querySelectorAll('.cont-slider').forEach(slide => {
    slide.addEventListener('click', function (e){
        selectSliderElement(this);
    })
})
window.addEventListener('resize',function(){
    reset();
});
carousel();