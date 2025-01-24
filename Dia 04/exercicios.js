// 1.Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
// 2.Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
// 3.Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
// 4.Substitua a palavra "erro" por "correção" na string "Houve um erro no sistema.".
// 5.Divida a frase "Eu amo JavaScript" em palavras separadas e exiba cada uma.
// 6.Valide se um URL começa com https:// e termina com .com.

// 1.
let nome = "João Silva"
console.log(nome.slice(0, 4))

// 2.
let palavra = "Java não superar JavaScript";
if (palavra.includes("Java")) {
    console.log("A palavra contém Java")
} else {
    console.log("A palavra não contém Java")
}

// 3.
let frase = '   Olá mundo!   '
console.log(frase.trim().toUpperCase())

// 4.
let mensagem = "Houve um erro no sistema."
console.log(mensagem)
console.log(mensagem.replace("erro", "correção"))

// 5.
let frase2 = "Eu amo JavaScript"
console.log(`${frase2.slice(0, 2)}\n${frase2.slice(3, 6)}\n${frase2.slice(7, 17)}`)

// 6.
let url = "https://umporcentoprogramador.notion.site"
if (url.startsWith("https://") && url.endsWith(".com")){
    console.log("Incia com https:// e termina com .com")
} else {
    console.log("Não inicia com https:// ou termina com .com")
}