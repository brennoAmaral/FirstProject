const menu = document.querySelector('div#menu');
const btnMenu = document.querySelector('button#btnMenu');
const iconMenu = btnMenu.firstChild;
let trueOrFalse = false;

btnMenu.addEventListener('click', ()=>{
    if(trueOrFalse == false){
        menu.classList.add('open');
        btnMenu.classList.add('open');
        trueOrFalse = true;
    }else{
        menu.classList.remove('open');
        btnMenu.classList.remove('open');
        trueOrFalse = false;
    }
});