// matriz é um array de arrays
// exemplo
// tabuleiro de xaque, planilha do excel

let matrix = [
    [1, 2, 3], // Linha 0
    [4, 5, 6], // Linha 1
    [7, 8, 9], // Linha 2
];

// acessar elementos de uma matriz
// primeiro índice designa a linha
// segundo índice designa a coluna

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matriz[1][2]); // (Linha 1, Coluna 2)

// criando matrizes dinamicamente
let linhas = 3;
let colunas = 3;
let matrizNumeros = [];

for (let i = 0; i < linhas; i++) {
    matrizNumeros[i] = [];
    for (let j = 0; j < colunas; j++) {
        matrizNumeros[i][j] = i + j; // Exemplo: Soma dos índices
    }
}

console.log(matrizNumeros);

// métodos úteis para matrizes
// iterar sobre uma matriz
let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento [${i}][${j}]: ${matriz[i][j]}`);
    }
}

// somar todos os elementos
let matriz3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
}

console.log(`Soma total: ${soma}`);

// encontrar o maior valor
let matriz4 = [
    [1, 20, 3],
    [4, 5, 6],
    [7, 8, 90],
];

let maior = matriz4[0][0];
for (let i = 0; i < matriz4.length; i++) {
    for (let j = 0; j < matriz4[i].length; j++) {
        if (matriz4[i][j] > maior) {
            maior = matriz4[i][j];
        }
    }
}

console.log(`Maior valor: ${maior}`); 

// pense em linhas e colunas
// imagine a matriz como uma tabela

// cuidado com índices inválidos
// sempre faça a validação de indices antes de acessar um elemento

let matriz5 = [[1, 2], [3, 4]];
console.log(matriz5[2][0]); 