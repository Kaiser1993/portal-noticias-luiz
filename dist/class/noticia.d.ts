export declare class Noticia {
    id: string;
    titulo: string;
    conteudo: string;
    data: string;
    constructor(titulo: string, conteudo: string, data: string);
    cadastrar(): void;
    static listar(): Noticia[];
    static excluir(id: string): void;
    static alterar(noticiaAlterada: Noticia): void;
    static buscarNoticia(id: string): Noticia | undefined;
}
//# sourceMappingURL=noticia.d.ts.map