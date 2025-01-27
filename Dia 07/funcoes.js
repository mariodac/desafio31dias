// palavra-chave function é utilizado para declara uma função
// função é um bloco de código que realiza uma tarefa específica
// por exemplo, uma função que calcula a soma de dois números, que valida um email

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Ana"));

// criando funções no JavaScript
// 1. declaração de função (Function Declaration
function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3));

// 2. Expressão de Função (Function Expression)
const multiplicar = function (a, b) {
    return a * b;
};

console.log(multiplicar(4, 5));

// 3. Arrow Function (ES6)
const dividir = (a, b) => a / b;

console.log(dividir(10, 2));

// parâmetros e retornos
// funções com parâmetros
function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

console.log(cumprimentar("João"));

// funções sem retorno
function exibirMensagem(mensagem) {
    console.log(mensagem);
}

exibirMensagem("Bem-vindo ao curso!");

// funções com parâmetro de valor padrão
function somar(a = 0, b = 0) {
    return a + b;
}

console.log(somar(5));

// funções de alta ordem
// são aquelas que recebem outras funções como argumentos ou retornam funções

function calculadora(a, b, operacao) {
    return operacao(a, b);
}

const soma = (a, b) => a + b;
const multiplica = (a, b) => a * b;

console.log(calculadora(5, 3, soma));
console.log(calculadora(5, 3, multiplica));

// sempre que perceber que está repetindo código, considere criar uma função
// nomeie funções de forma clara, indicando claramente o que função faz
function calcularMedia() {} // claro
function calc() {} // pouco claro

// modularizar o código
// divida tarefas complexas em várias funções menores e reutilizáveis
