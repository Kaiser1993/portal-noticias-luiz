const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const divMensagem = document.getElementById("divMensagem");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtSenha.value;
    if (email == "adm@gmail.com" && senha == "123456") {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login realizado com sucesso";
        localStorage.setItem("usuarioLogado", "sim");
        setTimeout(() => {
            window.location.href = "adm.html";
        }, 1000);
    }
    else {
        divMensagem.style.color = "red";
        divMensagem.textContent = "E-mail ou senha incorretos";
    }
});
export {};
//# sourceMappingURL=login.js.map