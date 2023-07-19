function entrar() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    if (email == 'admin@gmail.com' && senha == '123456')   {
        window.location.href = "page_home/login.html";
    } else {
        window.alert('Seu email ou senha estão incorretos')
    }
}

function toggleMode() {
    let hmtl = document.documentElement
    hmtl.classList.toggle('light')

    let img = document.querySelector('#profile img')

    if (hmtl.classList.contains('light')) {
        img.setAttribute('src', './img/avatar-light.png')
    } else {
        img.setAttribute('src', './img/avatar.png')
    }
}