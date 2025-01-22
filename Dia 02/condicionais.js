// Palavras-chave para usar condicinais: if, else if e else, switch e case
// if e else -> executa um bloco de códigos se uma condição for verdadeira, e outro bloco caso contrário
// else if -> permite testar várias condições
// switch -> ideal para verificar muitas possibilidades de forma mais limpa

let hora = 10;

if (hora < 12) {
    console.log("Bom dia! ☀️");
} else if (hora < 18) {
    console.log("Boa tarde! 🌤️");
} else {
    console.log("Boa noite! 🌙");
}

let diaSemana = 2;

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Outro dia");
}
// case é uma condição que verifica o valor da variável
// default é executado se nenhum dos casos for verdadeiro
// break impede que o código continue executando outros casos

// Dicas
// coloque condições mais específicas primeiro
if (nota >= 90) {
    // Específico
} else if (nota >= 50) {
    // Geral
}
// use switch para evitar muitos else if
// organizar condições para não haver repetições

// operador ternário -> é com um if resumido
let idade = 18;
let mensagem = idade >= 18 ? "Pode entrar! 🎉" : "Entrada proibida! ❌";

console.log(mensagem);
// se a idade for maior ou igual a 18, imprime "Pode entrar! 🎉", caso contrário, imprime "Entrada proibida! ❌"