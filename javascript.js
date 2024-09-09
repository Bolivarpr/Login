function logar(){
    var login  = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
            alert('sucesso');
            location.href = "https://github.com/Bolivarpr"
    } else {
        alert('usuário ou senha incorretos');
    }
}