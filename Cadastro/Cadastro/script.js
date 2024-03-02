let nome = document.getElementById("nome");
let labelNome = document.getElementById("labelNome");

let email = document.getElementById("email");
let labelEmail = document.getElementById("labelEmail");

let senha = document.getElementById("senha");
let labelSenha = document.getElementById("labelSenha");

let confirmarSenha = document.getElementById("confirmarSenha");
let labelConfirmarSenha = document.getElementById("labelConfirmarSenha");

const termosElement = document.getElementById("aceitarTermos");

// let msgError = document.getElementById("msgError");
let msgSuccess = document.getElementById("msgSuccess");
let msgError = document.getElementById("msgError");

function cadastrar(event) {
  event.preventDefault();

  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
    return;
  }

  if (email.value.length <= 8) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "Email *Insira no minimo 8 caracteres";
    return;

  }

  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Insira no minimo 6 caracteres";
    return;
   
  }

  if (confirmarSenha.value != senha.value) {
    labelConfirmarSenha.setAttribute("style", "color: red");
    labelConfirmarSenha.innerHTML = "Senha *As senhas não são iguais";
    return;
  
  }

  if (!termosElement.checked) {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "<strong>Você precisa aceitar os termos...</strong>";
    return;
  } else {
    msgError.setAttribute("style", "display: none");
  }

  let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
  listaUser.push({
    emailCad: email.value,
    userCad: nome.value,
    senhaCad: senha.value,
  });
  localStorage.setItem("listaUser", JSON.stringify(listaUser));
  msgSuccess.setAttribute("style", "display: block");
  msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
  setTimeout(() => {
    window.location.href = "/Login/index.html";
  }, 3000);
}
