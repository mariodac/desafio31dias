// array é uma lista ordenada de elementos
let frutas = ["banana", "maca", "laranja"];
console.log(frutas);

// array simples
let numeros = [1, 2, 3, 4, 5];

// array misto
let misto = [1, "banana", false, 3.14, {'chave': 'valor'}];

// array vazio
let vazio = [];

// adicionar elementos ao array
frutas.push("uva");
console.log(frutas);

// métodos e propriedades de arrays

// adiciona um elemento ao final -> push()
frutas.push("abacaxi");
console.log(frutas);

// remove o ultimo elemento -> pop()
frutas.pop();
console.log(frutas);

// remove o primeiro elemento -> shift()
frutas.shift();
console.log(frutas);

// adiciona um elemento no inicio -> unshift()
frutas.unshift("abacaxi");
console.log(frutas);

// retorna o tamanho do array -> length
console.log(frutas.length);

// retorna o índice de um valor -> indexOf()
console.log(frutas.indexOf("abacaxi"));

// retorna parte do array -> slice()
console.log(frutas.slice(1, 3));

// adiciona/remove elementos -> splice()
frutas.splice(1, 1, "morango");
console.log(frutas);

// junta os elementos em uma string
console.log(frutas.join(" - "));

// acessar o último elemento
console.log(frutas[frutas.length - 1]);

// cuidado com indices inválidos
// sempre faça a validação de indices antes de acessar um elemento
index = 5
console.log(frutas[index]);
if (Number.isInteger(index) && index >= 0 && index < frutas.length) {
    console.log(frutas[index]);
} else { 
    console.log("Indice inválido");
}

// ou utilize o método find ou findIndex
const result = frutas.find((fruta) => fruta === "banana");
console.log(result ?? "Valor não encontrado");	
