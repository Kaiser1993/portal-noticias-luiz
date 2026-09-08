export const carregarRodape = async() => {
const rodape = document.getElementById("rodape") as HTMLDivElement;

//Carregar o arquivo rodape.html
const conteudo = await fetch("rodape.html");

//Converter o conteúdo do arquivo para texto
const html = await conteudo.text();

//Inserir o html no rodape
rodape.innerHTML = html;
}

carregarRodape();