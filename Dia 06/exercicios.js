// 1.Crie um array com suas três cores favoritas e adicione uma nova cor no final.
// 2.Use um loop para exibir todos os itens de um array de compras.
// 3.Dado um array de números [10, 20, 30, 40, 50], use o método slice para extrair os dois últimos números.
// 4.Crie um array de tarefas e remova a primeira tarefa usando shift.
// 5Use splice para substituir o terceiro item de um array por "Substituído".
// 6.Transforme um array de palavras em uma frase completa usando join.

// 1.
let cores = ["Azul", "Vermelho", "Verde"];
console.log(cores);
cores.push("Roxo");
console.log(cores);

// 2.
let compras = ["arroz", "feijão", "abobora", "picanha"];
for (let i = 0; i < compras.length; i++) {
    console.log(compras[i])
}

// 3.
let numeros = [10, 20, 30, 40, 50];
let subNumeros = numeros.slice(numeros.length - 2, numeros.length)
console.log(subNumeros)

// 4.
let tarefas = ["acordar", "trabalhar", "limpar", "dormir"]
console.log(tarefas)
tarefas.shift()
console.log(tarefas)

// 5.
console.log(compras)
compras.splice(3, 1, "Substituído")
console.log(compras)

// 6.
console.log(cores.join(" | "))
