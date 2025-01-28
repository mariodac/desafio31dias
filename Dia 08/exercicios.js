// 1. Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.
// 2. Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.
// 3. Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".
// 4. Verifique quantos números em uma matriz são pares.
// 5. Substitua todos os valores maiores que 10 em uma matriz por 0.
// 6. Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.

// 1.
let linhas = 3;
let colunas = 3;
contador = 1;
let matriz3 = [];

for (let i = 0; i < linhas; i++) {
    matriz3[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz3[i][j] = contador;
        contador++;
    }
}

console.table(matriz3);

// 2.
function somaMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

console.log(somaMatriz(matriz3));

// 3.
let tabuleiro = [];
for (let i = 0; i < 8; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            tabuleiro[i][j] = "🟥";
        } else {
            tabuleiro[i][j] = "🟦";
        }
    }
}

for (let i = 0; i < 8; i++) {
    console.log(tabuleiro[i].join(" "));
}

// 4.
let pares = 0;
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        if (matriz3[i][j] % 2 === 0) {
            pares++;
        }
    }
}

console.log(`Quantidade de números pares: ${pares}`);

// 5.
let matrix = [
    [1, 2, 3],
    [11, 12, 13],
    [1, 22, 2],
];

console.table(matrix);


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > 10) {
            matrix[i][j] = 0;
        }
    }
}

console.table(matrix);

// 6.
console.table(matriz3);

let multiplicador = 3;
for (let i = 0; i < matriz3.length; i++) {
    for (let j = 0; j < matriz3[i].length; j++) {
        matriz3[i][j] *= multiplicador;
    }
}

console.table(matriz3);
