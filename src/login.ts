
const formLogin = document.getElementById("formLogin") as HTMLFormElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

formLogin.addEventListener("submit", (event) => {

event.preventDefault();
    
const email = txtEmail.value;
const senha = txtSenha.value;

if(email  == "adm@gmail.com" && senha == "123456"){
    divMensagem.style.color="green";
    divMensagem.textContent="Login realizado com sucesso";
    localStorage.setItem("usuarioLogado", "sim")
    setTimeout(() => {
        window.location.href="adm.html"
    },1000 );
}
else{
   divMensagem.style.color="red";
divMensagem.textContent="E-mail ou senha incorretos"; 
}

});