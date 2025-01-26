// iterando sobre um array
let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// somando números de 1 a 10
let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
}
console.log(`Soma total: ${soma}`);

// buscando um valor em uma lista
let numeros = [3, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === busca) {
        console.log(`Número ${busca} encontrado na posição ${i}!`);
        break;
    }
}

// validando dados com while
let senha = "1234";
let tentativa;

do {
    tentativa = prompt("Digite a senha:");
} while (tentativa !== senha);

console.log("Senha correta! 🎉");