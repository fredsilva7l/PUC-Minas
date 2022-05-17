const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

var botaoCopia = (document.querySelector('.cartao__botao--copiar'));
botaoCopia.onclick = (copia);

function copia() {
    var copia = (document.querySelector(".cartao__botao--copiar"));
    copia.value = "https://fredsilva7l.github.io/PUC-Minas/";
    navigator.clipboard.writeText(copia.value);
}