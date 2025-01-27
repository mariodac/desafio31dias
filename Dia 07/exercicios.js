// 1. Crie uma função que calcule o dobro de um número.
// 2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
// 3. Crie uma função que receba dois números e retorne o maior deles.
// 4. Implemente uma função que calcule a média de três números.
// 5. Crie uma função que receba um array de números e retorne a soma deles.
// 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

// 1.
function numeroDobrado(numero) {
    return numero * 2;
}

console.log(numeroDobrado(5));

// 2.
function saudacao(nome) {
    return `Seja bem-vindo ao sistema, ${nome}`;
}

console.log(saudacao("Mario"));

// 3.
function maiorNumero(numeroA, numeroB) {
    if (numeroA > numeroB) {
        return numeroA;
    }
    return numeroB;
}

console.log(maiorNumero(10, 11));

// 4.
function calculaMedia(numeroA, numeroB, numeroC) {
    return (numeroA + numeroB + numeroC) / 3;
}

console.log(calculaMedia(51, 62, 73));

// 5.
function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4, 5]));

// 6.
function tamanhoString(string) {
    return string.length;
}

console.log(tamanhoString("Olá"));
