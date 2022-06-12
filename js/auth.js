let nome = document.getElementById('name');
let phone = document.getElementById('phone');
let cpf = document.getElementById('cpf');
let email = document.getElementById('email');
let pw = document.getElementById('pw');
let cpw = document.getElementById('cpw');
let registerForm = document.getElementById('registerForm');
let loginForm = document.getElementById('login-form');


let geo ="";
    const successCallBack = (position)=>{
        geo = position.coords.latitude+','+position.coords.longitude;
    }
    const errorCallBack = (position)=>{
        geo ='';
    }
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack); 




function register() {
    if (!registerForm.reportValidity()) {
        if (!nome.reportValidity()) {
            alert('Digite seu nome');
        } if (!phone.reportValidity()) {
            alert('Insira seu telefone no seguinte formato:\n(DDD)XXXX-XXXXX');
        }if(!cpf.reportValidity()){
            alert('Digite um CPF valido');
        }if(!email.reportValidity()){
            alert('Digite um email valido');
        }if(!pw.reportValidity()){
            alert('Sua senha é obrigatoria e deve ter no minimo 6 digitos contedo ao menos letra maiuscula , um numero e uma letra minuscula');
        }
        //window.location.reload();
        return;
    }

    let users = JSON.parse(localStorage.getItem('Users')) || [];
    users.push({
        name: nome.value,
        phone: phone.value,
        cpf: cpf.value,
        email: email.value,
        password: pw.value
    });
    alert("Cadastro realizado com sucesso");
    localStorage.setItem('Users', JSON.stringify(users));
    let formLogin = document.getElementsByClassName('login-form');
    let formRegister = document.getElementsByClassName('register-form');
    formRegister[0].style.display = 'none';
    formLogin[0].style.display = 'block';
}

function login() {
    
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');
    if (!loginForm.reportValidity()) {
        return;
    } else { 
        if (JSON.parse(window.localStorage.getItem('Users'))!=null) {
            let users = JSON.parse(window.localStorage.getItem('Users'));
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == loginEmail.value && users[i].password == loginPassword.value) {
                    console.log(location);
                    let session = {
                        id: i,
                        nome: users[i].name,
                        email: users[i].email,
                        local: geo
                    }
                    console.log('OK');
                    sessionStorage.setItem("Token", true);
                    sessionStorage.setItem('Session', JSON.stringify(session));

                    location.href = 'home.html';
                    return;

                }

            }
        }else{
            let errorMessage = document.getElementById('loginError');
                    errorMessage.style.display = 'block';
                    return;
        }

    }
}



cpw.addEventListener('keyup', (event) => {

    if (cpw.value != pw.value) {
        cpw.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
        cpw.style.color = 'white';
        //cpw.style.opacity = '70%';
    } else {
        cpw.style.backgroundColor = 'rgba(102, 255, 107, 0.7)';
        cpw.style.color = 'black';
        //cpw.style.opacity = '70%';

    }
});

nome.addEventListener('keyup', (event) => {
    if (nome.value == '') {
        nome.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
        nome.style.color = 'white'
    }
});
