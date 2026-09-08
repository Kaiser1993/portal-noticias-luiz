import { Noticia } from "./class/noticia.js";
const formCadNoticia = document.getElementById("formCadNoticia");
const txtTitulo = document.getElementById("txtTitulo");
const txtConteudo = document.getElementById("txtConteudo");
const txtData = document.getElementById("txtData");
const divMensagem = document.getElementById("divMensagem");
const tituloPagina = document.getElementById("tituloPagina");
const tituloCabecalho = document.getElementById("tituloCabecalho");
const btnEnviar = document.getElementById("btnEnviar");
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
if (id) {
    tituloPagina.textContent = "Alteração de Notícia";
    tituloCabecalho.textContent = "Alteração de notícia";
    btnEnviar.textContent = "Alterar";
    let noticia = Noticia.buscarNoticia(id);
    if (noticia) {
        txtTitulo.value = noticia.titulo;
        txtConteudo.value = noticia.conteudo;
        txtData.value = noticia.data;
    }
}
formCadNoticia.addEventListener("submit", (event) => {
    event.preventDefault();
    const titulo = txtTitulo.value;
    const conteudo = txtConteudo.value;
    const data = txtData.value;
    if (!id) {
        const noticia = new Noticia(titulo, conteudo, data);
        noticia.cadastrar();
        divMensagem.style.color = "green";
        divMensagem.textContent = "";
        divMensagem.textContent = "Cadastro realizado com sucesso";
        formCadNoticia.reset();
    }
    else {
        let noticiaAlterada = new Noticia(titulo, conteudo, data);
        noticiaAlterada.id = id;
        Noticia.alterar(noticiaAlterada);
        divMensagem.style.color = "green";
        divMensagem.textContent = "Alteração realizada com sucesso!";
        setTimeout(() => {
            window.location.href = "listagemDeNoticias.html";
        }, 1000);
    }
});
//# sourceMappingURL=cadNoticias.js.map