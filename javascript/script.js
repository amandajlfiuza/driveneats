let nomePrato;
let valorPrato;
let nomeBebida;
let valorBebida;
let nomeSobremesa;
let valorSobremesa;

function selecionarPrato(elemento) {
    nomePrato = elemento.querySelector("h3").innerHTML;
    valorPrato = elemento.querySelector(".valor").innerHTML;
    const produtoSelecionado = document.querySelector(".pratos .selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");

    liberarBotao();
}
function ativarCheckPrato(elemento) {
    const checkAtivo = document.querySelector(".pratos .ativo");
    if (checkAtivo !== null) {
        checkAtivo.classList.remove("ativo");
    }
    elemento.querySelector(".check").classList.add("ativo");
}
function selecionarBebida(elemento) {
    nomeBebida = elemento.querySelector("h3").innerHTML;
    valorBebida = elemento.querySelector(".valor").innerHTML;
    const produtoSelecionado = document.querySelector(".bebidas .selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");

    liberarBotao();
}
function ativarCheckBebida(elemento) {
    const checkAtivo = document.querySelector(".bebidas .ativo");
    if (checkAtivo !== null) {
        checkAtivo.classList.remove("ativo");
    }
    elemento.querySelector(".check").classList.add("ativo");
}
function selecionarSobremesa(elemento) {
    nomeSobremesa = elemento.querySelector("h3").innerHTML;
    valorSobremesa = elemento.querySelector(".valor").innerHTML;
    const produtoSelecionado = document.querySelector(".sobremesas .selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");

    liberarBotao();
}
function ativarCheckSobremesa(elemento) {
    const checkAtivo = document.querySelector(".sobremesas .ativo");
    if (checkAtivo !== null) {
        checkAtivo.classList.remove("ativo");
    }
    elemento.querySelector(".check").classList.add("ativo");
}
function liberarBotao() {
    if (nomePrato && nomeBebida && nomeSobremesa) {
        document.querySelector(".texto-botao").innerHTML = "Fechar pedido";
        document.querySelector(".fechar-pedido").classList.add("botao-selecionado");
    }
}