export const carregarMenuAcessibilidade = async() => {
const menuAcessibilidade = document.getElementById("divMenuAcessibilidade") as HTMLDivElement;

//Carregar o arquivo rodape.html
const conteudo = await fetch("menuAcessibilidade.html");

//Converter o conteúdo do arquivo para texto
const html = await conteudo.text();

//Inserir o html no rodape
menuAcessibilidade.innerHTML = html;

const btnAcessibilidade = document.getElementById("btnAcessibilidade") as HTMLButtonElement;
btnAcessibilidade.addEventListener("click", () => {
    const menuAcessibilidade = document.getElementById("menuAcessibilidade") as HTMLDivElement;
    menuAcessibilidade.hidden = !menuAcessibilidade.hidden;
    btnAcessibilidade.setAttribute("aria-expanded", String(!menuAcessibilidade.hidden));
});

const btnAumentarFonte = document.getElementById("btnAumentarFonte") as HTMLButtonElement;
btnAumentarFonte.addEventListener("click", () => {
let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
tamanhoFonte += 2;
document.body.style.fontSize = tamanhoFonte + "px";
});

const btnDiminuirFonte = document.getElementById("btnDiminuirFonte") as HTMLButtonElement;
btnDiminuirFonte.addEventListener("click", () => {

let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
tamanhoFonte -= 2;
document.body.style.fontSize = tamanhoFonte + "px"
});

const btnAlterarContraste = document.getElementById("btnAlterarContraste") as HTMLButtonElement;
btnAlterarContraste.addEventListener("click", () => {
document.body.classList.toggle("contraste");
});

}
carregarMenuAcessibilidade();
