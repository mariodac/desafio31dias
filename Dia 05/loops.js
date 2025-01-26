// palavras-chave para usar loops: for, while e do while

// for -> usado para quando se sabe exatamente quantas vezes o loop deve ser executado
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while -> repete um bloco de códigos enquanto uma condição for verdadeira, use quando não sabe quantas vezes o loop deve ser executado
let contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
}

// do while -> semelhante ao while, mas executa o bloco de códigos pelo menos uma vez, use quando precisa executar um bloco de códigos pelo menos uma vez
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

// controlando loop
// palavra-chave break -> interrompe o loop
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

// palavra-chave continue -> pula para a próxima iteração do loop
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
