var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const carregarRodape = () => __awaiter(void 0, void 0, void 0, function* () {
    const rodape = document.getElementById("rodape");
    //Carregar o arquivo rodape.html
    const conteudo = yield fetch("rodape.html");
    //Converter o conteúdo do arquivo para texto
    const html = yield conteudo.text();
    //Inserir o html no rodape
    rodape.innerHTML = html;
});
carregarRodape();
//# sourceMappingURL=rodape.js.map