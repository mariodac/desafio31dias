// Palavras-chaves para declarar variáveis: let, const e var
// let -> deve ser usado para quando precisa de uma variável cujo valor será alterado
// const -> deve ser usado para valores constantes ou estruturas que não serão reatribuídas
// var -> evite o uso, a menos que precise de compatibilidade com códigos antigos

// Utilizando o let o valor pode ser alterado depois
// Introduzido no ES6
// Escopo Local ao bloco onde foi declarada
// Pode ser ratribuída, mas não pode ser redeclarada no mesmo escopo
let nome = "João";

if (true) {
    let age = 25;
    console.log(age); // Funciona aqui
}
//console.log(age); // Erro: idade não está definida



// Utilizando o const o valor não pode ser alterado
// Também introduzido no ES6
// Escopo Loca ao bloco onde foi declarada
// Não pode ser reatribuída, mas se for u objeto ou array, seus valores internos podem ser alterados
const idade = 25;

const PI = 3.14;
//PI = 3.15; // Erro: Não pode reatribuir

// para objetos e arrays
const frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // Funciona
frutas[1] = "Abacate"; // Indices podem ser reatribuídos
console.log(frutas); // ["Maçã", "Banana", "Laranja"]



// Utilizando o var o valor pode ser alterado (não recomendado, mas funciona)
// Declarada antes do ES6
// Escopo Global ou Local dentro de funções. Ignora blocos
// Pode ser ratribuída e redeclarada no mesmo escopo
// Pode causar problemas devido ignorar os blocos, por exemplo, comportamentos inesperados, especialmente em loops
var cidade = "São Paulo";

if (true) {
    var name = "Pedro";
}
console.log(name); // Funciona, mesmo fora do bloco