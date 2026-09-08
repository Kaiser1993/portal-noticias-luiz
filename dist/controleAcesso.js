const usuarioLogado = localStorage.getItem("usuarioLogado");
if (!usuarioLogado) {
    window.location.href = "login.html";
}
export {};
//# sourceMappingURL=controleAcesso.js.map