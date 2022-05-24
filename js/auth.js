let nome = document.getElementById('name');
let phone = document.getElementById('phone');
let cpf = document.getElementById('cpf');
let email = document.getElementById('email');
let pw = document.getElementById('pw');
let cpw = document.getElementById('cpw');
let registerForm = document.getElementById('registerForm');
let loginForm = document.getElementById('login-form');





function register() {
    if (!registerForm.reportValidity()) {
        console.log(registerForm.checkValidity());
        if (!nome.checkValidity()) {
            nome.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
            nome.style.color = 'white';
            nome.setCustomValidity('Este Campo é Obrigatorio');
        } if (!phone.checkValidity()) {
            phone.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
            phone.style.color = 'white';
            phone.setCustomValidity('Este Campo é Obrigatorio');
        }
        cpf.setCustomValidity('Este Campo é Obrigatorio');
        email.setCustomValidity('Este Campo é Obrigatorio');
        pw.setCustomValidity('Este Campo é Obrigatorio');
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
            console.log(users);
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == loginEmail.value && users[i].password == loginPassword.value) {

                    let session = {
                        id: i,
                        nome: users[i].name,
                        email: users[i].email
                    }
                    localStorage.setItem("Token", true);
                    window.localStorage.setItem('Session', JSON.stringify(session));

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

