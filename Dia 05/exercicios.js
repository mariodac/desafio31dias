// 1.Use um loop for para imprimir os números de 1 a 10 no console.
// 2.Crie uma lista de nomes e use um for para exibir cada nome.
// 3.Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
// 4.Use um while para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
// 5.Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1).

// 1.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2.
let nomes = [
    "Milton Newman",
    "Hattie Hammond",
    "William Gibbs",
    "Stella Austin",
    "Alvin Coleman",
];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// 3.
let numeros = [5, 3, 2, 3, 3, 10, 1235, 2143, 536];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
        break;
    }
}

// 4. while
let contador = 10;
while (contador >= 0) {
    if (contador === 0) {
        console.log("Lançamento!");
    }
    contador--;
}

// 5.
let numero = 5;
let fatorial = 1;
for (let i = numero; i > 1; i--){
    fatorial *= i 
    console.log(fatorial)
}

console.log(`Fatorial de ${numero} é ${fatorial}`)