// adicionar e remover elementos
let lista = ["Caderno", "Caneta", "Borracha"];
lista.push("Lápis"); 
lista.shift();
console.log(lista);

// iterar sobre um array
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// encontrar um elemento
let frutas = ["Maçã", "Banana", "Laranja"];
let indice = frutas.indexOf("Banana");
console.log(indice);

// copiar parte de um array
let listaNumeros = [10, 20, 30, 40, 50];
let subArray = listaNumeros.slice(1, 4);
console.log(subArray);

// manipular arrays com splice
let letras = ["A", "B", "C"];
letras.splice(1, 1, "X", "Y");
console.log(letras); 