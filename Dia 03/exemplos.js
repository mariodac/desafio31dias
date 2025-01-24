// verificando login
let estaLogado = true;

if (estaLogado) {
    console.log("Bem-vindo de volta! 👋");
} else {
    console.log("Por favor, faça login. ☝️");
}

// classificando notas
let nota = 85;

if (nota >= 90) {
    console.log("Nota A 🏆");
} else if (nota >= 70 && nota < 90) {
    console.log("Nota B 👍");
} else {
    console.log("Reprovado 😢");
}

// negação com !
let luzAcesa = false;

if (!luzAcesa) {
    console.log("A luz está apagada. 💡");
}

// combinação de condições
let saldo = 100;
let temCartao = true;

if (saldo > 0 || temCartao) {
    console.log("Compra aprovada 🛒");
} else {
    console.log("Compra negada ❌");
}
