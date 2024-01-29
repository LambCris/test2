let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu-list');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('active');
  menu.classList.toggle('open');

})