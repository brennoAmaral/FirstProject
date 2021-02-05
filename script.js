const menu = document.querySelector('div#menu');
const btnMenu = document.querySelector('button#btnMenu');
const iconMenu = document.querySelector('img#iconMenu');
const icon = document.querySelector('img#icon');
let trueOrFalse = false;



btnMenu.addEventListener('click', ()=>{
    

    if(trueOrFalse == false){
        menu.classList.add('open');
        btnMenu.classList.add('open');
        iconMenu.src = 'img/icon-menu-white.svg';
        trueOrFalse = true;
    }else{
        menu.classList.remove('open');
        btnMenu.classList.remove('open');
        iconMenu.src = 'img/icon-menu.svg';
        trueOrFalse = false;
    }

});