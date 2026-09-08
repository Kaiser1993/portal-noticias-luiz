export class Noticia {
    constructor(titulo, conteudo, data) {
        this.id = crypto.randomUUID();
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.data = data;
    }
    cadastrar() {
        let listaNoticias;
        listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
        listaNoticias.push(this);
        localStorage.setItem("listaNoticias", JSON.stringify(listaNoticias));
    }
    static listar() {
        let listaNoticias;
        listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
        return listaNoticias;
    }
    static excluir(id) {
        let listaNoticias;
        listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
        listaNoticias = listaNoticias.filter((noticia) => noticia.id != id);
        localStorage.setItem("listaNoticias", JSON.stringify(listaNoticias));
    }
    static alterar(noticiaAlterada) {
        let listaNoticias;
        listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
        listaNoticias = listaNoticias.map((noticia) => {
            if (noticia.id == noticiaAlterada.id) {
                return noticiaAlterada;
            }
            else {
                return noticia;
            }
        });
        localStorage.setItem("listaNoticias", JSON.stringify(listaNoticias));
    }
    static buscarNoticia(id) {
        let listaNoticias;
        listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
        let noticia = listaNoticias.find(noticia => noticia.id == id);
        return noticia;
    }
}
//# sourceMappingURL=noticia.js.map