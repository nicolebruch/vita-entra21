
//--------------------------------------------------- LOGIN VALIDAÇÃO ----------------------------------------------
const formulario = document.getElementById('formulario')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const labelEmail = document.getElementById('labelEmail');
const labelSenha = document.getElementById('labelSenha');
const msgError = document.querySelector('.esqueciSenha'); // Assuming 'esqueciSenha' is a class, not an ID


formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    realizarLogin()
})

function realizarLogin() {
    const emailCad = email.value;
    const senhaCad = senha.value;

    const dadosArmazenados = JSON.parse(localStorage.getItem("listaUser") || "[]");

    if (dadosArmazenados.length > 0) {
        const usuarioEncontrado = dadosArmazenados.find(user => user.emailCad === emailCad && user.senhaCad === senhaCad);

        if (usuarioEncontrado) {
            window.location.href = '/Home/index.html';
        } else {
            labelEmail.setAttribute('style', 'color: red')
            labelEmail.innerHTML = "Email *Email ou senha incorretos";
            labelSenha.setAttribute('style', 'color: red')
            labelSenha.innerHTML = "Senha *Email ou senha incorretos";
            msgError.setAttribute('style', 'display: block')
        }

    }
}

function erro(input, message) {
    const formularioItem = input.parentElement;
    const textMessage = formularioItem.querySelector("a")

    textMessage.innerText = message;
    formularioItem.className = "formulario-content error"

}
