// 1.Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável hora.
// 2.Use um switch para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
// 3.Crie um programa que verifica se uma pessoa pode dirigir. Use a variável idade e mostre "Pode dirigir" ou "Não pode dirigir".
// 4.Use o operador ternário para verificar se uma variável saldo é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
// 5.Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
// 6.Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha.

// 1.
let hora = 10;
if (hora >= 18) {
    console.log("Boa noite");
}else if (hora < 18 && hora > 12) {
    console.log("Boa tarde");
} else {
    console.log("Bom dia");
}


// 2. 
let mes = 22;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;    
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:    
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
}

// 3. 
let idade = 17;
if (idade > 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// 4.
let saldo = 10
let mensagem = saldo > 0 ? "Saldo positivo" : "Saldo negativo";
console.log(mensagem);

// 5.
let numero = -1;
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 6.
let saldoBanco = 0;
let opcao = 3;

switch (opcao) {
    case 1:
        saldoBanco = saldoBanco - 1;
        break
    case 2:
        saldoBanco = saldoBanco + 1
        break;
    case 3:
        console.log(saldoBanco)
}

