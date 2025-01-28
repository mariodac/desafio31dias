// tabuleiro de xadrez
let tabuleiro = [];
for (let i = 0; i < 9; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 9; j++) {
        tabuleiro[i][j] = (i + j) % 2 === 0 ? "⬜" : "⬛";
    }
}
console.log(tabuleiro);

// tabela de multiplicação
let tabela = [];
for (let i = 1; i <= 5; i++) {
    tabela[i] = [];
    for (let j = 1; j <= 5; j++) {
        tabela[i][j] = i * j;
    }
}
console.log(tabela);

// contar elementos maiores em um valor
let matriz = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 15],
];

let contador = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > 10) {
            contador++;
        }
    }
}
console.log(`Elementos maiores que 10: ${contador}`);
