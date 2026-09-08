export class Noticia {
 public id: string;
public titulo: string;
public conteudo: string;
public data: string; 
 constructor(titulo: string, conteudo: string, data: string){
this.id = crypto.randomUUID();
this.titulo = titulo;
this.conteudo = conteudo;
this.data = data;
 }   
 public cadastrar() : void {
let listaNoticias: Noticia[]; 
listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]"); 
listaNoticias.push(this);
localStorage.setItem("listaNoticias", JSON.stringify(listaNoticias));
 }
 static listar(): Noticia[] {
let listaNoticias: Noticia[];
listaNoticias =JSON.parse(localStorage.getItem("listaNoticias") || "[]"); 
 return listaNoticias;
}

static excluir(id: string): void {
let listaNoticias: Noticia[]; 
listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
listaNoticias = listaNoticias.filter((noticia: Noticia) => noticia.id != id );
localStorage.setItem("listaNoticias",JSON.stringify(listaNoticias));
}

static alterar(noticiaAlterada: Noticia ): void {
let listaNoticias: Noticia[]; 
listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");
listaNoticias = listaNoticias.map((noticia: Noticia ) => {
if(noticia.id == noticiaAlterada.id ){
return noticiaAlterada;
}
else{
    return noticia;
}
});
localStorage.setItem("listaNoticias",JSON.stringify(listaNoticias));

}

static buscarNoticia(id: string) {
let listaNoticias: Noticia[]; 

listaNoticias = JSON.parse(localStorage.getItem("listaNoticias") || "[]");

let noticia = listaNoticias.find(noticia => noticia.id == id);
return noticia;
}

}
