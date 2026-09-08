import { Noticia } from "./class/noticia.js";
window.onload = () => {
    let listaNoticias = Noticia.listar();
    let tabela = document.getElementById("tabelaNoticias");
    tabela.innerHTML = "";
    // cabeçalho da tabela 
    let linha = tabela.insertRow();
    let thTitulo = document.createElement("th");
    thTitulo.textContent = "Título";
    linha.appendChild(thTitulo);
    let thConteudo = document.createElement("th");
    thConteudo.textContent = "Conteúdo";
    linha.appendChild(thConteudo);
    let thData = document.createElement("th");
    thData.classList.add("data");
    thData.textContent = "Data";
    linha.appendChild(thData);
    let thAcoes = document.createElement("th");
    thAcoes.textContent = "Ações";
    thAcoes.colSpan = 2;
    linha.appendChild(thAcoes);
    listaNoticias.forEach(noticia => {
        linha = tabela.insertRow();
        linha.insertCell().textContent = noticia.titulo;
        linha.insertCell().textContent = noticia.conteudo;
        linha.insertCell().textContent = noticia.data;
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            if (confirm("Deseja realmente excluir a notícia: " + noticia.titulo + "?  ")) {
                Noticia.excluir(noticia.id);
                alert("Notícia excluida com sucesso");
                window.location.reload();
            }
        });
        linha.insertCell().appendChild(btnExcluir);
        let btnAlterar = document.createElement("button");
        btnAlterar.textContent = "Alterar";
        btnAlterar.addEventListener("click", () => {
            window.location.href = `cadNoticias.html?id=${noticia.id}`;
        });
        linha.insertCell().appendChild(btnAlterar);
    });
};
//# sourceMappingURL=listagemNoticiaAdm.js.map