// 1.Verifique se um número é maior que 10 e menor que 20.
// 2.Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
// 3.Implemente um sistema de notas onde:
//Notas >= 90: "Aprovado com A"
//Notas >= 70 e < 90: "Aprovado com B"
//Notas < 70: "Reprovado".
// 4.Crie uma variável saldo e verifique:
//Se saldo > 0: Mostre "Saldo positivo".
//Se saldo === 0: Mostre "Sem saldo".
// Caso contrário, mostre "Saldo negativo".
// 5.Use o operador ! para verificar se uma luz está apagada e ligue-a.

// 1.
let numero = 5;
console.log("O número é maior que 10 e menor que 20?");
if (numero > 10 && numero < 20) {
    console.log("Sim");
} else {
    console.log("Não");
}

// 2.
let idade = 18;
if (idade >= 18 && idade <= 70) {
    console.log("Votar é obrigatório");
} else if (idade >= 16 || idade >= 70) {
    console.log("Votar é opcional");
} else {
    console.log("Ainda não precisa votar");
}

// 3.
let nota = 71;

if (nota >= 90) {
    console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado com B");
} else {
    console.log("Reprovado");
}

// 4.
let saldo = 0;
if (saldo > 0) {
    console.log("Saldo positivo")
} else if (saldo ===0) {
    console.log("Sem saldo")
} else {
    console.log("Saldo negativo")
}

// 5.
let luzAcesa = false;

if (!luzAcesa) {
    console.log("A luz está apagada. Luz ligada💡");
    luzAcesa = true
} else {
    console.log("A luz está Acesa. Luz desligada📴");
    luzAcesa = false
}
console.log(luzAcesa)

