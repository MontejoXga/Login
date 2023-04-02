const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('activate');  
})
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('activate');  
})
btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('activate-btn');  
})
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('activate-btn');  
})