let linkRegister = document.getElementById('link-to-register');
let linklLogin = document.getElementById('link-to-login');
let formLogin = document.getElementsByClassName('login-form');
let formRegister = document.getElementsByClassName('register-form');
linkRegister.addEventListener('click',function(){

    formLogin[0].style.display='none';
    formRegister[0].style.display='block';

});
linklLogin.addEventListener('click',function(){

    formRegister[0].style.display='none';
    formLogin[0].style.display='block';

});
