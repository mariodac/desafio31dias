// Palavras-chave para booleanos: true e false
// true -> verdadeiro
// false -> falso

let verdadeiro = true;
let falso = false;

// Comparações e Operadores Relacionais
// === : igualdade estrita
console.log(5 === 5);

// !== : desigualdade estrita
console.log(5 !== 6);

// < : menor que
console.log(5 < 6);

// > : maior que
console.log(6 > 5);

// <= : menor ou igual que
console.log(5 <= 3);

// >= : maior ou igual que
console.log(5 >= 6);

// Operadores Lógicos
// && : e
console.log(true && true);

// || : ou
console.log(true || false);

// ! : negação
console.log(!true);

// exemplo
let temCarteira = true;
let idade = 20;
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir 🚗");
} else {
    console.log("Não pode dirigir ❌");
}
// use parênteses para clareza
let temAcompanhante = false;
if ((idade >= 18 && temCarteira) || temAcompanhante) {
    console.log("Pode entrar!");
}

// cuidado com conversões automáticas (truthy e falsy)
// em javascript alguns valores são considerados com true ou false, mesmo que não sejam booleanos
// 0, "", null, undefined, NaN => false
// Qualquer outro valor => true
if (0) {
    console.log("Isso nunca será executado!");
}
if ("Texto") {
    console.log("Isso será executado!");
}
