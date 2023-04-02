"use strict";
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Denise";
let idade = 20;
let altura = 1.7;
// tipos especiais > null, undefined
let nulo = null;
let indefinido = undefined;
//tipos> abragentes: any, void
let retorno;
//aceita qualquer coisa > pode retornar qualquer coisa > um objeto, nulo, texto ou vazio
let retornoView = "s";
//objeto >obs: não é uma boa prática passa objetos dessa maneira;
let produto = {
    nome: "Denise",
    cidade: "SP",
    idade: 20,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 1,
};
// arrays > existe 2 maneiras de declaração
//1° pode ser feia assim
let dados = ["felipe", "ana", "adriana"];
//2° pode ser feita assim
let dados2 = ["felipe", "ana", "adriana"];
// Trabalhando com Arrays de Multi Types armazena ddois tipos diferentes> porem não aceita boleano
let infos = ["Denise", 2, "Prinsloo"];
// Trabalhando com Tuplas > tem que ser feito na exata na ordem que foi definida
//ela é mais inteligente, interessante
let boleto = ["agua conta", 95.55, 85.5];
// Trabalhando com Dates
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
// Funções > a diferença do js é que podem ser tipadas ex: x e y
//o retorno é do tipo number 
function addNumero(x, y) {
    return x + y;
}
//ela obrigatoriamente tem que ser do tipo number
let soma = addNumero(7, 8);
console.log(soma);
