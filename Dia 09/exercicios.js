// 1. Escreva uma função recursiva que conte de n até 0.
// 2. Implemente uma função que calcule o fatorial de um número.
// 3. Crie uma função que some todos os números de um array usando recursão.
// 4. Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.
// 5. Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.
// 6. Crie uma função que liste todos os arquivos de um diretório usando recursão.

// 1.
function contaRegressivo(numero) {
    if (numero === 0) {
        console.log("FIM");
        return 0;
    }
    console.log(numero);
    contaRegressivo(numero - 1);
}

contaRegressivo(5);

// 2.
function fatorial(numero) {
    if (numero == 1) {
        return 1;
    }
    return numero * fatorial(numero - 1);
}

function fatorial1(numero) {
    return numero === 0 ? 1 : numero * fatorial(numero - 1);
}

console.log(fatorial1(5));

// 3.
function somaArray(array, indice) {
    if (indice == 0) {
        return array[0];
    }
    return array[indice] + somaArray(array[indice - 1]);
}

let array = [1, 2, 3, 4, 5];
console.log(somaArray(array, (array.length - 1)));
